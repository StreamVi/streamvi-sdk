const fs = require('fs');
const path = require('path');

/**
 * Обрабатывает сгенерированное API и обновляет файл api-client.ts
 */
function processGeneratedApi() {
  try {
    // Пути к файлам
    const generatedApiDir = path.resolve(__dirname, '../src/generated/api2');
    const indexPath = path.resolve(__dirname, '../src/index.ts');
    
    // Проверяем существование директории с генерированным API
    if (!fs.existsSync(generatedApiDir)) {
      console.error('Директория с генерированным API не найдена:', generatedApiDir);
      return;
    }
    
    // Проверяем наличие основного файла API
    const apiFilePath = path.join(generatedApiDir, 'api.ts');
    if (!fs.existsSync(apiFilePath)) {
      console.error('Файл api.ts не найден:', apiFilePath);
      return;
    }
    
    console.log('Найден сгенерированный API файл:', apiFilePath);
    
    // Обновляем индексный файл с экспортами
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Добавляем экспорт генерированного API
    if (!indexContent.includes('export * from \'./generated/api2\';')) {
      indexContent += '\n// Экспорт сгенерированного API\nexport * from \'./generated/api2\';\n';
      fs.writeFileSync(indexPath, indexContent);
      console.log('Файл index.ts успешно обновлен - добавлен экспорт API');
    } else {
      console.log('Файл index.ts уже содержит экспорт API');
    }
    
    console.log('Обработка сгенерированного API завершена успешно!');
  } catch (error) {
    console.error('Ошибка при обработке сгенерированного API:', error);
  }
}

// Запускаем обработку
processGeneratedApi(); 