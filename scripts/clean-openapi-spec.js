const fs = require('fs');
const path = require('path');

/**
 * Скрипт для предобработки OpenAPI спецификации
 * 1. Удаляет суффиксы [1], [2] и т.д. из operationId, которые добавляет NestJS/Swagger
 * 2. Добавляет версию V1 к методам без версии в названии (например, checkCountry -> checkCountryV1)
 * 3. Удаляет префиксы контроллеров из имен типов в схемах
 * 4. Автоматически устанавливает правильную версию по умолчанию для параметра v
 * 5. Очищает имена операций от префиксов Site и Controller, оставляя осмысленные части
 */

const specPath = path.join(__dirname, '../temp/backend_v2.json');

/**
 * Убирает суффиксы [1], [2] и т.д. из operationId
 */
function removeSuffixes(operationId) {
  return operationId.replace(/\[\d+\]$/, '');
}

/**
 * Добавляет версию V1 к методам без версии и исправляет дублирующиеся версии
 */
function addDefaultVersion(operationId) {
  // Специальный случай: если есть _v{число}V{число}, убираем последнее V{число}
  // Например: getSetting_v3V1 -> getSetting_v3
  const duplicateVersionMatch = operationId.match(/^(.+_v\d+)V\d+$/);
  if (duplicateVersionMatch) {
    return duplicateVersionMatch[1];
  }
  
  // Если уже есть версия (V1, V2, V3 и т.д.), не добавляем
  if (/V\d+$/.test(operationId)) {
    return operationId;
  }
  
  // Если есть версия в формате _v{число}, не добавляем
  if (/_v\d+$/.test(operationId)) {
    return operationId;
  }
  
  // Добавляем V1 в конец
  return operationId + 'V1';
}

/**
 * Очищает имена операций от префиксов Site и Controller
 * Например: SiteUserController_getProfileV1 -> User_getProfileV1
 * MethodController_searchV1 -> Method_searchV1
 * AuthController_loginV1 -> Auth_loginV1
 */
function cleanOperationId(operationId) {
  // Паттерн: [Site]?{ControllerName}Controller_{methodName}
  const controllerMatch = operationId.match(/^(?:Site)?(.+?)Controller_(.+)$/);
  if (controllerMatch) {
    const controllerName = controllerMatch[1];
    const methodName = controllerMatch[2];
    return `${controllerName}_${methodName}`;
  }
  
  // Если паттерн не совпадает, возвращаем как есть
  return operationId;
}

/**
 * Извлекает версию из operationId
 */
function extractVersionFromOperationId(operationId) {
  // Ищем паттерн V{число} в конце
  const versionMatch = operationId.match(/V(\d+)$/);
  if (versionMatch) {
    return versionMatch[1];
  }
  
  // Ищем паттерн _v{число} в конце
  const underscoreVersionMatch = operationId.match(/_v(\d+)$/);
  if (underscoreVersionMatch) {
    return underscoreVersionMatch[1];
  }
  
  return null;
}

/**
 * Устанавливает правильную версию по умолчанию для параметра v и делает его опциональным
 * Это позволяет избежать дублирования версии в названии метода и параметрах
 */
function setVersionDefault(operation, version) {
  if (!operation.parameters || !version) {
    return false;
  }
  
  // Ищем параметр v
  const versionParam = operation.parameters.find(param => 
    param.name === 'v' && param.in === 'query'
  );
  
  if (versionParam && versionParam.schema) {
    // Устанавливаем значение по умолчанию
    versionParam.schema.default = version;
    
    // ВАЖНО: Делаем параметр опциональным, чтобы не дублировать версию
    // Значение по умолчанию будет автоматически подставляться на уровне HTTP запроса
    versionParam.required = false;
    
    // Обновляем пример, если он есть
    if (versionParam.schema.example) {
      versionParam.schema.example = version;
    }
    
    // Добавляем описание о том, что значение подставляется автоматически
    versionParam.description = `Version (automatically defaults to ${version} based on method version, can be overridden)`;
    
    return true;
  }
  
  return false;
}

