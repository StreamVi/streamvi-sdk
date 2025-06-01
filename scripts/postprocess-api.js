const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Постобработка сгенерированных API файлов
 * Добавляет автоматическую подстановку версий для параметра v
 * Исправляет форматирование в Markdown документации
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
 * Исправляет форматирование в Markdown файлах документации
 */
function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let totalChanges = 0;

  // Исправляем HTML-сущности в типах параметров
  // Заменяем &#39; на '
  const htmlEntityPattern = /&#39;/g;
  const htmlEntityMatches = updatedContent.match(htmlEntityPattern);
  if (htmlEntityMatches) {
    updatedContent = updatedContent.replace(htmlEntityPattern, "'");
    totalChanges += htmlEntityMatches.length;
    console.log(`  🔧 Исправлено HTML-сущностей &#39;: ${htmlEntityMatches.length}`);
  }

  // Заменяем &#124; на |
  const pipeEntityPattern = /&#124;/g;
  const pipeEntityMatches = updatedContent.match(pipeEntityPattern);
  if (pipeEntityMatches) {
    updatedContent = updatedContent.replace(pipeEntityPattern, '|');
    totalChanges += pipeEntityMatches.length;
    console.log(`  🔧 Исправлено HTML-сущностей &#124;: ${pipeEntityMatches.length}`);
  }

  // Исправляем дублирование типов в таблицах параметров
  // Паттерн: [**'type'**]**Array<'type'>** -> **'type'**
  const duplicateTypePattern = /\[\*\*([^*]+)\*\*\]\*\*Array<[^>]+>\*\*/g;
  updatedContent = updatedContent.replace(duplicateTypePattern, (match, type) => {
    totalChanges++;
    console.log(`  🔧 Исправлено дублирование типа: ${match} -> **${type}**`);
    return `**${type}**`;
  });

  // Исправляем неправильное форматирование типов с квадратными скобками
  // Паттерн: [**string**] -> **string**
  const bracketTypePattern = /\[\*\*([^*]+)\*\*\]/g;
  updatedContent = updatedContent.replace(bracketTypePattern, (match, type) => {
    totalChanges++;
    console.log(`  🔧 Убраны лишние скобки: ${match} -> **${type}**`);
    return `**${type}**`;
  });

  // Исправляем экранирование символов | в типах union
  // Заменяем \| на |, но только внутри типов
  const unionTypePattern = /\*\*'[^']+'\s*\\\|\s*'[^']+'/g;
  updatedContent = updatedContent.replace(unionTypePattern, (match) => {
    const fixed = match.replace(/\\\|/g, ' \\| ');
    if (fixed !== match) {
      totalChanges++;
      console.log(`  🔧 Исправлено экранирование в union типе: ${match} -> ${fixed}`);
    }
    return fixed;
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, updatedContent);
  }
  
  return { totalChanges };
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
  console.log('🎯 Цель: добавить автоподстановку версий для параметра v и исправить форматирование документации');
  console.log('=' .repeat(80));
  
  // Нормализуем путь для Windows
  const apiPath = path.resolve(apiDir, 'api');
  const docsPath = path.resolve(apiDir, 'docs');
  
  // Обрабатываем TypeScript файлы API
  const apiPattern = path.join(apiPath, '*.ts').replace(/\\/g, '/');
  console.log(`🔍 Ищем API файлы в: ${apiPath}`);
  
  const apiFiles = glob.sync(apiPattern);
  console.log(`🔍 Найдено API файлов: ${apiFiles.length}`);
  console.log('');
  
  let totalApiChanges = 0;
  let processedApiFiles = 0;
  
  for (const filePath of apiFiles) {
    const fileName = path.basename(filePath);
    console.log(`📦 Обрабатываем API: ${fileName}`);
    
    const result = processApiFile(filePath);
    if (result.totalChanges > 0) {
      processedApiFiles++;
      totalApiChanges += result.totalChanges;
      console.log(`  ✅ Добавлено автоподстановок: ${result.totalChanges}`);
    } else {
      console.log(`  ⏭️  Изменений не требуется`);
    }
  }

  // Обрабатываем Markdown файлы документации
  const docsPattern = path.join(docsPath, '*.md').replace(/\\/g, '/');
  console.log('');
  console.log(`🔍 Ищем файлы документации в: ${docsPath}`);
  
  const docsFiles = glob.sync(docsPattern);
  console.log(`🔍 Найдено файлов документации: ${docsFiles.length}`);
  console.log('');
  
  let totalDocsChanges = 0;
  let processedDocsFiles = 0;
  
  for (const filePath of docsFiles) {
    const fileName = path.basename(filePath);
    console.log(`📄 Обрабатываем документацию: ${fileName}`);
    
    const result = processMarkdownFile(filePath);
    if (result.totalChanges > 0) {
      processedDocsFiles++;
      totalDocsChanges += result.totalChanges;
      console.log(`  ✅ Исправлений форматирования: ${result.totalChanges}`);
    } else {
      console.log(`  ⏭️  Изменений не требуется`);
    }
  }
  
  console.log('');
  console.log('=' .repeat(80));
  console.log('✅ Постобработка завершена');
  console.log(`📊 Результаты:`);
  console.log(`   API файлы:`);
  console.log(`   • Файлов обработано: ${apiFiles.length}`);
  console.log(`   • Файлов изменено: ${processedApiFiles}`);
  console.log(`   • Всего автоподстановок добавлено: ${totalApiChanges}`);
  console.log(`   Документация:`);
  console.log(`   • Файлов обработано: ${docsFiles.length}`);
  console.log(`   • Файлов изменено: ${processedDocsFiles}`);
  console.log(`   • Всего исправлений форматирования: ${totalDocsChanges}`);
  
  if (totalApiChanges > 0) {
    console.log('');
    console.log('💡 Теперь методы автоматически подставляют версию:');
    console.log('   • userGetProfileV1({ language: "ru" }) - автоматически добавляет v="1"');
    console.log('   • paySettingGetSettingV3({ language: "ru" }) - автоматически добавляет v="3"');
    console.log('   • Можно переопределить: userGetProfileV1({ v: "2", language: "ru" }) - использует v="2"');
  }

  if (totalDocsChanges > 0) {
    console.log('');
    console.log('📝 Исправлено форматирование в документации:');
    console.log('   • Убраны HTML-сущности (&#39; -> \', &#124; -> |)');
    console.log('   • Исправлено дублирование типов в таблицах параметров');
    console.log('   • Убраны лишние квадратные скобки в типах');
  }
  
} catch (error) {
  console.error('❌ Ошибка при постобработке:', error.message);
  console.error(error.stack);
  process.exit(1);
}

// Экспорты для тестирования
module.exports = {
  extractVersionFromMethodName,
  processApiFile,
  processMarkdownFile
}; 