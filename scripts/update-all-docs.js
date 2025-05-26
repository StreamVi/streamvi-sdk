const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../src/generated/api2/docs');

// Функция для полного обновления документации
function updateAllDocs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let hasChanges = false;

  // 1. Заменяем старые примеры с Configuration на новые с StreamViSdkConfig
  const oldConfigPattern = /```typescript\nimport \{\s*([^}]+)\s*\} from '\.\/api';\s*\n\nconst configuration = new Configuration\(\);\nconst apiInstance = new ([A-Za-z]+)\(configuration\);/g;
  updatedContent = updatedContent.replace(oldConfigPattern, (match, imports, apiClass) => {
    // Очищаем импорты от Configuration
    const cleanImports = imports.replace(/,?\s*Configuration\s*,?/, '').replace(/^,\s*|,\s*$/, '').trim();
    hasChanges = true;
    return `\`\`\`typescript
import { StreamViSdkConfig } from '../../../streamvi-sdk-config';
import { ${cleanImports} } from './api';

const sdkConfig = new StreamViSdkConfig({ accessToken: 'your_access_token' });
const apiInstance = new ${apiClass}(sdkConfig.configuration);`;
  });

  // 2. Исправляем тройные запятые в импортах
  updatedContent = updatedContent.replace(
    /import \{ ([^}]+),,,\s*([^}]+) \} from '\.\/api';/g,
    (match, apiClass, importClass) => {
      hasChanges = true;
      return `import { ${apiClass.trim()}, ${importClass.trim()} } from './api';`;
    }
  );

  // 3. Исправляем лишние запятые в импортах
  updatedContent = updatedContent.replace(
    /import \{ ([^}]+),,\s*\} from '\.\/api';/g,
    (match, apiClass) => {
      hasChanges = true;
      return `import { ${apiClass.trim()} } from './api';`;
    }
  );

  updatedContent = updatedContent.replace(
    /import \{ ([^}]+),\s*\} from '\.\/api';/g,
    (match, apiClass) => {
      hasChanges = true;
      return `import { ${apiClass.trim()} } from './api';`;
    }
  );

  // 4. Удаляем ТОЛЬКО параметр версии v (оставляем language)
  // Удаляем объявление переменной v
  updatedContent = updatedContent.replace(
    /let v: '1' \| '2' \| '3'; \/\/Version \(default to undefined\)\n/g,
    ''
  );

  // Удаляем v из вызовов методов (паттерн: v, language, ...)
  updatedContent = updatedContent.replace(
    /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    language,\n/g,
    (match, methodName) => {
      hasChanges = true;
      return `const { status, data } = await apiInstance.${methodName}({
    language,
`;
    }
  );

  // Удаляем v из вызовов методов (паттерн: v, другой_параметр)
  updatedContent = updatedContent.replace(
    /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    ([a-zA-Z_][a-zA-Z0-9_]*)/g,
    (match, methodName, nextParam) => {
      hasChanges = true;
      return `const { status, data } = await apiInstance.${methodName}({
    ${nextParam}`;
    }
  );

  // Удаляем v из вызовов методов (только v и language)
  updatedContent = updatedContent.replace(
    /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\({\n    v,\n    language\n  }\);/g,
    (match, methodName) => {
      hasChanges = true;
      return `const { status, data } = await apiInstance.${methodName}({
    language
  });`;
    }
  );

  // Удаляем v из таблиц параметров
  updatedContent = updatedContent.replace(
    /\| \*\*v\*\* \| \[\*\*&#39;1&#39; \| &#39;2&#39; \| &#39;3&#39;\*\*\]\*\*Array<&#39;1&#39; &#124; &#39;2&#39; &#124; &#39;3&#39;>\*\* \| Version \| defaults to undefined\|\n/g,
    ''
  );

  // 5. Исправляем вызовы методов - универсальный паттерн
  const methodCallPattern = /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\(\s*((?:[a-zA-Z_][a-zA-Z0-9_]*,\s*)*[a-zA-Z_][a-zA-Z0-9_]*)\s*\);/g;
  updatedContent = updatedContent.replace(methodCallPattern, (match, methodName, params) => {
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

  // 6. Исправляем методы без параметров
  const noParamsPattern = /const \{ status, data \} = await apiInstance\.([a-zA-Z0-9]+)\(\);/g;
  updatedContent = updatedContent.replace(noParamsPattern, (match, methodName) => {
    hasChanges = true;
    return `const { status, data } = await apiInstance.${methodName}({});`;
  });

  // Записываем обновленный контент обратно в файл
  if (hasChanges && updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Обновлен файл: ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

// Проверяем существование папки с документацией
if (!fs.existsSync(docsDir)) {
  console.log('Папка с документацией не найдена:', docsDir);
  process.exit(1);
}

// Получаем список всех файлов документации API
const apiFiles = fs.readdirSync(docsDir)
  .filter(file => file.endsWith('Api.md'))
  .map(file => path.join(docsDir, file));

console.log(`Найдено ${apiFiles.length} файлов документации API для полного обновления...`);

let updatedCount = 0;
apiFiles.forEach(filePath => {
  if (updateAllDocs(filePath)) {
    updatedCount++;
  }
});

console.log(`Обновлено ${updatedCount} из ${apiFiles.length} файлов документации.`);

if (updatedCount > 0) {
  console.log('✅ Документация API успешно обновлена!');
  console.log('📝 Обновления включают:');
  console.log('   - Использование StreamViSdkConfig вместо Configuration');
  console.log('   - Удаление параметра версии v из примеров');
  console.log('   - Сохранение параметра language в примерах');
  console.log('   - Объектный синтаксис для вызовов методов');
  console.log('   - Исправление импортов и форматирования');
  console.log('   - Исправление тройных запятых в импортах');
} else {
  console.log('ℹ️ Вся документация API уже актуальна.');
} 