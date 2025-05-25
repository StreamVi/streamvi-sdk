import { access, constants, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import axios from 'axios';
import dotenv from 'dotenv';
import { argv } from 'node:process';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// Функция проверки и загрузки переменных окружения из разных .env файлов
async function loadEnvFiles() {
  const possibleEnvPaths = [
    resolve(_dirname, '..', '.env'),
    resolve(_dirname, '..', '.env.local'),
    '.env',
    '.env.local',
  ];

  let loaded = false;
  
  for (const envPath of possibleEnvPaths) {
    try {
      // Проверяем существование файла
      await access(envPath, constants.R_OK);
      
      // Загружаем переменные
      const result = dotenv.config({ path: envPath });
      if (!result.error) {
        console.log(`Загружены переменные окружения из: ${envPath}`);
        loaded = true;
        break;
      } else {
        console.warn(`Ошибка при загрузке ${envPath}:`, result.error);
      }
    } catch (error) {
      // Файл не существует или не доступен, пробуем следующий
    }
  }
  
  if (!loaded) {
    console.warn('ВНИМАНИЕ: Не найден ни один .env файл. Используем переменные окружения системы или значения по умолчанию.');
  }
  
  // Информация о статусе
  console.log('Статус переменных окружения для API:');
  console.log(`SWAGGER_USER: ${process.env.SWAGGER_USER ? '✓' : '✗ (используем значение по умолчанию)'}`);
  console.log(`SWAGGER_PASS: ${process.env.SWAGGER_PASS ? '✓' : '✗ (используем значение по умолчанию)'}`);
}

// Загружаем переменные окружения перед использованием
await loadEnvFiles();

const backendHost = argv[2];
const userName = process.env.SWAGGER_USER || 'JD84hg78hHD784gfhIDH94g9';
const password = process.env.SWAGGER_PASS || 'SDL84jgfpDJk4jlkmdbd63kg0eUY5i45mi';
const pathName = '/method/apidoc-json';
const url = backendHost.startsWith('http://localhost')
  ? `${backendHost}${pathName}`
  : `https://${userName}:${password}@${backendHost}${pathName}`;

try {
  console.log(`Запрашиваем API с ${url.replace(/\/\/.*@/, '//***:***@')}`); // Скрываем учетные данные в логах
  const { data } = await axios.get(url);
  console.log(`Успешно получили удаленный API из ${backendHost}`);
  
  const tempDir = resolve(_dirname, '..', 'temp');
  try {
    await access(tempDir, constants.R_OK | constants.W_OK);
  } catch {
    console.log(`Создаем директорию ${tempDir}`);
    await mkdir(tempDir);
  }
  
  const openApiSchemaPath = resolve(tempDir, 'backend_v2.json');
  console.log(`Сохраняем полученные данные в ${openApiSchemaPath}`);
  await writeFile(openApiSchemaPath, JSON.stringify(data));
  console.log('Схема API успешно сохранена.\n ------------------- \nНачинаем генерацию кода API.');
} catch (e) {
  console.error(`Ошибка при получении или сохранении API: ${e.message}`);
  if (e.response) {
    console.error(`Статус ответа: ${e.response.status}`);
    console.error(`Данные ответа:`, e.response.data);
  }
  throw new Error('Ошибка генерации API', { cause: e });
}
