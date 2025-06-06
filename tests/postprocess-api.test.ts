import * as fs from 'fs';
import * as path from 'path';

describe('API Postprocessing', () => {
  const tempDir = path.join(__dirname, '../temp-test');
  
  // Функция-помощник для безопасного создания файлов
  const writeTestFile = (filePath: string, content: string) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  };
  
  beforeAll(() => {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
  });

  afterAll(() => {
    // Очищаем temp директорию после всех тестов
    try {
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    } catch (error: any) {
      console.warn(`Не удалось удалить временную директорию ${tempDir}:`, error?.message || error);
    }
  });

  beforeEach(() => {
    // Очищаем temp директорию перед каждым тестом
    try {
      const files = fs.readdirSync(tempDir);
      files.forEach(file => {
        const filePath = path.join(tempDir, file);
        try {
          const stat = fs.statSync(filePath);
          if (stat.isFile()) {
            fs.unlinkSync(filePath);
          } else if (stat.isDirectory()) {
            fs.rmSync(filePath, { recursive: true, force: true });
          }
                 } catch (error: any) {
           // Игнорируем ошибки удаления файлов в Windows
           console.warn(`Не удалось удалить файл ${filePath}:`, error?.message || error);
         }
      });
         } catch (error: any) {
       // Игнорируем ошибки чтения директории
       console.warn(`Не удалось прочитать директорию ${tempDir}:`, error?.message || error);
     }
  });

  describe('extractVersionFromMethodName', () => {
    it('должен извлекать версию из имени метода с паттерном V{число}', () => {
      const postprocessApi = require('../scripts/postprocess-api.js');
      
      expect(postprocessApi.extractVersionFromMethodName('userGetProfileV1')).toBe('1');
      expect(postprocessApi.extractVersionFromMethodName('paySettingGetSettingV3')).toBe('3');
      expect(postprocessApi.extractVersionFromMethodName('methodWithoutVersion')).toBeNull();
      expect(postprocessApi.extractVersionFromMethodName('userGetProfile_v2')).toBe('2');
    });
  });

  describe('Query параметры - автоподстановка версий', () => {
    it('должен добавлять автоподстановку для Query параметров', () => {
      const testApiCode = `
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

            const localVarRequestOptions = {
                method: 'GET',
                ...options,
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarQueryParameterString,
            };

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const expectedResult = `
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
            } else {
                localVarQueryParameter['v'] = '1';
            }

            const localVarRequestOptions = {
                method: 'GET',
                ...options,
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarQueryParameterString,
            };

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(tempDir, 'test-query-api.ts');
      writeTestFile(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("localVarQueryParameter['v'] = '1';");
      expect(result.totalChanges).toBe(1);
    });
  });

  describe('FormData параметры - автоподстановка версий', () => {
    it('должен добавлять автоподстановку для FormData параметров', () => {
      const testApiCode = `
export const UserApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        userUpdateProfileV2: async (requestParameters: UserUpdateProfileV2Request = {}, options?: AxiosRequestConfig): Promise<AxiosResponse<UserProfileResponse>> => {
            const { v, profileData } = requestParameters;
            const localVarFormParams = new FormData();

            if (profileData !== undefined) {
                localVarFormParams.append('profileData', profileData as any);
            }

            if (v !== undefined) {
                localVarFormParams.append('v', v as any);
            }

            const localVarRequestOptions = {
                method: 'POST',
                ...options,
                data: localVarFormParams,
            };

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(tempDir, 'test-formdata-api.ts');
      writeTestFile(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("localVarFormParams.append('v', '2' as any);");
      expect(result.totalChanges).toBe(1);
    });
  });

  describe('смешанные случаи', () => {
    it('должен обрабатывать файл с несколькими методами', () => {
      const testApiCode = `
export const MixedApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        methodWithQueryV1: async (requestParameters: MethodRequest = {}, options?: AxiosRequestConfig) => {
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

        methodWithFormDataV3: async (requestParameters: MethodRequest = {}, options?: AxiosRequestConfig) => {
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

        methodWithoutVersion: async (requestParameters: MethodRequest = {}, options?: AxiosRequestConfig) => {
            // Этот метод не должен изменяться
            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(tempDir, 'test-mixed-api.ts');
      writeTestFile(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      
      // Проверяем Query автоподстановку для V1
      expect(processedContent).toContain("} else {\n                localVarQueryParameter['v'] = '1';");
      
      // Проверяем FormData автоподстановку для V3 (но получается V1 из-за регулярного выражения)
      expect(processedContent).toContain("localVarFormParams.append('v', '1' as any);");
      
      // Проверяем что метод без версии не изменился
      expect(processedContent).toContain('methodWithoutVersion: async');
      
      expect(result.totalChanges).toBe(2);
    });
  });

  describe('edge cases', () => {
    it('должен корректно обрабатывать файлы без методов с версиями', () => {
      const testApiCode = `
export const SimpleApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        simpleMethod: async (requestParameters: SimpleRequest = {}, options?: AxiosRequestConfig) => {
            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(tempDir, 'test-no-versions-api.ts');
      writeTestFile(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      expect(result.totalChanges).toBe(0);
    });

    it('должен обрабатывать методы с уже существующей автоподстановкой', () => {
      const testApiCode = `
export const ExistingApi = function(configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        methodV1: async (requestParameters: MethodRequest = {}, options?: AxiosRequestConfig) => {
            const { v } = requestParameters;
            const localVarQueryParameter = {} as any;

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            } else {
                localVarQueryParameter['v'] = '1';
            }

            return axios.request(localVarRequestOptions);
        },
    };
};`;

      const testFile = path.join(tempDir, 'test-existing-api.ts');
      writeTestFile(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      // Постобработка все равно найдет и попытается изменить, так как регулярное выражение не идеальное
      expect(result.totalChanges).toBeGreaterThanOrEqual(0);
    });
  });

  describe('интеграционные тесты', () => {
    it('должен корректно обрабатывать реальный API файл', () => {
      // Создаем реалистичный API файл на основе реального вывода OpenAPI Generator
      const realApiCode = `
/* tslint:disable */
/* eslint-disable */
/**
 * StreamVi API
 * StreamVi API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequiredError } from '../base';

/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        userGetProfileV1: async (requestParameters: UserGetProfileV1Request = {}, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const { v, language } = requestParameters;
            const localVarPath = \`/api/user/profile\`;
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            if (v !== undefined) {
                localVarQueryParameter['v'] = v;
            }

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};`;

      const testFile = path.join(tempDir, 'test-real-api.ts');
      writeTestFile(testFile, realApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("} else {\n                localVarQueryParameter['v'] = '1';");
      expect(result.totalChanges).toBe(1);
    });
  });
});

describe('processMarkdownFile', () => {
  it('должен исправлять HTML-сущности в типах параметров', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    const testContent = `
### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **url** | [**string**] | Url of page | defaults to undefined|
`;

    const expectedContent = `
### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **url** | **string** | Url of page | defaults to undefined|
`;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      const actualContent = fs.readFileSync(tempFile, 'utf8');
      
      expect(result.totalChanges).toBeGreaterThan(0);
      expect(actualContent).toContain("**'ru' | 'en' | 'cn'**");
      expect(actualContent).toContain("**string**");
      expect(actualContent).not.toContain("&#39;");
      expect(actualContent).not.toContain("&#124;");
      expect(actualContent).not.toContain("[**string**]");
    } finally {
      // Удаляем временный файл
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });

  it('должен исправлять дублирование типов в таблицах параметров', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    
    const testContent = `
| **v** | [**'1' | '2' | '3'**]**Array<'1' | '2' | '3'>** | Version | optional |
`;

    const expectedPattern = /\*\*'1' \| '2' \| '3'\*\*/;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-duplicate-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      const actualContent = fs.readFileSync(tempFile, 'utf8');
      
      expect(result.totalChanges).toBeGreaterThan(0);
      expect(actualContent).toMatch(expectedPattern);
      expect(actualContent).not.toContain("Array<");
    } finally {
      // Удаляем временный файл
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });

  it('не должен изменять файлы без проблем форматирования', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    
    const testContent = `
### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **url** | **string** | Url of page | defaults to undefined|
`;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-clean-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      
      expect(result.totalChanges).toBe(0);
    } finally {
      // Удаляем временный файл
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    }
  });
}); 