import { StreamViSdkConfig } from '../../src/streamvi-sdk-config';
import { UserProjectApi, SiteUserProjectControllerGetProjectInfo1VEnum, SiteUserProjectControllerGetProjectInfo1LanguageEnum } from '../../src/generated/api2';

export async function getProjectInfo(accessToken: string, projectId: number) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const userProjectApi = new UserProjectApi(sdkConfig.configuration);
  const response = await userProjectApi.siteUserProjectControllerGetProjectInfo1(
    SiteUserProjectControllerGetProjectInfo1VEnum._1,
    SiteUserProjectControllerGetProjectInfo1LanguageEnum.Ru,
    projectId
  );
  return response.data;
} 