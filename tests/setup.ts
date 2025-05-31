// Глобальная настройка для тестов
import * as fs from 'fs';
import * as path from 'path';

// Создаем временную директорию для тестов
const testTempDir = path.join(__dirname, '../temp-test');

beforeAll(() => {
  if (!fs.existsSync(testTempDir)) {
    fs.mkdirSync(testTempDir, { recursive: true });
  }
});

afterAll(() => {
  // Очищаем временные файлы после тестов
  if (fs.existsSync(testTempDir)) {
    fs.rmSync(testTempDir, { recursive: true, force: true });
  }
});

// Глобальные утилиты для тестов
(global as any).testTempDir = testTempDir; 