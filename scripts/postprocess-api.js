const fs = require('fs');
const path = require('path');

const API_DIR = './src/generated/api2';

// Обработка сгенерированных API файлов
function processApiFiles() {
  console.log('🔧 Запуск обработки API файлов...');
  
  // Обработка имен методов (убираем префиксы контроллеров)
  processMethodNames();
  
  // Автоматическое извлечение версий из названий методов
  processVersionParameters();
  
  console.log('✅ Обработка завершена');
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

// Запуск обработки
processApiFiles(); 