/**
 * Проверяет, является ли схема типом данных (а не схемой метода)
 */
function isDataType(typeName) {
  // Исключаем схемы методов - они обычно содержат HTTP методы или специфические паттерны
  const methodPatterns = [
    /Controller.*V\d+$/,  // Схемы методов контроллеров (например, UserControllerGetUserV1)
    /^(get|post|put|delete|patch)/i,  // Начинаются с HTTP методов
    /Response$/,  // Заканчиваются на Response
    /Request$/,   // Заканчиваются на Request
    /Params$/,    // Заканчиваются на Params
    /Query$/,     // Заканчиваются на Query
    /Body$/       // Заканчиваются на Body
  ];
  
  // Если название соответствует паттернам методов, это не тип данных
  return !methodPatterns.some(pattern => pattern.test(typeName));
}

/**
 * Удаляет префиксы контроллеров из имен типов
 * Например: SiteUserProjectControllerGetProjectInfoV1LanguageEnum -> GetProjectInfoV1LanguageEnum
 */
function cleanTypeName(typeName) {
  // Ищем паттерн: любые слова + Controller + остальная часть
  // Удаляем всё до и включая "Controller"
  const controllerMatch = typeName.match(/^.*Controller(.+)$/);
  if (controllerMatch) {
    return controllerMatch[1];
  }
  
  // Если нет "Controller", просто удаляем "Site" в начале
  if (typeName.startsWith('Site')) {
    return typeName.replace(/^Site/, '');
  }
  
  return typeName;
}

/**
 * Рекурсивно обновляет ссылки на типы в объекте
 */
