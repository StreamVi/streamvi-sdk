const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Постобработка сгенерированных API файлов
 * Добавляет автоматическую подстановку версий для параметра v
 */

const apiDir = path.join(__dirname, '../src/generated/api2');

/**
 * Извлекает версию из имени метода
 */
function extractVersionFromMethodName(methodName) {
  // Ищем паттерн V{число} в конце
  const versionMatch = methodName.match(/V(\d+)$/);
  if (versionMatch) {
    return versionMatch[1];
  }
  
  // Ищем паттерн _v{число} в конце
  const underscoreVersionMatch = methodName.match(/_v(\d+)$/);
  if (underscoreVersionMatch) {
    return underscoreVersionMatch[1];
  }
  
  return null;
}

/**
 * Обрабатывает один API файл
 */
function processApiFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let totalChanges = 0;

  // 1. Добавляем автоподстановку для Query параметров
  // Ищем: if (v !== undefined) { localVarQueryParameter['v'] = v; }
  // Заменяем на: if (v !== undefined) { localVarQueryParameter['v'] = v; } else { localVarQueryParameter['v'] = 'X'; }
  
  const queryPattern = /((\w+V\d+):\s*async[\s\S]*?)if\s*\(\s*v\s*!==\s*undefined\s*\)\s*\{\s*localVarQueryParameter\['v'\]\s*=\s*v;\s*\}/g;
  
  updatedContent = updatedContent.replace(queryPattern, (match, methodBlock, methodName) => {
    const version = extractVersionFromMethodName(methodName);
    if (version) {
      totalChanges++;
      console.log(`  🎯 Query: добавляю автоподстановку v="${version}" для ${methodName}`);
      return match.replace(
        /if\s*\(\s*v\s*!==\s*undefined\s*\)\s*\{\s*localVarQueryParameter\['v'\]\s*=\s*v;\s*\}/,
        `if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            } else {
                localVarQueryParameter['v'] = '${version}';
            }`
      );
    }
    return match;
  });

  // 2. Добавляем автоподстановку для FormData параметров
  // Ищем: if (v !== undefined) { localVarFormParams.append('v', v as any); }
  // Заменяем на: if (v !== undefined) { localVarFormParams.append('v', v as any); } else { localVarFormParams.append('v', 'X' as any); }
  
  const formDataPattern = /((\w+V\d+):\s*async[\s\S]*?)if\s*\(\s*v\s*!==\s*undefined\s*\)\s*\{\s*localVarFormParams\.append\('v',\s*v\s*as\s*any\);\s*\}/g;
  
  updatedContent = updatedContent.replace(formDataPattern, (match, methodBlock, methodName) => {
    const version = extractVersionFromMethodName(methodName);
    if (version) {
      totalChanges++;
      console.log(`  🎯 FormData: добавляю автоподстановку v="${version}" для ${methodName}`);
      return match.replace(
        /if\s*\(\s*v\s*!==\s*undefined\s*\)\s*\{\s*localVarFormParams\.append\('v',\s*v\s*as\s*any\);\s*\}/,
        `if (v !== undefined) { 
                localVarFormParams.append('v', v as any);
            } else {
                localVarFormParams.append('v', '${version}' as any);
            }`
      );
    }
    return match;
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, updatedContent);
  }
  
  return { totalChanges };
}

try {
  console.log('🔧 Запуск постобработки API файлов...');
  console.log('🎯 Цель: добавить автоподстановку версий для параметра v');
  console.log('=' .repeat(60));
  
  // Нормализуем путь для Windows
  const apiPath = path.resolve(apiDir, 'api');
  const pattern = path.join(apiPath, '*.ts').replace(/\\/g, '/');
  
  console.log(`🔍 Ищем API файлы в: ${apiPath}`);
  
  const apiFiles = glob.sync(pattern);
  console.log(`🔍 Найдено API файлов: ${apiFiles.length}`);
  console.log('');
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const filePath of apiFiles) {
    const fileName = path.basename(filePath);
    console.log(`📦 Обрабатываем: ${fileName}`);
    
    const result = processApiFile(filePath);
    if (result.totalChanges > 0) {
      processedFiles++;
      totalChanges += result.totalChanges;
      console.log(`  ✅ Добавлено автоподстановок: ${result.totalChanges}`);
    } else {
      console.log(`  ⏭️  Изменений не требуется`);
    }
  }
  
  console.log('');
  console.log('=' .repeat(60));
  console.log('✅ Постобработка завершена');
  console.log(`📊 Результаты:`);
  console.log(`   • Файлов обработано: ${apiFiles.length}`);
  console.log(`   • Файлов изменено: ${processedFiles}`);
  console.log(`   • Всего автоподстановок добавлено: ${totalChanges}`);
  
  if (totalChanges > 0) {
    console.log('');
    console.log('💡 Теперь методы автоматически подставляют версию:');
    console.log('   • userGetProfileV1({ language: "ru" }) - автоматически добавляет v="1"');
    console.log('   • paySettingGetSettingV3({ language: "ru" }) - автоматически добавляет v="3"');
    console.log('   • Можно переопределить: userGetProfileV1({ v: "2", language: "ru" }) - использует v="2"');
  }
  
} catch (error) {
  console.error('❌ Ошибка при постобработке:', error.message);
  console.error(error.stack);
  process.exit(1);
}

// Экспорты для тестирования
module.exports = {
  extractVersionFromMethodName,
  processApiFile
}; 