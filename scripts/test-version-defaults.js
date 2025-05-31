const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Упрощенный тестовый скрипт для проверки автоматической подстановки параметра v
 */

const apiDir = path.join(__dirname, '../src/generated/api2');

// Основной код тестирования

try {
  console.log('🧪 Запуск тестирования автоподстановки версий...');
  console.log('=' .repeat(60));
  
  // Нормализуем путь для Windows
  const apiPath = path.resolve(apiDir, 'api');
  const pattern = path.join(apiPath, '*.ts').replace(/\\/g, '/');
  
  console.log(`🔍 Ищем API файлы в: ${apiPath}`);
  
  const apiFiles = glob.sync(pattern);
  console.log(`🔍 Найдено API файлов: ${apiFiles.length}`);
  console.log('');

  let totalMethodsWithVersions = 0;
  let methodsWithAutoDefault = 0;
  let methodsWithoutAutoDefault = 0;
  const problemMethods = [];

  for (const filePath of apiFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    // Ищем методы с версиями (простой поиск)
    const versionMethods = content.match(/(\w+V\d+):\s*async/g);
    
    if (versionMethods && versionMethods.length > 0) {
      console.log(`📦 ${fileName}: найдено ${versionMethods.length} методов с версиями`);
      
      for (const methodMatch of versionMethods) {
        const methodName = methodMatch.replace(':', '').replace(' async', '');
        totalMethodsWithVersions++;
        
        // Извлекаем версию из имени метода
        const versionMatch = methodName.match(/V(\d+)$/);
        const expectedVersion = versionMatch ? versionMatch[1] : null;
        
        if (!expectedVersion) continue;
        
        // Проверяем, есть ли параметр v в методе
        const hasVersionParam = content.includes(`${methodName}: async`) && content.includes('v?:');
        
        if (hasVersionParam) {
          // Ищем блок метода
          const methodStart = content.indexOf(`${methodName}: async`);
          const methodEnd = content.indexOf('\n        },', methodStart);
          const methodBody = content.substring(methodStart, methodEnd);
          
          // Проверяем автоподстановку для query параметров
          const hasQueryAutoDefault = methodBody.includes(`localVarQueryParameter['v'] = '${expectedVersion}'`);
          
          // Проверяем автоподстановку для FormData
          const hasFormAutoDefault = methodBody.includes(`localVarFormParams.append('v', '${expectedVersion}'`);
          
          if (hasQueryAutoDefault || hasFormAutoDefault) {
            methodsWithAutoDefault++;
            console.log(`  ✅ ${methodName}: автоподстановка v="${expectedVersion}" ${hasQueryAutoDefault ? '(Query)' : '(FormData)'}`);
          } else {
            methodsWithoutAutoDefault++;
            problemMethods.push({
              file: fileName,
              method: methodName,
              expectedVersion,
              hasVersionParam: true,
              hasQueryLogic: methodBody.includes("localVarQueryParameter['v']"),
              hasFormLogic: methodBody.includes("localVarFormParams.append('v'")
            });
            console.log(`  ❌ ${methodName}: НЕТ автоподстановки (ожидается v="${expectedVersion}")`);
          }
        }
      }
      console.log('');
    }
  }

  console.log('=' .repeat(60));
  console.log('📊 ИТОГОВАЯ СТАТИСТИКА:');
  console.log(`   • Всего методов с версиями: ${totalMethodsWithVersions}`);
  console.log(`   • Методов с автоподстановкой: ${methodsWithAutoDefault}`);
  console.log(`   • Методов БЕЗ автоподстановки: ${methodsWithoutAutoDefault}`);
  console.log(`   • Процент покрытия: ${totalMethodsWithVersions > 0 ? Math.round((methodsWithAutoDefault / totalMethodsWithVersions) * 100) : 0}%`);
  console.log('');

  if (methodsWithoutAutoDefault === 0) {
    console.log('🎉 ВСЕ ТЕСТЫ ПРОШЛИ УСПЕШНО!');
    console.log('✅ Автоподстановка версий работает корректно во всех методах');
  } else {
    console.log('🚨 ОБНАРУЖЕНЫ ПРОБЛЕМЫ:');
    console.log('');
    console.log('📋 Методы БЕЗ автоподстановки:');
    
    for (const problem of problemMethods) {
      console.log(`   ❌ ${problem.file} -> ${problem.method}`);
      console.log(`      Ожидаемая версия: ${problem.expectedVersion}`);
      console.log(`      Есть параметр v: ${problem.hasVersionParam}`);
      console.log(`      Есть Query логика: ${problem.hasQueryLogic}`);
      console.log(`      Есть FormData логика: ${problem.hasFormLogic}`);
      console.log('');
    }
    
    console.log('💡 РЕКОМЕНДАЦИИ:');
    console.log('   1. Постобработка НЕ РАБОТАЕТ - регулярные выражения не находят нужные блоки');
    console.log('   2. Нужно исправить постобработку для добавления автоподстановки');
    console.log('   3. После исправления перегенерируйте код и повторно запустите постобработку');
  }

} catch (error) {
  console.error('❌ Ошибка при тестировании:', error.message);
  console.error(error.stack);
  process.exit(1);
} 