function updateTypeReferences(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  
  if (Array.isArray(obj)) {
    obj.forEach(item => updateTypeReferences(item));
    return;
  }
  
  for (const [key, value] of Object.entries(obj)) {
    if (key === '$ref' && typeof value === 'string') {
      // Обновляем ссылки на компоненты схем
      const refMatch = value.match(/^#\/components\/schemas\/(.+)$/);
      if (refMatch) {
        const originalTypeName = refMatch[1];
        // Применяем очистку только к типам данных
        if (isDataType(originalTypeName)) {
          const cleanedTypeName = cleanTypeName(originalTypeName);
          if (cleanedTypeName !== originalTypeName) {
            obj[key] = `#/components/schemas/${cleanedTypeName}`;
          }
        }
      }
    } else if (typeof value === 'object') {
      updateTypeReferences(value);
    }
  }
}

try {
  console.log('🔧 Запуск предобработки OpenAPI спецификации...');
  
  // Читаем спецификацию
  const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
  
  let operationsProcessed = 0;
  let suffixesRemoved = 0;
  let versionsAdded = 0;
  let typesRenamed = 0;
  let versionDefaultsSet = 0;
  let operationIdsCleaned = 0;
  
  // Обрабатываем все операции
  for (const path in spec.paths) {
    for (const method in spec.paths[path]) {
      const operation = spec.paths[path][method];
      
      if (operation.operationId) {
        const originalId = operation.operationId;
        let processedId = originalId;
        
        // 1. Убираем суффиксы [1], [2] и т.д.
        const withoutSuffix = removeSuffixes(processedId);
        if (withoutSuffix !== processedId) {
          suffixesRemoved++;
          processedId = withoutSuffix;
        }
        
        // 2. Добавляем версию V1 если её нет
        const withVersion = addDefaultVersion(processedId);
        if (withVersion !== processedId) {
          versionsAdded++;
          processedId = withVersion;
        }
        
        // 3. Очищаем имя операции от префиксов Site и Controller
        const cleanedId = cleanOperationId(processedId);
        if (cleanedId !== processedId) {
          operationIdsCleaned++;
          processedId = cleanedId;
        }
        
        operation.operationId = processedId;
        
        // 4. Извлекаем версию и устанавливаем её по умолчанию для параметра v
        const version = extractVersionFromOperationId(processedId);
        if (version && setVersionDefault(operation, version)) {
          versionDefaultsSet++;
          console.log(`🔧 Установлена версия по умолчанию v="${version}" для ${processedId}`);
        }
        
        operationsProcessed++;
        
        if (originalId !== processedId) {
          console.log(`🔄 ${originalId} -> ${processedId}`);
        }
      }
    }
  }
  
  // Обрабатываем схемы компонентов (только типы данных, не методы)
  if (spec.components && spec.components.schemas) {
    const schemas = spec.components.schemas;
    const newSchemas = {};
    
    for (const [typeName, schema] of Object.entries(schemas)) {
      let finalTypeName = typeName;
      
      // Применяем очистку только к типам данных, не к схемам методов
      if (isDataType(typeName)) {
        const cleanedTypeName = cleanTypeName(typeName);
        
        if (cleanedTypeName !== typeName) {
          typesRenamed++;
          console.log(`🏷️  ${typeName} -> ${cleanedTypeName}`);
          finalTypeName = cleanedTypeName;
        }
      }
      
      newSchemas[finalTypeName] = schema;
    }
    
    spec.components.schemas = newSchemas;
    
    // Обновляем все ссылки на переименованные типы во всей спецификации
    updateTypeReferences(spec);
  }
  
  // Сохраняем обновленную спецификацию
  fs.writeFileSync(specPath, JSON.stringify(spec, null, 2));
  
  console.log('✅ Предобработка завершена');
  console.log(`📊 Статистика:`);
  console.log(`   • Операций обработано: ${operationsProcessed}`);
  console.log(`   • Суффиксов убрано: ${suffixesRemoved}`);
  console.log(`   • Версий добавлено: ${versionsAdded}`);
  console.log(`   • Имен операций очищено: ${operationIdsCleaned}`);
  console.log(`   • Типов переименовано: ${typesRenamed}`);
  console.log(`   • Версий по умолчанию установлено: ${versionDefaultsSet}`);
  console.log(`💡 Теперь операции имеют чистые имена без префиксов Site и Controller`);
  
} catch (error) {
  console.error('❌ Ошибка при предобработке спецификации:', error.message);
  console.error(error.stack);
  process.exit(1);
}

// Экспорты для тестирования
module.exports = {
  removeSuffixes,
  addDefaultVersion,
  cleanOperationId,
  extractVersionFromOperationId,
  setVersionDefault,
  isDataType,
  cleanTypeName,
  updateTypeReferences,
  processSpec: function(inputFile) {
    const spec = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    
    // Применяем все преобразования
    for (const path in spec.paths) {
      for (const method in spec.paths[path]) {
        const operation = spec.paths[path][method];
        
        if (operation.operationId) {
          let processedId = operation.operationId;
          processedId = removeSuffixes(processedId);
          processedId = addDefaultVersion(processedId);
          processedId = cleanOperationId(processedId);
          operation.operationId = processedId;
          
          const version = extractVersionFromOperationId(processedId);
          if (version) {
            setVersionDefault(operation, version);
          }
        }
      }
    }
    
    // Обрабатываем схемы - исправляем имена с суффиксами [1], [2]
    if (spec.components && spec.components.schemas) {
      const schemas = spec.components.schemas;
      const newSchemas = {};
      
      for (const [typeName, schema] of Object.entries(schemas)) {
        let finalTypeName = typeName;
        
        // Сначала убираем суффиксы [1], [2] и заменяем их на числа
        if (typeName.includes('[') && typeName.includes(']')) {
          const match = typeName.match(/^(.+)\[(\d+)\]$/);
          if (match) {
            finalTypeName = match[1] + match[2];
          }
        }
        
        // Затем применяем очистку имен типов (только для типов данных)
        if (isDataType(finalTypeName)) {
          const cleanedTypeName = cleanTypeName(finalTypeName);
          if (cleanedTypeName !== finalTypeName) {
            finalTypeName = cleanedTypeName;
          }
        }
        
        newSchemas[finalTypeName] = schema;
      }
      
      spec.components.schemas = newSchemas;
      updateTypeReferences(spec);
    }
    
    return spec;
  }
}; 