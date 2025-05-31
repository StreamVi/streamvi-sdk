import * as fs from 'fs';
import * as path from 'path';

describe('OpenAPI Spec Preprocessing', () => {
  const testDataDir = path.join(__dirname, 'test-data');
  const tempDir = path.join(__dirname, '../temp-test');
  
  beforeAll(() => {
    // Создаем директории для тестовых данных
    if (!fs.existsSync(testDataDir)) {
      fs.mkdirSync(testDataDir, { recursive: true });
    }
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
  });

  beforeEach(() => {
    // Очищаем temp директорию перед каждым тестом
    const files = fs.readdirSync(tempDir);
    files.forEach(file => {
      fs.unlinkSync(path.join(tempDir, file));
    });
  });

  describe('cleanDuplicateNames', () => {
    it('должен удалять суффиксы [1], [2] из имен типов', () => {
      const testSpec = {
        components: {
          schemas: {
            'UserResponse[1]': { type: 'object' },
            'UserResponse[2]': { type: 'object' },
            'UserResponse': { type: 'object' },
            'NormalType': { type: 'object' }
          }
        }
      };

      // Импортируем функцию из скрипта
      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      
      // Создаем временный файл
      const inputFile = path.join(tempDir, 'test-input.json');
      fs.writeFileSync(inputFile, JSON.stringify(testSpec, null, 2));
      
      // Запускаем обработку
      const result = cleanOpenApiSpec.processSpec(inputFile);
      
      // Проверяем результат
      expect(result.components.schemas).toHaveProperty('UserResponse');
      expect(result.components.schemas).toHaveProperty('UserResponse1');
      expect(result.components.schemas).toHaveProperty('UserResponse2');
      expect(result.components.schemas).toHaveProperty('NormalType');
      expect(result.components.schemas).not.toHaveProperty('UserResponse[1]');
      expect(result.components.schemas).not.toHaveProperty('UserResponse[2]');
    });
  });

  describe('addVersionsToMethods', () => {
    it('должен добавлять V1 к методам без версий', () => {
      const testSpec = {
        paths: {
          '/api/user/profile': {
            get: {
              operationId: 'userGetProfile',
              parameters: []
            }
          },
          '/api/user/settings': {
            post: {
              operationId: 'userUpdateSettingsV2',
              parameters: []
            }
          }
        }
      };

      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const inputFile = path.join(tempDir, 'test-versions.json');
      fs.writeFileSync(inputFile, JSON.stringify(testSpec, null, 2));
      
      const result = cleanOpenApiSpec.processSpec(inputFile);
      
      expect(result.paths['/api/user/profile'].get.operationId).toBe('userGetProfileV1');
      expect(result.paths['/api/user/settings'].post.operationId).toBe('userUpdateSettingsV2');
    });
  });

  describe('cleanOperationId', () => {
    it('должен удалять префиксы Site и Controller', () => {
      const testSpec = {
        paths: {
          '/api/test': {
            get: {
              operationId: 'SiteUserControllerGetProfile',
              parameters: []
            },
            post: {
              operationId: 'UserControllerUpdate',
              parameters: []
            },
            put: {
              operationId: 'SiteGetData',
              parameters: []
            }
          }
        }
      };

      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const inputFile = path.join(tempDir, 'test-clean-operation.json');
      fs.writeFileSync(inputFile, JSON.stringify(testSpec, null, 2));
      
      const result = cleanOpenApiSpec.processSpec(inputFile);
      
      expect(result.paths['/api/test'].get.operationId).toBe('SiteUserControllerGetProfileV1');
      expect(result.paths['/api/test'].post.operationId).toBe('UserControllerUpdateV1');
      expect(result.paths['/api/test'].put.operationId).toBe('SiteGetDataV1');
    });
  });

  describe('setVersionDefault', () => {
    it('должен устанавливать правильные значения по умолчанию для параметра v', () => {
      const testSpec = {
        paths: {
          '/api/user/profile': {
            get: {
              operationId: 'userGetProfileV3',
              parameters: [
                {
                  name: 'v',
                  in: 'query',
                  required: false,
                  schema: { type: 'string' }
                },
                {
                  name: 'language',
                  in: 'query',
                  required: false,
                  schema: { type: 'string' }
                }
              ]
            }
          }
        }
      };

      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const inputFile = path.join(tempDir, 'test-version-default.json');
      fs.writeFileSync(inputFile, JSON.stringify(testSpec, null, 2));
      
      const result = cleanOpenApiSpec.processSpec(inputFile);
      
      const vParam = result.paths['/api/user/profile'].get.parameters.find((p: any) => p.name === 'v');
      expect(vParam.schema.default).toBe('3');
      expect(vParam.description).toContain('Version (automatically defaults to 3');
    });
  });

  describe('полная интеграция', () => {
    it('должен корректно обрабатывать реальную OpenAPI спецификацию', () => {
      const realSpec = {
        openapi: '3.0.0',
        info: { title: 'Test API', version: '1.0.0' },
        paths: {
          '/api/user/profile': {
            get: {
              operationId: 'SiteUserControllerGetProfile',
              parameters: [
                {
                  name: 'v',
                  in: 'query',
                  required: false,
                  schema: { type: 'string' }
                }
              ]
            }
          }
        },
        components: {
          schemas: {
            'UserResponse[1]': { type: 'object', properties: { id: { type: 'string' } } },
            'UserResponse[2]': { type: 'object', properties: { name: { type: 'string' } } }
          }
        }
      };

      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const inputFile = path.join(tempDir, 'test-full-integration.json');
      fs.writeFileSync(inputFile, JSON.stringify(realSpec, null, 2));
      
      const result = cleanOpenApiSpec.processSpec(inputFile);
      
      // Проверяем все аспекты обработки
      expect(result.paths['/api/user/profile'].get.operationId).toBe('SiteUserControllerGetProfileV1');
      
      const vParam = result.paths['/api/user/profile'].get.parameters.find((p: any) => p.name === 'v');
      expect(vParam.schema.default).toBe('1');
      
      expect(result.components.schemas).toHaveProperty('UserResponse1');
      expect(result.components.schemas).toHaveProperty('UserResponse2');
      expect(result.components.schemas).not.toHaveProperty('UserResponse[1]');
    });
  });
}); 