import { Configuration } from './generated/api2/configuration';
export declare class StreamViSdkConfig {
    private _accessToken;
    private _basePath;
    constructor({ accessToken, basePath }: {
        accessToken: string;
        basePath?: string;
    });
    get configuration(): Configuration;
    set accessToken(token: string);
    get accessToken(): string;
}
//# sourceMappingURL=streamvi-sdk-config.d.ts.map