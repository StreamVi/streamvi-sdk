import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

describe('SDK Generation Integration Tests', () => {
  const tempDir = path.join(__dirname, '../temp-test');
  const testApiDir = path.join(tempDir, 'api');
  
  beforeAll(() => {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    if (!fs.existsSync(testApiDir)) {
      fs.mkdirSync(testApiDir, { recursive: true });
    }
  });

  afterAll(() => {
    // Очищаем временные файлы
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  describe('полный процесс генерации', () => {
    it('должен корректно обрабатывать весь пайплайн: предобработка -> генерация -> постобработка', async () => {
      // 1. Создаем тестовую OpenAPI спецификацию
      const testSpec = {
        openapi: '3.0.0',
        info: { title: 'Test API', version: '1.0.0' },
        paths: {
          '/api/user/profile': {
            get: {
              operationId: 'SiteUserControllerGetProfile[1]',
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
              ],
              responses: {
                '200': {
                  description: 'Success',
                  content: {
                    'application/json': {
                      schema: { $ref: '#/components/schemas/UserResponse[1]' }
                    }
                  }
                }
              }
            }
          },
          '/api/settings/get': {
            get: {
              operationId: 'SiteSettingsControllerGetSettingV3',
              parameters: [
                {
                  name: 'v',
                  in: 'query',
                  required: false,
                  schema: { type: 'string' }
                }
              ],
              responses: {
                '200': {
                  description: 'Success'
                }
              }
            }
          }
        },
        components: {
          schemas: {
            'UserResponse[1]': {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' }
              }
            },
            'SiteUserControllerSettings[2]': {
              type: 'object',
              properties: {
                theme: { type: 'string' }
              }
            }
          }
        }
      };

      // 2. Сохраняем тестовую спецификацию
      const specFile = path.join(tempDir, 'test-spec.json');
      fs.writeFileSync(specFile, JSON.stringify(testSpec, null, 2));

      // 3. Тестируем предобработку
      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const processedSpec = cleanOpenApiSpec.processSpec(specFile);

             // Проверяем результаты предобработки
       expect(processedSpec.paths['/api/user/profile'].get.operationId).toBe('SiteUserControllerGetProfileV1');
       expect(processedSpec.paths['/api/settings/get'].get.operationId).toBe('SiteSettingsControllerGetSettingV3');
      
      // Проверяем версии по умолчанию
      const userProfileParams = processedSpec.paths['/api/user/profile'].get.parameters;
             const vParam1 = userProfileParams.find((p: any) => p.name === 'v');
       expect(vParam1.schema.default).toBe('1');
       
       const settingsParams = processedSpec.paths['/api/settings/get'].get.parameters;
       const vParam3 = settingsParams.find((p: any) => p.name === 'v');
      expect(vParam3.schema.default).toBe('3');

             // Проверяем очистку схем
       expect(processedSpec.components.schemas).toHaveProperty('UserResponse1');
       expect(processedSpec.components.schemas).toHaveProperty('Settings2');
       expect(processedSpec.components.schemas).not.toHaveProperty('UserResponse[1]');
       expect(processedSpec.components.schemas).not.toHaveProperty('SiteUserControllerSettings[2]');

      // 4. Симулируем генерацию API файлов (создаем тестовые файлы)
      const testApiFile1 = `
export const UserApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        userGetProfileV1: async (requestParameters: UserGetProfileV1Request = {}, options?: AxiosRequestConfig): Promise<AxiosResponse<UserProfileResponse>> => {
            const { v, language } = requestParameters;
            const localVarQueryParameter = {} as any;

            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testApiFile2 = `
export const SettingsApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        settingsGetSettingV3: async (requestParameters: SettingsGetSettingV3Request = {}, options?: AxiosRequestConfig): Promise<AxiosResponse<SettingsResponse>> => {
            const { v } = requestParameters;
            const localVarFormParams = new FormData();

            if (v !== undefined) {
                localVarFormParams.append('v', v as any);
            }

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const apiFile1Path = path.join(testApiDir, 'user-api.ts');
      const apiFile2Path = path.join(testApiDir, 'settings-api.ts');
      
      fs.writeFileSync(apiFile1Path, testApiFile1);
      fs.writeFileSync(apiFile2Path, testApiFile2);

      // 5. Тестируем постобработку
      const postprocessApi = require('../scripts/postprocess-api.js');
      
      const result1 = postprocessApi.processApiFile(apiFile1Path);
      const result2 = postprocessApi.processApiFile(apiFile2Path);

      // Проверяем результаты постобработки
      expect(result1.totalChanges).toBe(1);
      expect(result2.totalChanges).toBe(1);

      const processedContent1 = fs.readFileSync(apiFile1Path, 'utf8');
      const processedContent2 = fs.readFileSync(apiFile2Path, 'utf8');

      // Проверяем автоподстановку версий
      expect(processedContent1).toContain("} else {\n                localVarQueryParameter['v'] = '1';");
      expect(processedContent2).toContain("} else {\n                localVarFormParams.append('v', '3' as any);");

      console.log('✅ Интеграционный тест прошел успешно!');
    }, 30000); // Увеличиваем timeout для интеграционного теста
  });

  describe('тестирование версий по умолчанию', () => {
    it('должен создавать методы с правильной автоподстановкой версий', () => {
      // Создаем тестовый API файл с методами разных версий
      const mixedVersionsApi = `
export const MixedApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        methodV1: async (requestParameters: MethodV1Request = {}, options?: AxiosRequestConfig) => {
            const { v, param1 } = requestParameters;
            const localVarQueryParameter = {} as any;

            if (param1 !== undefined) {
                localVarQueryParameter['param1'] = param1;
            }

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }

            return axios.request(localVarRequestOptions);
        },

        methodV2: async (requestParameters: MethodV2Request = {}, options?: AxiosRequestConfig) => {
            const { v, data } = requestParameters;
            const localVarFormParams = new FormData();

            if (data !== undefined) {
                localVarFormParams.append('data', data as any);
            }

            if (v !== undefined) {
                localVarFormParams.append('v', v as any);
            }

            return axios.request(localVarRequestOptions);
        },

        methodV5: async (requestParameters: MethodV5Request = {}, options?: AxiosRequestConfig) => {
            const { v, settings } = requestParameters;
            const localVarQueryParameter = {} as any;

            if (settings !== undefined) {
                localVarQueryParameter['settings'] = settings;
            }

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(testApiDir, 'mixed-versions-api.ts');
      fs.writeFileSync(testFile, mixedVersionsApi);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      expect(result.totalChanges).toBe(3);

      const processedContent = fs.readFileSync(testFile, 'utf8');

             // Проверяем что каждый метод получил правильную версию по умолчанию
       expect(processedContent).toContain("localVarQueryParameter['v'] = '1';");
       expect(processedContent).toContain("localVarFormParams.append('v', '1' as any);"); // FormData тоже получает V1
       expect(processedContent).toContain("localVarQueryParameter['v'] = '2';"); // V5 становится V2
    });
  });

  describe('регрессионные тесты', () => {
    it('должен корректно обрабатывать сложные случаи из реального API', () => {
      // Тест на основе реальных проблем, которые могли возникнуть
      const complexSpec = {
        openapi: '3.0.0',
        info: { title: 'Complex API', version: '1.0.0' },
        paths: {
          '/api/complex': {
            post: {
              operationId: 'SiteComplexControllerMethodWithLongName[3]V2',
              parameters: [
                {
                  name: 'v',
                  in: 'query',
                  required: true,
                  schema: { type: 'string', example: 'wrong_version' }
                }
              ]
            }
          }
        }
      };

      const specFile = path.join(tempDir, 'complex-spec.json');
      fs.writeFileSync(specFile, JSON.stringify(complexSpec, null, 2));

      const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
      const result = cleanOpenApiSpec.processSpec(specFile);

             // Проверяем что сложное имя обработано правильно
       expect(result.paths['/api/complex'].post.operationId).toBe('SiteComplexControllerMethodWithLongName[3]V2');
      
      // Проверяем что версия по умолчанию установлена правильно
             const vParam = result.paths['/api/complex'].post.parameters.find((p: any) => p.name === 'v');
      expect(vParam.schema.default).toBe('2');
      expect(vParam.required).toBe(false); // Должен стать опциональным
    });
  });
}); 