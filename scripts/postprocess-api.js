const fs = require('fs');
const path = require('path');

const API_DIR = './src/generated/api2';

// Обработка сгенерированных API файлов
function processApiFiles() {
  console.log('🔧 Запуск обработки API файлов...');
  
  // Исправление дублирующихся экспортов
  fixDuplicateExports();
  
  // Обработка имен методов (убираем префиксы контроллеров)
  processMethodNames();
  
  // Автоматическое извлечение версий из названий методов
  processVersionParameters();
  
  // Обработка документации
  processDocumentation();
  
  console.log('✅ Обработка завершена');
}

function fixDuplicateExports() {
  console.log('🔧 Исправление дублирующихся экспортов...');
  
  // Исправляем api.ts
  const apiFile = path.join(API_DIR, 'api.ts');
  if (fs.existsSync(apiFile)) {
    let content = fs.readFileSync(apiFile, 'utf8');
    
    // Добавляем eslint-disable в начало файла
    if (!content.startsWith('/* eslint-disable */')) {
      content = '/* eslint-disable */\n' + content;
    }
    
    // Добавляем @ts-nocheck для игнорирования TypeScript ошибок
    if (!content.includes('@ts-nocheck')) {
      content = content.replace('/* eslint-disable */', '/* eslint-disable */\n// @ts-nocheck');
    }
    
    fs.writeFileSync(apiFile, content);
    console.log('✅ Обработан api.ts');
  }
  
  // Исправляем models/index.ts
  const modelsIndexFile = path.join(API_DIR, 'models', 'index.ts');
  if (fs.existsSync(modelsIndexFile)) {
    let content = fs.readFileSync(modelsIndexFile, 'utf8');
    
    // Добавляем eslint-disable в начало файла
    if (!content.startsWith('/* eslint-disable */')) {
      content = '/* eslint-disable */\n' + content;
    }
    
    // Добавляем @ts-nocheck для игнорирования TypeScript ошибок
    if (!content.includes('@ts-nocheck')) {
      content = content.replace('/* eslint-disable */', '/* eslint-disable */\n// @ts-nocheck');
    }
    
    fs.writeFileSync(modelsIndexFile, content);
    console.log('✅ Обработан models/index.ts');
  }
}

function processMethodNames() {
  console.log('📝 Обработка имен методов...');
  
  const apiDir = path.join(API_DIR, 'api');
  if (!fs.existsSync(apiDir)) return;
  
  const apiFiles = fs.readdirSync(apiDir).filter(f => f.endsWith('.ts'));
  
  apiFiles.forEach(file => {
    const apiFile = path.join(apiDir, file);
    let content = fs.readFileSync(apiFile, 'utf8');
    
    // Удаление префиксов контроллеров
    const prefixPatterns = [
      /(\w+)Controller([A-Z]\w+)/g,
      /(\w+)Api([A-Z]\w+)/g,
      /(\w+)Service([A-Z]\w+)/g
    ];
    
    prefixPatterns.forEach(pattern => {
      content = content.replace(pattern, (match, prefix, method) => {
        // Сохраняем только метод, убираем префикс
        return method.charAt(0).toLowerCase() + method.slice(1);
      });
    });
    
    // Удаление дублирующихся версий в именах
    content = content.replace(/(\w+)(\d+)$/g, '$1');
    
    fs.writeFileSync(apiFile, content);
  });
  
  console.log(`✅ Имена методов обработаны в ${apiFiles.length} файлах`);
}

function processVersionParameters() {
  console.log('🔄 Обработка параметров версий...');
  
  const apiDir = path.join(API_DIR, 'api');
  if (!fs.existsSync(apiDir)) return;
  
  const apiFiles = fs.readdirSync(apiDir).filter(f => f.endsWith('.ts'));
  
  apiFiles.forEach(file => {
    const apiFile = path.join(apiDir, file);
    let content = fs.readFileSync(apiFile, 'utf8');
    
    // Делаем параметр версии опциональным с значением по умолчанию
    content = content.replace(
      /readonly v: (\w+)(\d+)VEnum/g,
      (match, enumPrefix, version) => {
        return `readonly v?: ${enumPrefix}${version}VEnum`;
      }
    );
    
    // Добавляем логику установки версии по умолчанию в методы API классов
    content = content.replace(
      /public (\w+)(\d+)\(requestParameters: (\w+)(\d+)Request, options\?: RawAxiosRequestConfig\) \{\s*return fp\(this\.configuration\)\.(\w+)(\d+)\(requestParameters\.v,/g,
      (match, methodName, version, interfaceName, interfaceVersion, fpMethodName, fpVersion) => {
        return `public ${methodName}${version}(requestParameters: ${interfaceName}${interfaceVersion}Request, options?: RawAxiosRequestConfig) {
        // Автоматически устанавливаем версию из названия метода если не передана
        const actualV: ${interfaceName}${interfaceVersion}VEnum = requestParameters.v || ${interfaceName}${interfaceVersion}VEnum._${version};
        return fp(this.configuration).${fpMethodName}${fpVersion}(actualV,`;
      }
    );
    
    // Также обрабатываем функцию factory - заменяем requestParameters.v на actualV
    content = content.replace(
      /return localVarFp\.(\w+)(\d+)\(requestParameters\.v,/g,
      (match, methodName, version) => {
        return `// Автоматически устанавливаем версию из названия метода если не передана
            const actualV: ${methodName}${version}VEnum = requestParameters.v || ${methodName}${version}VEnum._${version};
            return localVarFp.${methodName}${version}(actualV,`;
      }
    );
    
    fs.writeFileSync(apiFile, content);
  });
  
  console.log(`✅ Параметры версий обработаны в ${apiFiles.length} файлах`);
}

function processDocumentation() {
  console.log('📚 Обработка документации...');
  
  const docsDir = path.join(API_DIR, 'docs');
  if (!fs.existsSync(docsDir)) {
    console.log('⚠️ Папка с документацией не найдена');
    return;
  }
  
  const docFiles = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  let updatedCount = 0;
  
  docFiles.forEach(file => {
    const docFile = path.join(docsDir, file);
    let content = fs.readFileSync(docFile, 'utf8');
    let hasChanges = false;
    
    // 1. Удаление префиксов контроллеров в документации
    const prefixPatterns = [
      /(\w+)Controller([A-Z]\w+)(\d+)/g,
      /(\w+)Api([A-Z]\w+)(\d+)/g,
      /(\w+)Service([A-Z]\w+)(\d+)/g
    ];
    
    prefixPatterns.forEach(pattern => {
      const originalContent = content;
      content = content.replace(pattern, (match, prefix, method, version) => {
        // Сохраняем только метод с версией, убираем префикс
        return method.charAt(0).toLowerCase() + method.slice(1) + version;
      });
      if (content !== originalContent) hasChanges = true;
    });
    
    // 2. Обновляем заголовки методов в документации
    content = content.replace(/# \*\*(\w+)Controller([A-Z]\w+)(\d+)\*\*/g, (match, prefix, method, version) => {
      hasChanges = true;
      return `# **${method.charAt(0).toLowerCase() + method.slice(1) + version}**`;
    });
    
    // 3. Обновляем ссылки на методы в таблицах
    content = content.replace(/\|\[\*\*(\w+)Controller([A-Z]\w+)(\d+)\*\*\]/g, (match, prefix, method, version) => {
      const newMethodName = method.charAt(0).toLowerCase() + method.slice(1) + version;
      hasChanges = true;
      return `|[**${newMethodName}**]`;
    });
    
    // 4. Обновляем якорные ссылки
    content = content.replace(/#(\w+)controller([a-z]+)(\d+)/g, (match, prefix, method, version) => {
      hasChanges = true;
      return `#${method}${version}`;
    });
    
    // 5. Заменяем старые примеры с Configuration на новые с StreamViSdkConfig
    const oldConfigPattern = /```typescript\nimport \{\s*([^}]+)\s*\} from '\.\/api';\s*\n\nconst configuration = new Configuration\(\);\nconst apiInstance = new ([A-Za-z]+)\(configuration\);/g;
    content = content.replace(oldConfigPattern, (match, imports, apiClass) => {
      // Очищаем импорты от Configuration
      const cleanImports = imports.replace(/,?\s*Configuration\s*,?/, '').replace(/^,\s*|,\s*$/, '').trim();
      hasChanges = true;
      return `\`\`\`typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ${cleanImports} } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ${apiClass}(sdkConfig.configuration);`;
    });

    // 6. Исправляем тройные запятые в импортах
    content = content.replace(
      /import \{ ([^}]+),,,\s*([^}]+) \} from '\.\/api';/g,
      (match, apiClass, importClass) => {
        hasChanges = true;
        return `import { ${apiClass.trim()}, ${importClass.trim()} } from './api';`;
      }
    );

    // 7. Исправляем лишние запятые в импортах
    content = content.replace(
      /import \{ ([^}]+),,\s*\} from '\.\/api';/g,
      (match, apiClass) => {
        hasChanges = true;
        return `import { ${apiClass.trim()} } from './api';`;
      }
    );

    content = content.replace(
      /import \{ ([^}]+),\s*\} from '\.\/api';/g,
      (match, apiClass) => {
        hasChanges = true;
        return `import { ${apiClass.trim()} } from './api';`;
      }
    );

    // 8. Удаляем ТОЛЬКО параметр версии v (оставляем language)
    // Удаляем объявление переменной v (различные форматы)
    content = content.replace(
      /let v: [^;]+; \/\/Version \(default to undefined\)\n/g,
      () => {
        hasChanges = true;
        return '';
      }
    );

    // 9. Удаляем v из вызовов методов (паттерн: v, language, ...)
    content = content.replace(
      /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    language,\n/g,
      (match, methodName) => {
        hasChanges = true;
        return `const { status, data } = await apiInstance.${methodName}({
    language,
`;
      }
    );

    // 10. Удаляем v из вызовов методов (паттерн: v, другой_параметр)
    content = content.replace(
      /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    ([a-zA-Z_][a-zA-Z0-9_]*)/g,
      (match, methodName, nextParam) => {
        hasChanges = true;
        return `const { status, data } = await apiInstance.${methodName}({
    ${nextParam}`;
      }
    );

    // 11. Удаляем v из вызовов методов (только v и language)
    content = content.replace(
      /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    language\n  }\);/g,
      (match, methodName) => {
        hasChanges = true;
        return `const { status, data } = await apiInstance.${methodName}({
    language
  });`;
      }
    );

    // 12. Удаляем v из таблиц параметров (различные форматы)
    content = content.replace(
      /\| \*\*v\*\* \| [^|]+ \| Version \| defaults to undefined\|\n/g,
      () => {
        hasChanges = true;
        return '';
      }
    );

    // 13. Исправляем вызовы методов - универсальный паттерн
    const methodCallPattern = /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\(\s*((?:[a-zA-Z_][a-zA-Z0-9_]*,\s*)*[a-zA-Z_][a-zA-Z0-9_]*)\s*\);/g;
    content = content.replace(methodCallPattern, (match, methodName, params) => {
      // Разбираем параметры
      const paramList = params.split(',').map(p => p.trim()).filter(p => p);
      
      if (paramList.length === 0) {
        return match; // Оставляем как есть, если нет параметров
      }

      // Создаем объект с параметрами
      const paramObject = paramList.map(param => `    ${param}`).join(',\n');

      hasChanges = true;
      return `const { status, data } = await apiInstance.${methodName}({
${paramObject}
  });`;
    });

    // 14. Исправляем методы без параметров
    const noParamsPattern = /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\(\);/g;
    content = content.replace(noParamsPattern, (match, methodName) => {
      hasChanges = true;
      return `const { status, data } = await apiInstance.${methodName}({});`;
    });

    // 15. Обновляем примеры вызовов методов с префиксами контроллеров
    content = content.replace(/apiInstance\.(\w+)Controller([A-Z]\w+)(\d+)\(/g, (match, prefix, method, version) => {
      hasChanges = true;
      return `apiInstance.${method.charAt(0).toLowerCase() + method.slice(1) + version}(`;
    });
    
    // Записываем обновленный контент обратно в файл
    if (hasChanges) {
      fs.writeFileSync(docFile, content);
      updatedCount++;
    }
  });
  
  console.log(`✅ Документация обработана в ${docFiles.length} файлах (обновлено: ${updatedCount})`);
}

// Запуск обработки
processApiFiles(); 