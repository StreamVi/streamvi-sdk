## streamvi-api-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install streamvi-api-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**accountGetProfileV1**](docs/AccountApi.md#accountgetprofilev1) | **GET** /method/account/profile | Get account profile
*AccountApi* | [**accountUpdateProfileV1**](docs/AccountApi.md#accountupdateprofilev1) | **POST** /method/account/profile | Update account profile
*AnalyticsApi* | [**analyticsTsBroadcastMessagesV1**](docs/AnalyticsApi.md#analyticstsbroadcastmessagesv1) | **GET** /method/analytics/broadcast/messages | Messages for broadcast
*AnalyticsApi* | [**analyticsTsStreamBitrateV1**](docs/AnalyticsApi.md#analyticstsstreambitratev1) | **GET** /method/analytics/stream/graph/bitrate | Bitrate for stream
*AnalyticsApi* | [**analyticsTsStreamEventsV1**](docs/AnalyticsApi.md#analyticstsstreameventsv1) | **GET** /method/analytics/stream/events | Events for stream
*AnalyticsApi* | [**analyticsTsStreamViewersV1**](docs/AnalyticsApi.md#analyticstsstreamviewersv1) | **GET** /method/analytics/stream/graph/viewers | Viewers for stream
*AuthApi* | [**authCallbackGoogleV1**](docs/AuthApi.md#authcallbackgooglev1) | **GET** /method/auth/callback/google | Internal request of auth google
*AuthApi* | [**authCallbackVkIdV1**](docs/AuthApi.md#authcallbackvkidv1) | **GET** /method/auth/callback/vk-id | Internal request of auth new vk
*AuthApi* | [**authCallbackVkV1**](docs/AuthApi.md#authcallbackvkv1) | **GET** /method/auth/callback/vk | Internal request of auth old vk
*AuthApi* | [**authCodeV1**](docs/AuthApi.md#authcodev1) | **GET** /method/auth/app/code | Get code for auth
*AuthApi* | [**authConnectResultV1**](docs/AuthApi.md#authconnectresultv1) | **GET** /method/auth/connect/callback | CallBack for connect social
*AuthApi* | [**authConnectTelegramV1**](docs/AuthApi.md#authconnecttelegramv1) | **POST** /method/auth/connect-telegram | Connect telegram in account
*AuthApi* | [**authConnectV1**](docs/AuthApi.md#authconnectv1) | **GET** /method/auth/connect | Connected social account
*AuthApi* | [**authDisconnectV1**](docs/AuthApi.md#authdisconnectv1) | **GET** /method/auth/disconnect | Disconnected social account
*AuthApi* | [**authExchangeV1**](docs/AuthApi.md#authexchangev1) | **POST** /method/auth/app/exchange | Code exchange
*AuthApi* | [**authGetAuthUrlV1**](docs/AuthApi.md#authgetauthurlv1) | **GET** /method/auth/redirect-url | Get url for start oauth
*AuthApi* | [**authGetClientConfigurationV1**](docs/AuthApi.md#authgetclientconfigurationv1) | **POST** /method/auth/GetClientConfiguration | Get client configuration
*BlogPageApi* | [**blogPageGetV1**](docs/BlogPageApi.md#blogpagegetv1) | **GET** /method/blog/page/get | Get blog page
*BlogPageApi* | [**blogPageListV1**](docs/BlogPageApi.md#blogpagelistv1) | **GET** /method/blog/page/list | Get list of blog pages
*BlogPageTagApi* | [**blogPageTagListV1**](docs/BlogPageTagApi.md#blogpagetaglistv1) | **GET** /method/blog/tag/list | List blog tags
*BroadcastApi* | [**broadcastCredentialsV1**](docs/BroadcastApi.md#broadcastcredentialsv1) | **GET** /method/broadcast/credentials | Get credentials
*BroadcastApi* | [**broadcastEventItemV1**](docs/BroadcastApi.md#broadcasteventitemv1) | **GET** /method/broadcast/events/item | Broadcast event item
*BroadcastApi* | [**broadcastEventsV4**](docs/BroadcastApi.md#broadcasteventsv4) | **GET** /method/broadcast/events | Events from broadcast v4
*BroadcastApi* | [**broadcastFindV1**](docs/BroadcastApi.md#broadcastfindv1) | **GET** /method/broadcast | Get one broadcast
*BroadcastApi* | [**broadcastGetTemplateV1**](docs/BroadcastApi.md#broadcastgettemplatev1) | **GET** /method/broadcast/template | Get broadcast title and description template
*BroadcastApi* | [**broadcastGraphBitrateV1**](docs/BroadcastApi.md#broadcastgraphbitratev1) | **GET** /method/broadcast/graph/bitrate | Bitrate from broadcast
*BroadcastApi* | [**broadcastGraphViewersV1**](docs/BroadcastApi.md#broadcastgraphviewersv1) | **GET** /method/broadcast/graph/viewers | Viewers from broadcast
*BroadcastApi* | [**broadcastListV1**](docs/BroadcastApi.md#broadcastlistv1) | **GET** /method/broadcast/list | List broadcast
*BroadcastApi* | [**broadcastPauseV1**](docs/BroadcastApi.md#broadcastpausev1) | **POST** /method/broadcast/pause | Pause an active live broadcast
*BroadcastApi* | [**broadcastPlayV1**](docs/BroadcastApi.md#broadcastplayv1) | **POST** /method/broadcast/play | Resume an active live broadcast
*BroadcastApi* | [**broadcastRestreamChatV1**](docs/BroadcastApi.md#broadcastrestreamchatv1) | **GET** /method/broadcast/restreams-chat | Get restreams for chat
*BroadcastApi* | [**broadcastRestreamsV1**](docs/BroadcastApi.md#broadcastrestreamsv1) | **GET** /method/broadcast/restreams | View live info
*BroadcastApi* | [**broadcastStatusV1**](docs/BroadcastApi.md#broadcaststatusv1) | **GET** /method/broadcast/status | Live status info by project id
*BroadcastApi* | [**broadcastStopV1**](docs/BroadcastApi.md#broadcaststopv1) | **POST** /method/broadcast/stop | Request stopping an active live broadcast
*BroadcastApi* | [**broadcastTokenChannelV1**](docs/BroadcastApi.md#broadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling
*CentrifugeApi* | [**centrifugeAuthV2**](docs/CentrifugeApi.md#centrifugeauthv2) | **GET** /method/centrifuge | Auth centrifuge for project
*CentrifugeApi* | [**centrifugeChannelTokenV1**](docs/CentrifugeApi.md#centrifugechanneltokenv1) | **GET** /method/centrifuge/auth/channel | Get token for connect to centrifuge for channel
*CentrifugeApi* | [**centrifugeChannelsCatalogV1**](docs/CentrifugeApi.md#centrifugechannelscatalogv1) | **GET** /method/centrifuge/channels | List available Method API Centrifuge channels
*CentrifugeApi* | [**centrifugeConnectionTokenV1**](docs/CentrifugeApi.md#centrifugeconnectiontokenv1) | **GET** /method/centrifuge/auth/connect | Get token for connect to centrifuge for project
*CentrifugeApi* | [**centrifugeProjectV1**](docs/CentrifugeApi.md#centrifugeprojectv1) | **GET** /method/centrifuge/auth/project | Auth token for project
*CentrifugeApi* | [**getTokenBroadcastV1**](docs/CentrifugeApi.md#gettokenbroadcastv1) | **GET** /method/centrifuge/token/broadcast | Auth token for broadcast
*ChannelApi* | [**addChannelMethodAddBizonV1**](docs/ChannelApi.md#addchannelmethodaddbizonv1) | **POST** /method/channel/add/bizon | Add bizon channel
*ChannelApi* | [**addChannelMethodAddBoostyV1**](docs/ChannelApi.md#addchannelmethodaddboostyv1) | **POST** /method/channel/add/boosty | Add boosty channel
*ChannelApi* | [**addChannelMethodAddCustomV1**](docs/ChannelApi.md#addchannelmethodaddcustomv1) | **POST** /method/channel/add/custom | Add custom channel
*ChannelApi* | [**addChannelMethodAddDouyuV1**](docs/ChannelApi.md#addchannelmethodadddouyuv1) | **POST** /method/channel/add/douyu | Add douyu channel
*ChannelApi* | [**addChannelMethodAddFbV1**](docs/ChannelApi.md#addchannelmethodaddfbv1) | **POST** /method/channel/add/fb | Add fb channel
*ChannelApi* | [**addChannelMethodAddFc2LiveV1**](docs/ChannelApi.md#addchannelmethodaddfc2livev1) | **POST** /method/channel/add/fc2Live | Add fc2Live channel
*ChannelApi* | [**addChannelMethodAddGetcourseV1**](docs/ChannelApi.md#addchannelmethodaddgetcoursev1) | **POST** /method/channel/add/getcourse | Add getcourse channel
*ChannelApi* | [**addChannelMethodAddGoodgameV1**](docs/ChannelApi.md#addchannelmethodaddgoodgamev1) | **POST** /method/channel/add/goodgame | Add goodgame channel
*ChannelApi* | [**addChannelMethodAddHuyaV1**](docs/ChannelApi.md#addchannelmethodaddhuyav1) | **POST** /method/channel/add/huya | Add huya channel
*ChannelApi* | [**addChannelMethodAddInstagramV1**](docs/ChannelApi.md#addchannelmethodaddinstagramv1) | **POST** /method/channel/add/instagram | Add instagram channel
*ChannelApi* | [**addChannelMethodAddKickV1**](docs/ChannelApi.md#addchannelmethodaddkickv1) | **POST** /method/channel/add/kick | Add kick channel
*ChannelApi* | [**addChannelMethodAddKinescopeV1**](docs/ChannelApi.md#addchannelmethodaddkinescopev1) | **POST** /method/channel/add/kinescope | Add kinescope channel
*ChannelApi* | [**addChannelMethodAddLinkedinV1**](docs/ChannelApi.md#addchannelmethodaddlinkedinv1) | **POST** /method/channel/add/linkedin | Add linkedin channel
*ChannelApi* | [**addChannelMethodAddNavertvV1**](docs/ChannelApi.md#addchannelmethodaddnavertvv1) | **POST** /method/channel/add/navertv | Add navertv channel
*ChannelApi* | [**addChannelMethodAddNimotvV1**](docs/ChannelApi.md#addchannelmethodaddnimotvv1) | **POST** /method/channel/add/nimotv | Add nimotv channel
*ChannelApi* | [**addChannelMethodAddNonoliveV1**](docs/ChannelApi.md#addchannelmethodaddnonolivev1) | **POST** /method/channel/add/nonolive | Add nonolive channel
*ChannelApi* | [**addChannelMethodAddOkV1**](docs/ChannelApi.md#addchannelmethodaddokv1) | **POST** /method/channel/add/ok | Add ok channel
*ChannelApi* | [**addChannelMethodAddPlvideoV1**](docs/ChannelApi.md#addchannelmethodaddplvideov1) | **POST** /method/channel/add/plvideo | Add plvideo channel
*ChannelApi* | [**addChannelMethodAddRutubeV1**](docs/ChannelApi.md#addchannelmethodaddrutubev1) | **POST** /method/channel/add/rutube | Add rutube channel
*ChannelApi* | [**addChannelMethodAddSrtV1**](docs/ChannelApi.md#addchannelmethodaddsrtv1) | **POST** /method/channel/add/srt | Add srt channel
*ChannelApi* | [**addChannelMethodAddSteamV1**](docs/ChannelApi.md#addchannelmethodaddsteamv1) | **POST** /method/channel/add/steam | Add steam channel
*ChannelApi* | [**addChannelMethodAddTachidV1**](docs/ChannelApi.md#addchannelmethodaddtachidv1) | **POST** /method/channel/add/tachid | Add tach channel
*ChannelApi* | [**addChannelMethodAddTelegramV1**](docs/ChannelApi.md#addchannelmethodaddtelegramv1) | **POST** /method/channel/add/telegram | Add telegram channel
*ChannelApi* | [**addChannelMethodAddTiktokV1**](docs/ChannelApi.md#addchannelmethodaddtiktokv1) | **POST** /method/channel/add/tiktok | Add tiktok channel
*ChannelApi* | [**addChannelMethodAddVkV1**](docs/ChannelApi.md#addchannelmethodaddvkv1) | **POST** /method/channel/add/vk | Add vk channel
*ChannelApi* | [**addChannelMethodAddVliveV1**](docs/ChannelApi.md#addchannelmethodaddvlivev1) | **POST** /method/channel/add/vlive | Add vlive channel
*ChannelApi* | [**addChannelMethodAddZhanqiTvV1**](docs/ChannelApi.md#addchannelmethodaddzhanqitvv1) | **POST** /method/channel/add/zhanqitv | Add zhanqitv channel
*ChannelApi* | [**channelDeleteChannelV1**](docs/ChannelApi.md#channeldeletechannelv1) | **POST** /method/channel/delete | Delete channel
*ChannelApi* | [**channelGetChannelV1**](docs/ChannelApi.md#channelgetchannelv1) | **GET** /method/channel/get | Get channel by id
*ChannelApi* | [**channelSetDelayV1**](docs/ChannelApi.md#channelsetdelayv1) | **GET** /method/channel/set-delay | Emit simulated channel statuses for manual testing
*ChannelApi* | [**channelShortChannelListV1**](docs/ChannelApi.md#channelshortchannellistv1) | **GET** /method/channel/short | Minimal channel list
*ChannelApi* | [**methodSearchV1**](docs/ChannelApi.md#methodsearchv1) | **GET** /method/channel/search | Search channels connected to a project
*ChannelApi* | [**methodSetStatusLegacyV1**](docs/ChannelApi.md#methodsetstatuslegacyv1) | **POST** /method/channel/set-status | Set desired channel state
*ChannelApi* | [**methodSetStatusV1**](docs/ChannelApi.md#methodsetstatusv1) | **PUT** /method/channel/status | Set desired channel state
*ChannelSettingsApi* | [**channelChatGetTelegramSettingV1**](docs/ChannelSettingsApi.md#channelchatgettelegramsettingv1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings
*ChannelSettingsApi* | [**channelChatInitTelegramChatConnectV1**](docs/ChannelSettingsApi.md#channelchatinittelegramchatconnectv1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat
*ChannelSettingsApi* | [**channelChatRemoveTelegramChatV1**](docs/ChannelSettingsApi.md#channelchatremovetelegramchatv1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat
*ChannelSettingsApi* | [**channelChatSetTelegramSettingV1**](docs/ChannelSettingsApi.md#channelchatsettelegramsettingv1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings
*ChannelSettingsApi* | [**channelChatTelegramPostsV1**](docs/ChannelSettingsApi.md#channelchattelegrampostsv1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list
*ChannelSettingsApi* | [**channelChatUpdateOptionsTelegramV1**](docs/ChannelSettingsApi.md#channelchatupdateoptionstelegramv1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram
*ChannelSettingsApi* | [**channelOptionsDisconnectPlannedProviderV1**](docs/ChannelSettingsApi.md#channeloptionsdisconnectplannedproviderv1) | **POST** /method/channel_settings/options/disconnectPlannedProvider | Disconnect a VK Video Live account from this project channel
*ChannelSettingsApi* | [**channelOptionsGetPlannedV1**](docs/ChannelSettingsApi.md#channeloptionsgetplannedv1) | **GET** /method/channel_settings/options/getPlanned | Get planned list
*ChannelSettingsApi* | [**channelOptionsGetPlayListV1**](docs/ChannelSettingsApi.md#channeloptionsgetplaylistv1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsOkV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsokv1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsTrovoV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionstrovov1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsTwitchV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionstwitchv1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsVkV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsvkv1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsVkVideoLiveV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsvkvideolivev1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsYoutubeV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsyoutubev1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdatePlannedV1**](docs/ChannelSettingsApi.md#channeloptionsupdateplannedv1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsVerifyPlannedAccessV1**](docs/ChannelSettingsApi.md#channeloptionsverifyplannedaccessv1) | **POST** /method/channel_settings/options/verifyPlannedAccess | Confirm a VK channel connection using the first accessible planned broadcast
*ChannelSettingsApi* | [**channelSettingBulkUpdateV1**](docs/ChannelSettingsApi.md#channelsettingbulkupdatev1) | **POST** /method/channel_settings/bulkUpdate | Bulk update channel title and description. Global settings.
*ChannelSettingsApi* | [**channelSettingConnectProviderV1**](docs/ChannelSettingsApi.md#channelsettingconnectproviderv1) | **GET** /method/channel_settings/connect-provider | Connect VK Video Live to an existing VK channel
*ChannelSettingsApi* | [**channelSettingGetStatusV1**](docs/ChannelSettingsApi.md#channelsettinggetstatusv1) | **GET** /method/channel_settings/getStatus | Get status platform
*ChannelSettingsApi* | [**channelSettingSetNameV1**](docs/ChannelSettingsApi.md#channelsettingsetnamev1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.
*ChannelSettingsApi* | [**channelSettingUpdateRtmpV1**](docs/ChannelSettingsApi.md#channelsettingupdatertmpv1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.
*ChannelSettingsApi* | [**channelSettingUpdateSrtUrlV1**](docs/ChannelSettingsApi.md#channelsettingupdatesrturlv1) | **POST** /method/channel_settings/setSrt | Set srt url from channel. Global settings.
*ChannelSettingsApi* | [**channelSettingUpdateTokenV1**](docs/ChannelSettingsApi.md#channelsettingupdatetokenv1) | **GET** /method/channel_settings/update-token | Redirect to OAuth for updating a channel token
*ChannelSettingsApi* | [**channelSettingUpdateTranscoderV1**](docs/ChannelSettingsApi.md#channelsettingupdatetranscoderv1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.
*ChannelSettingsApi* | [**telegramGetPostByFilterV1**](docs/ChannelSettingsApi.md#telegramgetpostbyfilterv1) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter
*ChatApi* | [**chatGatewayKeyV1**](docs/ChatApi.md#chatgatewaykeyv1) | **GET** /method/chat/key | Get chat key
*ChatApi* | [**chatGatewayRotateKeyV1**](docs/ChatApi.md#chatgatewayrotatekeyv1) | **PUT** /method/chat/key | Rotate chat key
*ChatGatewayApi* | [**methodChatGatewayDeleteV1**](docs/ChatGatewayApi.md#methodchatgatewaydeletev1) | **POST** /method/chat/messages/delete | Remove message
*ChatGatewayApi* | [**methodChatGatewayGetMessageV1**](docs/ChatGatewayApi.md#methodchatgatewaygetmessagev1) | **GET** /method/chat/messages/message | Get one message
*ChatGatewayApi* | [**methodChatGatewayHistoryV1**](docs/ChatGatewayApi.md#methodchatgatewayhistoryv1) | **GET** /method/chat/messages | List history message
*ChatGatewayApi* | [**methodChatGatewaySendV1**](docs/ChatGatewayApi.md#methodchatgatewaysendv1) | **POST** /method/chat/messages | Send message
*CountriesApi* | [**countriesListV1**](docs/CountriesApi.md#countrieslistv1) | **GET** /method/countries | Get countries
*DedicatedServerApi* | [**methodDedicatedServerCreateV1**](docs/DedicatedServerApi.md#methoddedicatedservercreatev1) | **POST** /method/dedicated-server/create | Create dedicated server request
*DedicatedServerApi* | [**methodDedicatedServerCurrentV1**](docs/DedicatedServerApi.md#methoddedicatedservercurrentv1) | **GET** /method/dedicated-server/current | Get current dedicated server
*DedicatedServerApi* | [**methodDedicatedServerDeleteV1**](docs/DedicatedServerApi.md#methoddedicatedserverdeletev1) | **DELETE** /method/dedicated-server/delete | Delete dedicated server
*HelpPageApi* | [**helpPageGetV1**](docs/HelpPageApi.md#helppagegetv1) | **GET** /method/help/page/get | Get help page
*HelpPageApi* | [**helpPageListV1**](docs/HelpPageApi.md#helppagelistv1) | **GET** /method/help/page/search | Get list of help pages
*HelpPageApi* | [**helpPageStructureV1**](docs/HelpPageApi.md#helppagestructurev1) | **GET** /method/help/page/structure | Get structure of help pages
*IntegrationApi* | [**methodIntegrationAddV1**](docs/IntegrationApi.md#methodintegrationaddv1) | **POST** /method/integration/add | Create a developer application owned by the authenticated account
*IntegrationApi* | [**methodIntegrationDeleteV1**](docs/IntegrationApi.md#methodintegrationdeletev1) | **DELETE** /method/integration/delete | Delete another developer application owned by the authenticated account
*IntegrationApi* | [**methodIntegrationGetV1**](docs/IntegrationApi.md#methodintegrationgetv1) | **GET** /method/integration/get | Get a developer application accessible to the authenticated account
*IntegrationApi* | [**methodIntegrationListV1**](docs/IntegrationApi.md#methodintegrationlistv1) | **GET** /method/integration/list | List developer applications owned or administered by the authenticated account
*IntegrationApi* | [**methodIntegrationScopesV1**](docs/IntegrationApi.md#methodintegrationscopesv1) | **GET** /method/integration/scopes | Get the public OAuth scope catalog with localized descriptions
*IntegrationApi* | [**methodIntegrationUpdateDesignV1**](docs/IntegrationApi.md#methodintegrationupdatedesignv1) | **PUT** /method/integration/update_design | Update developer application images
*IntegrationApi* | [**methodIntegrationUpdateInfoV1**](docs/IntegrationApi.md#methodintegrationupdateinfov1) | **POST** /method/integration/update_info | Update developer application title, categories and help links
*IntegrationApi* | [**methodIntegrationUpdateSettingsV1**](docs/IntegrationApi.md#methodintegrationupdatesettingsv1) | **PUT** /method/integration/update_settings | Update another developer application OAuth and launch settings
*IntegrationAccountApi* | [**methodIntegrationAccountGetV1**](docs/IntegrationAccountApi.md#methodintegrationaccountgetv1) | **GET** /method/integration/account/get | Get an integration grant owned by the authenticated account
*IntegrationAccountApi* | [**methodIntegrationAccountListV1**](docs/IntegrationAccountApi.md#methodintegrationaccountlistv1) | **GET** /method/integration/account/list | List integration grants owned by the authenticated account
*IntegrationAccountApi* | [**methodIntegrationAccountRevokeV1**](docs/IntegrationAccountApi.md#methodintegrationaccountrevokev1) | **DELETE** /method/integration/account/revoke | Revoke another integration grant owned by the authenticated account
*IntegrationManagementApi* | [**methodIntegrationAncillaryAcceptInvitationV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryacceptinvitationv1) | **POST** /method/integration/invite/accept | Accept a pending application invitation addressed to the authenticated account
*IntegrationManagementApi* | [**methodIntegrationAncillaryAddAccessV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryaddaccessv1) | **POST** /method/integration/access/add | Grant a project test access to the application
*IntegrationManagementApi* | [**methodIntegrationAncillaryAddAdministratorV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryaddadministratorv1) | **POST** /method/integration/administrator/add | Grant application administrator access by external recipient identity
*IntegrationManagementApi* | [**methodIntegrationAncillaryAddInvitationV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryaddinvitationv1) | **POST** /method/integration/invite/add | Create an application invitation for an external recipient identity and send its notification
*IntegrationManagementApi* | [**methodIntegrationAncillaryAddWebhookV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryaddwebhookv1) | **POST** /method/integration/webhook/add | Create an application webhook and return its ID
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeclineInvitationV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeclineinvitationv1) | **POST** /method/integration/invite/decline | Decline a pending application invitation addressed to the authenticated account
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeleteAccessV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeleteaccessv1) | **DELETE** /method/integration/access/delete | Remove application test access for a project
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeleteAdministratorV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeleteadministratorv1) | **DELETE** /method/integration/administrator/delete | Remove an application administrator by user ID
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeleteInvitationV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeleteinvitationv1) | **POST** /method/integration/invite/del | Delete an outgoing invitation belonging to the owned application
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeleteModerationV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeletemoderationv1) | **DELETE** /method/integration/access/delete_moderate | Withdraw the owned application moderation request
*IntegrationManagementApi* | [**methodIntegrationAncillaryDeleteWebhookV1**](docs/IntegrationManagementApi.md#methodintegrationancillarydeletewebhookv1) | **DELETE** /method/integration/webhook/delete | Delete a webhook belonging to an accessible application
*IntegrationManagementApi* | [**methodIntegrationAncillaryGetInvitationV1**](docs/IntegrationManagementApi.md#methodintegrationancillarygetinvitationv1) | **GET** /method/integration/invite/get | Read a pending invitation addressed to the authenticated account by its link secret
*IntegrationManagementApi* | [**methodIntegrationAncillaryGetWebhookV1**](docs/IntegrationManagementApi.md#methodintegrationancillarygetwebhookv1) | **GET** /method/integration/webhook/get | Read an application webhook
*IntegrationManagementApi* | [**methodIntegrationAncillaryListAccessV1**](docs/IntegrationManagementApi.md#methodintegrationancillarylistaccessv1) | **GET** /method/integration/access/list | List application test-access projects
*IntegrationManagementApi* | [**methodIntegrationAncillaryListAdministratorsV1**](docs/IntegrationManagementApi.md#methodintegrationancillarylistadministratorsv1) | **GET** /method/integration/administrator/list | List application administrators and their owner/developer levels
*IntegrationManagementApi* | [**methodIntegrationAncillaryListInvitationsV1**](docs/IntegrationManagementApi.md#methodintegrationancillarylistinvitationsv1) | **GET** /method/integration/invite/list | List pending outgoing application invitations
*IntegrationManagementApi* | [**methodIntegrationAncillaryListWebhooksV1**](docs/IntegrationManagementApi.md#methodintegrationancillarylistwebhooksv1) | **GET** /method/integration/webhook/list | List application webhooks with limit/offset pagination
*IntegrationManagementApi* | [**methodIntegrationAncillarySubmitModerationV1**](docs/IntegrationManagementApi.md#methodintegrationancillarysubmitmoderationv1) | **POST** /method/integration/access/submit_moderate | Submit the owned application for platform moderation
*IntegrationManagementApi* | [**methodIntegrationAncillaryTransferV1**](docs/IntegrationManagementApi.md#methodintegrationancillarytransferv1) | **POST** /method/integration/administrator/transfer | Transfer application ownership to an existing user
*IntegrationManagementApi* | [**methodIntegrationAncillaryUpdateWebhookV1**](docs/IntegrationManagementApi.md#methodintegrationancillaryupdatewebhookv1) | **PUT** /method/integration/webhook/update | Update an accessible application webhook
*IntegrationTemplateApi* | [**methodTemplateAddV1**](docs/IntegrationTemplateApi.md#methodtemplateaddv1) | **POST** /method/integration_project_template/add | Create a template in an installation belonging to the selected authorized project
*IntegrationTemplateApi* | [**methodTemplateCopyV1**](docs/IntegrationTemplateApi.md#methodtemplatecopyv1) | **POST** /method/integration_project_template/copy | Copy an authorized template within its project installation
*IntegrationTemplateApi* | [**methodTemplateDeleteV1**](docs/IntegrationTemplateApi.md#methodtemplatedeletev1) | **DELETE** /method/integration_project_template/delete | Delete a template belonging to the selected authorized project
*IntegrationTemplateApi* | [**methodTemplateGetV1**](docs/IntegrationTemplateApi.md#methodtemplategetv1) | **GET** /method/integration_project_template/get | Get a template belonging to an installation in the selected authorized project
*IntegrationTemplateApi* | [**methodTemplateListV1**](docs/IntegrationTemplateApi.md#methodtemplatelistv1) | **GET** /method/integration_project_template/list | List templates of an installation in the selected authorized project
*IntegrationTemplateApi* | [**methodTemplateSetWidgetV1**](docs/IntegrationTemplateApi.md#methodtemplatesetwidgetv1) | **POST** /method/integration_project_template/widget/set | Set an authorized template widget JSON payload
*LiveApi* | [**controllersRestreamsV1**](docs/LiveApi.md#controllersrestreamsv1) | **GET** /method/live/restreams | View live info
*MediaServiceFilesApi* | [**mediaServiceFilesSiteCancelV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitecancelv1) | **POST** /method/media-service-files/cancel | Cancel service video
*MediaServiceFilesApi* | [**mediaServiceFilesSiteCreateV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitecreatev1) | **POST** /method/media-service-files/add | Create service video
*MediaServiceFilesApi* | [**mediaServiceFilesSiteDeleteV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitedeletev1) | **POST** /method/media-service-files/delete | Delete service video
*MediaServiceFilesApi* | [**mediaServiceFilesSiteGetV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitegetv1) | **GET** /method/media-service-files/get | Get service video
*MediaServiceFilesApi* | [**mediaServiceFilesSiteListV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitelistv1) | **GET** /method/media-service-files/list | Get service video list
*MediaServiceFilesApi* | [**mediaServiceFilesSiteSessionV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitesessionv1) | **GET** /method/media-service-files/session | Get session by media id
*MediaServiceFilesApi* | [**mediaServiceFilesSiteSetV1**](docs/MediaServiceFilesApi.md#mediaservicefilessitesetv1) | **POST** /method/media-service-files/set | Set service video
*MediaServiceFilesApi* | [**mediaServiceFilesSiteUpdateV1**](docs/MediaServiceFilesApi.md#mediaservicefilessiteupdatev1) | **POST** /method/media-service-files/update | Update service video
*MethodIntegrationApi* | [**methodIntegrationTemplateGetTemplateWidgetDataV1**](docs/MethodIntegrationApi.md#methodintegrationtemplategettemplatewidgetdatav1) | **GET** /method/integration-template/widget/get | Get template widget data
*MoneyFlowApi* | [**moneyFlowListV1**](docs/MoneyFlowApi.md#moneyflowlistv1) | **GET** /method/money_flow/list | Transaction list for frontend
*NotifyHistoryApi* | [**methodExecuteNotifyActionExecuteV1**](docs/NotifyHistoryApi.md#methodexecutenotifyactionexecutev1) | **POST** /method/notify_history/execute_action | Execute an owned notification action
*NotifyHistoryApi* | [**notifyHistoryGetListMyV1**](docs/NotifyHistoryApi.md#notifyhistorygetlistmyv1) | **GET** /method/notify_history/list | Get list of my notifications
*NotifyHistoryApi* | [**notifyHistoryGetStatusMyV1**](docs/NotifyHistoryApi.md#notifyhistorygetstatusmyv1) | **GET** /method/notify_history/get_status | Get my status unread message for user
*NotifyHistoryApi* | [**notifyHistoryGetV1**](docs/NotifyHistoryApi.md#notifyhistorygetv1) | **GET** /method/notify_history/get | Get my NotifyHistory item by id
*NotifyHistoryApi* | [**notifyHistoryMarkOfReadV1**](docs/NotifyHistoryApi.md#notifyhistorymarkofreadv1) | **PUT** /method/notify_history/read | Set notification in cabinet as read
*NotifyHistoryApi* | [**notifyHistoryRunActionV1**](docs/NotifyHistoryApi.md#notifyhistoryrunactionv1) | **POST** /method/notify_history/run_action | Run action in my notify item
*NotifyHistoryApi* | [**notifyHistorySetAllCabinetReadV1**](docs/NotifyHistoryApi.md#notifyhistorysetallcabinetreadv1) | **POST** /method/notify_history/set_all_cabinet_read | Set all notification in cabinet as read
*NotifyUserApi* | [**notifyUserDelMobileTokenV1**](docs/NotifyUserApi.md#notifyuserdelmobiletokenv1) | **POST** /method/notify_user/del_mobile_token | Delete mobile token from user
*NotifyUserApi* | [**notifyUserGetScreenV1**](docs/NotifyUserApi.md#notifyusergetscreenv1) | **GET** /method/notify_user/screen | Get user screen notify
*NotifyUserApi* | [**notifyUserGetV1**](docs/NotifyUserApi.md#notifyusergetv1) | **GET** /method/notify_user/setting | Get user notify settings
*NotifyUserApi* | [**notifyUserRemoveScreenV1**](docs/NotifyUserApi.md#notifyuserremovescreenv1) | **POST** /method/notify_user/screen | Remove user screen notify
*NotifyUserApi* | [**notifyUserSetV1**](docs/NotifyUserApi.md#notifyusersetv1) | **POST** /method/notify_user/setting | Set user notify settings
*PaySettingApi* | [**paySettingCheckCountryV1**](docs/PaySettingApi.md#paysettingcheckcountryv1) | **GET** /method/pay-setting/check-country | Check country after update user
*PaySettingApi* | [**paySettingGetSettingV3**](docs/PaySettingApi.md#paysettinggetsettingv3) | **GET** /method/pay-setting | Get pay settings for profile v3
*PaySettingApi* | [**paySettingSetSettingV1**](docs/PaySettingApi.md#paysettingsetsettingv1) | **POST** /method/pay-setting | Set pay settings for profile
*PaySystemApi* | [**paySystemCreateChallengeV1**](docs/PaySystemApi.md#paysystemcreatechallengev1) | **GET** /method/pay-system/payoneer/create | Create payoneer payment challenge redirect url
*PaySystemApi* | [**paySystemCreateTBankV1**](docs/PaySystemApi.md#paysystemcreatetbankv1) | **GET** /method/pay-system/t-bank/create | Create t-bank payment challenge redirect url
*PaySystemApi* | [**paySystemCreateUnitpayV1**](docs/PaySystemApi.md#paysystemcreateunitpayv1) | **GET** /method/pay-system/unitpay/create | Create unitpay payment challenge redirect url
*PaySystemApi* | [**paySystemListV1**](docs/PaySystemApi.md#paysystemlistv1) | **GET** /method/pay-system/list | Load available pay systems
*PaySystemApi* | [**tonConnectIntentV1**](docs/PaySystemApi.md#tonconnectintentv1) | **GET** /method/pay-system/tonconnect/intent | Create TonConnect payment intent
*PaySystemApi* | [**tonConnectStatusV1**](docs/PaySystemApi.md#tonconnectstatusv1) | **GET** /method/pay-system/tonconnect/status | Get TonConnect payment verification status
*PaySystemApi* | [**tonConnectSubmitV1**](docs/PaySystemApi.md#tonconnectsubmitv1) | **POST** /method/pay-system/tonconnect/submit | Submit TonConnect payment transaction
*PaySystemApi* | [**tronPaymentIntentV1**](docs/PaySystemApi.md#tronpaymentintentv1) | **GET** /method/pay-system/tron/intent | Create TRON USDT deposit payment intent
*PaySystemApi* | [**tronPaymentStatusV1**](docs/PaySystemApi.md#tronpaymentstatusv1) | **GET** /method/pay-system/tron/status | Get TRON USDT payment status
*PaySystemApi* | [**tronPaymentSubmitV1**](docs/PaySystemApi.md#tronpaymentsubmitv1) | **POST** /method/pay-system/tron/submit | Submit TRON USDT transaction hash (disabled)
*PaySystemApi* | [**walletConnectIntentV1**](docs/PaySystemApi.md#walletconnectintentv1) | **GET** /method/pay-system/walletconnect/intent | Create WalletConnect payment intent
*PaySystemApi* | [**walletConnectStatusV1**](docs/PaySystemApi.md#walletconnectstatusv1) | **GET** /method/pay-system/walletconnect/status | Get WalletConnect payment verification status
*PaySystemApi* | [**walletConnectSubmitV1**](docs/PaySystemApi.md#walletconnectsubmitv1) | **POST** /method/pay-system/walletconnect/submit | Submit WalletConnect payment transaction hash
*PaymentApi* | [**paymentCreateV1**](docs/PaymentApi.md#paymentcreatev1) | **POST** /method/payment | Create payment item for pay system
*PaymentApi* | [**paymentGetStatusV1**](docs/PaymentApi.md#paymentgetstatusv1) | **GET** /method/payment | Get payment status for a project
*PayoutApi* | [**payoutCreateV1**](docs/PayoutApi.md#payoutcreatev1) | **POST** /method/payout/create | Create payout
*PayoutApi* | [**payoutPrepareV1**](docs/PayoutApi.md#payoutpreparev1) | **GET** /method/payout/prepare | Get payout data for create
*PlanRestreamApi* | [**planRestreamBuyV1**](docs/PlanRestreamApi.md#planrestreambuyv1) | **POST** /method/plan_restream | Buy restream tariff
*PlanRestreamApi* | [**planRestreamCheck2V1**](docs/PlanRestreamApi.md#planrestreamcheck2v1) | **GET** /method/plan_restream/check | Preview project restream tariff purchase
*PlanRestreamApi* | [**planRestreamGetDiscountV1**](docs/PlanRestreamApi.md#planrestreamgetdiscountv1) | **GET** /method/plan_restream/get_discount | Get discount restream
*PlanRestreamApi* | [**planRestreamListProjectV1**](docs/PlanRestreamApi.md#planrestreamlistprojectv1) | **GET** /method/plan_restream/list/project | Get list of restream tariffs for project
*PlanRestreamApi* | [**planRestreamListV1**](docs/PlanRestreamApi.md#planrestreamlistv1) | **GET** /method/plan_restream/list | Get list of restream tariffs
*PlanRestreamApi* | [**planRestreamRemoveV1**](docs/PlanRestreamApi.md#planrestreamremovev1) | **DELETE** /method/plan_restream | Cancel the next project restream tariff
*PlanRestreamApi* | [**planRestreamSetProlongationV1**](docs/PlanRestreamApi.md#planrestreamsetprolongationv1) | **POST** /method/plan_restream/prolongation | Set restream tariff auto prolongation
*PlanRestreamApi* | [**planRestreamTariffV1**](docs/PlanRestreamApi.md#planrestreamtariffv1) | **GET** /method/plan_restream | Get current and next project restream tariff
*PlanStorageApi* | [**planStorageBuyV1**](docs/PlanStorageApi.md#planstoragebuyv1) | **POST** /method/plan_storage | Buy storage tariff
*PlanStorageApi* | [**planStorageCancelV1**](docs/PlanStorageApi.md#planstoragecancelv1) | **DELETE** /method/plan_storage | Remove next tariff
*PlanStorageApi* | [**planStorageCheckV1**](docs/PlanStorageApi.md#planstoragecheckv1) | **GET** /method/plan_storage/check | Check storage tariff before buy
*PlanStorageApi* | [**planStorageGetDiscountV1**](docs/PlanStorageApi.md#planstoragegetdiscountv1) | **GET** /method/plan_storage/get_discount | Get discount of storage
*PlanStorageApi* | [**planStorageListV1**](docs/PlanStorageApi.md#planstoragelistv1) | **GET** /method/plan_storage/list | Get info for storage tariff
*PlanStorageApi* | [**planStorageSetProlongationV1**](docs/PlanStorageApi.md#planstoragesetprolongationv1) | **POST** /method/plan_storage/prolongation | Set storage tariff auto prolongation
*PlanStorageApi* | [**planStorageTariffV1**](docs/PlanStorageApi.md#planstoragetariffv1) | **GET** /method/plan_storage | Get current and next project storage tariff
*PlanTranscodingApi* | [**planTranscodingBuyV1**](docs/PlanTranscodingApi.md#plantranscodingbuyv1) | **POST** /method/plan_transcoding | Buy transcoder tariff
*PlanTranscodingApi* | [**planTranscodingCancelV1**](docs/PlanTranscodingApi.md#plantranscodingcancelv1) | **DELETE** /method/plan_transcoding | Cancel the next project transcoding tariff
*PlanTranscodingApi* | [**planTranscodingCheckV1**](docs/PlanTranscodingApi.md#plantranscodingcheckv1) | **GET** /method/plan_transcoding/check | Check transcoding tariff before buy
*PlanTranscodingApi* | [**planTranscodingGetDiscountV1**](docs/PlanTranscodingApi.md#plantranscodinggetdiscountv1) | **GET** /method/plan_transcoding/get_discount | Get discount transcoding
*PlanTranscodingApi* | [**planTranscodingListV1**](docs/PlanTranscodingApi.md#plantranscodinglistv1) | **GET** /method/plan_transcoding/list | Get list of transcoding tariffs
*PlanTranscodingApi* | [**planTranscodingSetProlongationV1**](docs/PlanTranscodingApi.md#plantranscodingsetprolongationv1) | **POST** /method/plan_transcoding/prolongation | Set transcoding tariff auto prolongation
*PlanTranscodingApi* | [**planTranscodingTariffV1**](docs/PlanTranscodingApi.md#plantranscodingtariffv1) | **GET** /method/plan_transcoding | Get current and next project transcoding tariff
*PlanWebinarApi* | [**siteBuyV1**](docs/PlanWebinarApi.md#sitebuyv1) | **POST** /method/plan_webinar | Buy webinar tariff
*PlanWebinarApi* | [**siteCancelV1**](docs/PlanWebinarApi.md#sitecancelv1) | **DELETE** /method/plan_webinar | Cancel the next project webinar tariff
*PlanWebinarApi* | [**siteCheckV1**](docs/PlanWebinarApi.md#sitecheckv1) | **GET** /method/plan_webinar/check | Check webinar tariff before buy
*PlanWebinarApi* | [**siteGetDiscountV1**](docs/PlanWebinarApi.md#sitegetdiscountv1) | **GET** /method/plan_webinar/get_discount | Get discount webinar
*PlanWebinarApi* | [**siteListV1**](docs/PlanWebinarApi.md#sitelistv1) | **GET** /method/plan_webinar/list | Get list of webinar tariffs
*PlanWebinarApi* | [**siteSetProlongationV1**](docs/PlanWebinarApi.md#sitesetprolongationv1) | **POST** /method/plan_webinar/prolongation | Set webinar tariff auto prolongation
*PlanWebinarApi* | [**siteTariffV1**](docs/PlanWebinarApi.md#sitetariffv1) | **GET** /method/plan_webinar | Get current and next project webinar tariff
*PlatformsApi* | [**platformCategoryDetailsGetCategoryDetailsV1**](docs/PlatformsApi.md#platformcategorydetailsgetcategorydetailsv1) | **GET** /method/platforms/category/details | Get a saved platform category by its external identifier
*PlatformsApi* | [**platformsAddAccountV1**](docs/PlatformsApi.md#platformsaddaccountv1) | **GET** /method/platforms/connect | Get url for start oauth
*PlatformsApi* | [**platformsAddAccountVkCommunityV1**](docs/PlatformsApi.md#platformsaddaccountvkcommunityv1) | **GET** /method/platforms/connect/vk-community | Get url for start oauth
*PlatformsApi* | [**platformsCallbackCommunityV1**](docs/PlatformsApi.md#platformscallbackcommunityv1) | **GET** /method/platforms/vk/callback-community | Internal request of auth
*PlatformsApi* | [**platformsCallbackV1**](docs/PlatformsApi.md#platformscallbackv1) | **GET** /method/platforms/{provider}/callback | Internal request of auth
*PlatformsApi* | [**platformsCallbackVkIdV1**](docs/PlatformsApi.md#platformscallbackvkidv1) | **GET** /method/platforms/vk-id/callback | Internal request of auth vk-id
*PlatformsApi* | [**platformsGetAccountsV1**](docs/PlatformsApi.md#platformsgetaccountsv1) | **GET** /method/platforms/accounts | Get accounts
*PlatformsApi* | [**platformsGetCategoryV1**](docs/PlatformsApi.md#platformsgetcategoryv1) | **GET** /method/platforms/category | Get category from the platform
*PlatformsApi* | [**platformsGetChannelsV1**](docs/PlatformsApi.md#platformsgetchannelsv1) | **GET** /method/platforms/account/channels | Get channels with accounts
*PlatformsApi* | [**platformsLogoutAccountV1**](docs/PlatformsApi.md#platformslogoutaccountv1) | **POST** /method/platforms/logout | Unavailable platform logout (not implemented)
*PlatformsApi* | [**platformsPlatformListV1**](docs/PlatformsApi.md#platformsplatformlistv1) | **GET** /method/platforms/list | Supported platforms
*PlatformsApi* | [**platformsRemoveAccountV1**](docs/PlatformsApi.md#platformsremoveaccountv1) | **POST** /method/platforms/account/remove | Remove account
*PlatformsApi* | [**platformsVkVideoLiveCategoryV1**](docs/PlatformsApi.md#platformsvkvideolivecategoryv1) | **GET** /method/platforms/category/vkvideolive | Search VK Video Live categories in the saved catalog
*PluginApi* | [**methodPluginCatalogV1**](docs/PluginApi.md#methodplugincatalogv1) | **GET** /method/plugin/list_catalog | List public or installed plugins for the selected project
*PluginApi* | [**methodPluginDeleteV1**](docs/PluginApi.md#methodplugindeletev1) | **DELETE** /method/plugin/delete | Uninstall a plugin belonging to the selected authorized project
*PluginApi* | [**methodPluginInstallV1**](docs/PluginApi.md#methodplugininstallv1) | **POST** /method/plugin/install | Install a visible plugin into the selected authorized project
*PluginApi* | [**methodPluginPrivateCatalogV1**](docs/PluginApi.md#methodpluginprivatecatalogv1) | **GET** /method/plugin/list_catalog_private | List private applications owned or administered by the authenticated account
*PluginApi* | [**methodPluginPrivateCountV1**](docs/PluginApi.md#methodpluginprivatecountv1) | **GET** /method/plugin/list_catalog_private_count | Count private applications accessible to the authenticated account
*PluginApi* | [**methodPluginRegenerateV1**](docs/PluginApi.md#methodpluginregeneratev1) | **POST** /method/plugin/regenerate_token | Rotate a selected project plugin installation credential
*PluginApi* | [**methodPluginReportV1**](docs/PluginApi.md#methodpluginreportv1) | **POST** /method/plugin/send_report | Send an application report from the selected authorized project
*PluginApi* | [**methodPluginReportsV1**](docs/PluginApi.md#methodpluginreportsv1) | **GET** /method/plugin/send_report_list | Read application reports as its owner or administrator
*PluginApi* | [**methodPluginViewV1**](docs/PluginApi.md#methodpluginviewv1) | **GET** /method/plugin/view | View a public or authorized private plugin for the selected project
*PolicyPageApi* | [**policyPageGetItemV1**](docs/PolicyPageApi.md#policypagegetitemv1) | **GET** /method/policy/get | Get policy page
*PolicyPageApi* | [**policyPageGetStructureV1**](docs/PolicyPageApi.md#policypagegetstructurev1) | **GET** /method/policy/structure | Get policy structure
*ProjectApi* | [**methodProjectManagementCreateV1**](docs/ProjectApi.md#methodprojectmanagementcreatev1) | **POST** /method/project | Create project
*ProjectApi* | [**methodProjectManagementDeleteV1**](docs/ProjectApi.md#methodprojectmanagementdeletev1) | **DELETE** /method/project | Delete project
*ProjectApi* | [**methodProjectManagementUpdateV1**](docs/ProjectApi.md#methodprojectmanagementupdatev1) | **PUT** /method/project | Update project
*ProjectApi* | [**methodProjectMeMeV1**](docs/ProjectApi.md#methodprojectmemev1) | **GET** /method/project/me | Get current user project
*ProjectApi* | [**methodResolveProjectV1**](docs/ProjectApi.md#methodresolveprojectv1) | **GET** /method/project/resolve | Find a project by its text ID or short code
*ProjectApi* | [**methodResolveUserV1**](docs/ProjectApi.md#methodresolveuserv1) | **GET** /method/account/resolve-user | Resolve an invitation recipient external ID
*ProjectApi* | [**userProjectChangeAccessV1**](docs/ProjectApi.md#userprojectchangeaccessv1) | **POST** /method/project/user/change_access | Change access user from project
*ProjectApi* | [**userProjectDelV1**](docs/ProjectApi.md#userprojectdelv1) | **POST** /method/project/user/del | Remove user from project
*ProjectApi* | [**userProjectDeleteMemberV1**](docs/ProjectApi.md#userprojectdeletememberv1) | **POST** /method/project/user/delete | Remove member from project
*ProjectApi* | [**userProjectGetProjectInfoV1**](docs/ProjectApi.md#userprojectgetprojectinfov1) | **GET** /method/project/get_project_info | Get project full info
*ProjectApi* | [**userProjectGetProjectV1**](docs/ProjectApi.md#userprojectgetprojectv1) | **GET** /method/project/get_project | Get a project by its external text code
*ProjectApi* | [**userProjectGetUserV1**](docs/ProjectApi.md#userprojectgetuserv1) | **GET** /method/project/get_user | Get a user by the external text code
*ProjectApi* | [**userProjectLeaveV1**](docs/ProjectApi.md#userprojectleavev1) | **POST** /method/project/user/leave | Leave project
*ProjectApi* | [**userProjectListAccessV1**](docs/ProjectApi.md#userprojectlistaccessv1) | **GET** /method/project/user/list | List of user in project
*ProjectApi* | [**userProjectListV1**](docs/ProjectApi.md#userprojectlistv1) | **GET** /method/project/list | List of project for current user
*ProjectApi* | [**userProjectSelectProjectV1**](docs/ProjectApi.md#userprojectselectprojectv1) | **GET** /method/project/select | Select user for project
*ProjectActivityApi* | [**methodProjectActivityListV1**](docs/ProjectActivityApi.md#methodprojectactivitylistv1) | **GET** /method/project_activity/list | Get localized project activity
*ProjectChannelApi* | [**projectChannelChangeAccessV1**](docs/ProjectChannelApi.md#projectchannelchangeaccessv1) | **POST** /method/channel/access/change | Change access for project in channel
*ProjectChannelApi* | [**projectChannelDelV1**](docs/ProjectChannelApi.md#projectchanneldelv1) | **POST** /method/channel/access/del | Remove access for project in channel
*ProjectChannelApi* | [**projectChannelListV1**](docs/ProjectChannelApi.md#projectchannellistv1) | **GET** /method/channel/access/list | Project channel list
*ProjectChannelApi* | [**projectChannelTransferOwnerV1**](docs/ProjectChannelApi.md#projectchanneltransferownerv1) | **POST** /method/channel/access/transfer_owner | Transfer owner for project in channel
*ProjectChannelInviteApi* | [**methodChannelInviteDetailsDetailsV1**](docs/ProjectChannelInviteApi.md#methodchannelinvitedetailsdetailsv1) | **GET** /method/channel_invite/details | Get outgoing channel invitation details
*ProjectChannelInviteApi* | [**projectChannelInviteAcceptForProjectV1**](docs/ProjectChannelInviteApi.md#projectchannelinviteacceptforprojectv1) | **POST** /method/channel_invite/accept_for_project | Accept channel invitation for selected project
*ProjectChannelInviteApi* | [**projectChannelInviteAcceptForSecretV1**](docs/ProjectChannelInviteApi.md#projectchannelinviteacceptforsecretv1) | **POST** /method/channel_invite/accept_for_secret | Accept channel invitation using a secret link
*ProjectChannelInviteApi* | [**projectChannelInviteAddByEmailV1**](docs/ProjectChannelInviteApi.md#projectchannelinviteaddbyemailv1) | **POST** /method/channel_invite/add_by_email | Add channel invite item for another user by email
*ProjectChannelInviteApi* | [**projectChannelInviteAddByIdV1**](docs/ProjectChannelInviteApi.md#projectchannelinviteaddbyidv1) | **POST** /method/channel_invite/add_by_id | Add channel invite item for another user by id
*ProjectChannelInviteApi* | [**projectChannelInviteDeclineForProjectV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitedeclineforprojectv1) | **POST** /method/channel_invite/decline_for_project | Decline channel invitation for selected project
*ProjectChannelInviteApi* | [**projectChannelInviteDeclineForSecretV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitedeclineforsecretv1) | **POST** /method/channel_invite/decline_for_secret | Decline channel invitation using a secret link
*ProjectChannelInviteApi* | [**projectChannelInviteDelV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitedelv1) | **POST** /method/channel_invite/del | Del channel invite item for my channel for another user
*ProjectChannelInviteApi* | [**projectChannelInviteGetForProjectV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitegetforprojectv1) | **GET** /method/channel_invite/get_for_project | Get invitation for channel
*ProjectChannelInviteApi* | [**projectChannelInviteGetForSecretV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitegetforsecretv1) | **GET** /method/channel_invite/get_for_secret | Get channel invitation using a secret link
*ProjectChannelInviteApi* | [**projectChannelInviteGetV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitegetv1) | **GET** /method/channel_invite/get | Get channel invite item for my channel for another user
*ProjectChannelInviteApi* | [**projectChannelInviteListV1**](docs/ProjectChannelInviteApi.md#projectchannelinvitelistv1) | **GET** /method/channel_invite/list | List of invites for channel in project
*ProjectHistoryApi* | [**projectHistoryListV1**](docs/ProjectHistoryApi.md#projecthistorylistv1) | **GET** /method/project_history/list | Get project history of actions
*ProjectInviteApi* | [**methodUserProjectInviteAcceptForProjectV1**](docs/ProjectInviteApi.md#methoduserprojectinviteacceptforprojectv1) | **POST** /method/project_invite/accept_for_project | Accept project invitation
*ProjectInviteApi* | [**methodUserProjectInviteAcceptForSecretV1**](docs/ProjectInviteApi.md#methoduserprojectinviteacceptforsecretv1) | **POST** /method/project_invite/accept_for_secret | Accept project invitation using a secret link
*ProjectInviteApi* | [**methodUserProjectInviteAddByEmailV1**](docs/ProjectInviteApi.md#methoduserprojectinviteaddbyemailv1) | **POST** /method/project_invite/add_by_email | Add project invite item for another user by email
*ProjectInviteApi* | [**methodUserProjectInviteAddByIdV1**](docs/ProjectInviteApi.md#methoduserprojectinviteaddbyidv1) | **POST** /method/project_invite/add_by_id | Add project invite item for another user by id
*ProjectInviteApi* | [**methodUserProjectInviteDeclineForProjectV1**](docs/ProjectInviteApi.md#methoduserprojectinvitedeclineforprojectv1) | **POST** /method/project_invite/decline_for_project | Decline project invitation
*ProjectInviteApi* | [**methodUserProjectInviteDeclineForSecretV1**](docs/ProjectInviteApi.md#methoduserprojectinvitedeclineforsecretv1) | **POST** /method/project_invite/decline_for_secret | Decline project invitation using a secret link
*ProjectInviteApi* | [**methodUserProjectInviteDelV1**](docs/ProjectInviteApi.md#methoduserprojectinvitedelv1) | **POST** /method/project_invite/del | Cancel a project invitation
*ProjectInviteApi* | [**methodUserProjectInviteGetForProjectV1**](docs/ProjectInviteApi.md#methoduserprojectinvitegetforprojectv1) | **GET** /method/project_invite/get_for_project | Get invitation for project
*ProjectInviteApi* | [**methodUserProjectInviteGetForSecretV1**](docs/ProjectInviteApi.md#methoduserprojectinvitegetforsecretv1) | **GET** /method/project_invite/get_for_secret | Get project invitation using a secret link
*ProjectInviteApi* | [**methodUserProjectInviteGetV1**](docs/ProjectInviteApi.md#methoduserprojectinvitegetv1) | **GET** /method/project_invite/get | Get project invite item for another user
*ProjectInviteApi* | [**methodUserProjectInviteListV1**](docs/ProjectInviteApi.md#methoduserprojectinvitelistv1) | **GET** /method/project_invite/list | List of invites for project
*PromoApi* | [**promoApplyV1**](docs/PromoApi.md#promoapplyv1) | **GET** /method/promo/apply | Apply code
*PromoApi* | [**promoCheckV1**](docs/PromoApi.md#promocheckv1) | **GET** /method/promo/check | Check code
*PullServersApi* | [**pullServersGetPullServersV1**](docs/PullServersApi.md#pullserversgetpullserversv1) | **GET** /method/pull-servers/list | Get pull servers
*ReferralsApi* | [**referralsTotalInfoV1**](docs/ReferralsApi.md#referralstotalinfov1) | **GET** /method/referrals/info | Get project referral statistics
*ReleaseApi* | [**methodDesktopAppReleasesV1**](docs/ReleaseApi.md#methoddesktopappreleasesv1) | **GET** /method/desktop-app-releases | Get stable desktop installers by platform
*ReleaseApi* | [**releaseAppCabinetV1**](docs/ReleaseApi.md#releaseappcabinetv1) | **GET** /method/release-app | Get current version app
*RtmpServerApi* | [**methodRtmpServerListLocationsUnauthorizedV1**](docs/RtmpServerApi.md#methodrtmpserverlistlocationsunauthorizedv1) | **GET** /method/rtmp_server/list_locations_unauthorized | Rtmp locations server list example for unauthorized
*RtmpServerApi* | [**rtmpServerGraphV1**](docs/RtmpServerApi.md#rtmpservergraphv1) | **GET** /method/rtmp_server/graph | Graph of rtmp servers
*RtmpServerApi* | [**rtmpServerListBaseV1**](docs/RtmpServerApi.md#rtmpserverlistbasev1) | **GET** /method/rtmp_server/base-list | List rtmp servers (base info)
*RtmpServerApi* | [**rtmpServerListV3**](docs/RtmpServerApi.md#rtmpserverlistv3) | **GET** /method/rtmp_server/list | List rtmp servers v3
*RtmpServerApi* | [**rtmpServerSrtLatencyV1**](docs/RtmpServerApi.md#rtmpserversrtlatencyv1) | **GET** /method/rtmp_server/srt-latency | Get recommended SRT latency by source and destination ip
*RtmpServerApi* | [**rtmpServerStateV1**](docs/RtmpServerApi.md#rtmpserverstatev1) | **GET** /method/rtmp_server/state | State of rtmp servers
*RtmpServerApi* | [**rtmpServerUpV1**](docs/RtmpServerApi.md#rtmpserverupv1) | **GET** /method/rtmp_server/up | State of rtmp servers
*SchedulerApi* | [**schedulerCreateV1**](docs/SchedulerApi.md#schedulercreatev1) | **POST** /method/scheduler | Create a project video schedule
*SchedulerApi* | [**schedulerDeleteV1**](docs/SchedulerApi.md#schedulerdeletev1) | **DELETE** /method/scheduler | Delete a non-expired project video schedule
*SchedulerApi* | [**schedulerGetV1**](docs/SchedulerApi.md#schedulergetv1) | **GET** /method/scheduler/get | Get a project video schedule by id
*SchedulerApi* | [**schedulerListV1**](docs/SchedulerApi.md#schedulerlistv1) | **GET** /method/scheduler | List non-expired project video schedules
*SchedulerApi* | [**schedulerStopV1**](docs/SchedulerApi.md#schedulerstopv1) | **POST** /method/scheduler/stop | Stop the active project video schedule
*SchedulerApi* | [**schedulerUpdateV1**](docs/SchedulerApi.md#schedulerupdatev1) | **PUT** /method/scheduler | Replace a future project video schedule
*SocialsApi* | [**socialsGetListV1**](docs/SocialsApi.md#socialsgetlistv1) | **GET** /method/socials/list | Social list for user
*StreamKeyApi* | [**streamKeysKeyV1**](docs/StreamKeyApi.md#streamkeyskeyv1) | **GET** /method/stream-keys | Get stream credentials
*StreamKeyApi* | [**streamKeysRotateV1**](docs/StreamKeyApi.md#streamkeysrotatev1) | **POST** /method/stream-keys/rotate | Rotate stream key
*StreamKeyApi* | [**streamKeysSetWaitV1**](docs/StreamKeyApi.md#streamkeyssetwaitv1) | **PUT** /method/stream-keys/wait | Update disconnect protection wait
*StreamKeyApi* | [**streamKeysUpdateRecordV1**](docs/StreamKeyApi.md#streamkeysupdaterecordv1) | **POST** /method/stream-keys/record | Update the stream recording preference (under development)
*StreamPullKeysApi* | [**streamPullKeysSiteCheckV1**](docs/StreamPullKeysApi.md#streampullkeyssitecheckv1) | **GET** /method/stream-pull-keys/check | Check key
*StreamPullKeysApi* | [**streamPullKeysSiteCreateV1**](docs/StreamPullKeysApi.md#streampullkeyssitecreatev1) | **POST** /method/stream-pull-keys | Create key
*StreamPullKeysApi* | [**streamPullKeysSiteGetV1**](docs/StreamPullKeysApi.md#streampullkeyssitegetv1) | **GET** /method/stream-pull-keys | List keys
*StreamPullKeysApi* | [**streamPullKeysSiteRemoveV1**](docs/StreamPullKeysApi.md#streampullkeyssiteremovev1) | **DELETE** /method/stream-pull-keys | Delete key
*StreamPullKeysApi* | [**streamPullKeysSiteUpdateV1**](docs/StreamPullKeysApi.md#streampullkeyssiteupdatev1) | **PUT** /method/stream-pull-keys | Update key
*TransactionsApi* | [**transactionsListV1**](docs/TransactionsApi.md#transactionslistv1) | **GET** /method/transactions/list | Transaction list for frontend
*TranscodersApi* | [**transcodersAddV1**](docs/TranscodersApi.md#transcodersaddv1) | **POST** /method/transcoder/add | Transcoder create
*TranscodersApi* | [**transcodersDeleteV1**](docs/TranscodersApi.md#transcodersdeletev1) | **POST** /method/transcoder/delete | Transcoder delete
*TranscodersApi* | [**transcodersListV1**](docs/TranscodersApi.md#transcoderslistv1) | **GET** /method/transcoder/list | List of transcoder
*TranscodersApi* | [**transcodersResetDelayV1**](docs/TranscodersApi.md#transcodersresetdelayv1) | **POST** /method/transcoder/reset-delay | Reset delay
*TranscodersApi* | [**transcodersStopV1**](docs/TranscodersApi.md#transcodersstopv1) | **POST** /method/transcoder/stop | Transcoder stop
*TranscodersApi* | [**transcodersUpdateV1**](docs/TranscodersApi.md#transcodersupdatev1) | **POST** /method/transcoder/update | Transcoder update
*UsersApi* | [**userGetProfileV1**](docs/UsersApi.md#usergetprofilev1) | **GET** /method/users/profile | Get user profile
*UsersApi* | [**userUpdateProfileV1**](docs/UsersApi.md#userupdateprofilev1) | **POST** /method/users/profile | Update profile
*VideoApi* | [**videoSiteCreateV1**](docs/VideoApi.md#videositecreatev1) | **GET** /method/video/create | Create upload session
*VideoApi* | [**videoSiteDeleteV1**](docs/VideoApi.md#videositedeletev1) | **POST** /method/video/delete | Delete video
*VideoApi* | [**videoSiteDownloadV1**](docs/VideoApi.md#videositedownloadv1) | **GET** /method/video/download | Get video download link
*VideoApi* | [**videoSiteGetV1**](docs/VideoApi.md#videositegetv1) | **GET** /method/video/get | Get video by id
*VideoApi* | [**videoSiteLimitsV1**](docs/VideoApi.md#videositelimitsv1) | **GET** /method/video/limits | Get video limits
*VideoApi* | [**videoSiteListV1**](docs/VideoApi.md#videositelistv1) | **GET** /method/video/list | List videos
*VideoApi* | [**videoSiteProgressChannelV1**](docs/VideoApi.md#videositeprogresschannelv1) | **GET** /method/video/progress-channel | Get upload progress channels for centrifuge
*VideoApi* | [**videoSiteUpdateV1**](docs/VideoApi.md#videositeupdatev1) | **POST** /method/video/update | Update video
*WebinarApi* | [**webinarRoomSiteCreateV1**](docs/WebinarApi.md#webinarroomsitecreatev1) | **POST** /method/webinar/room/create | Create a new webinar room
*WebinarApi* | [**webinarRoomSiteDeleteV1**](docs/WebinarApi.md#webinarroomsitedeletev1) | **POST** /method/webinar/room/delete | Delete a webinar room
*WebinarApi* | [**webinarRoomSiteGetSyncV1**](docs/WebinarApi.md#webinarroomsitegetsyncv1) | **GET** /method/webinar/room/sync | Get sync a webinar room
*WebinarApi* | [**webinarRoomSiteJoinAnonymousV1**](docs/WebinarApi.md#webinarroomsitejoinanonymousv1) | **POST** /method/webinar/room/join-anonymous | join in room anonymously
*WebinarApi* | [**webinarRoomSiteJoinV1**](docs/WebinarApi.md#webinarroomsitejoinv1) | **POST** /method/webinar/room/join | join in room
*WebinarApi* | [**webinarRoomSiteListV1**](docs/WebinarApi.md#webinarroomsitelistv1) | **GET** /method/webinar/room/list | List of webinar rooms
*WebinarApi* | [**webinarRoomSitePreJoinV1**](docs/WebinarApi.md#webinarroomsiteprejoinv1) | **GET** /method/webinar/room/pre-join | Pre-join in room
*WebinarApi* | [**webinarRoomSiteSyncV1**](docs/WebinarApi.md#webinarroomsitesyncv1) | **POST** /method/webinar/room/sync | Sync a webinar room
*WebinarApi* | [**webinarRoomSiteUpdateV1**](docs/WebinarApi.md#webinarroomsiteupdatev1) | **POST** /method/webinar/room/update | Update a webinar room
*WebinarApi* | [**webinarStreamSiteCreateV1**](docs/WebinarApi.md#webinarstreamsitecreatev1) | **POST** /method/webinar/stream/start | Start a webinar stream
*WebinarApi* | [**webinarStreamSiteGetSettingStreamV1**](docs/WebinarApi.md#webinarstreamsitegetsettingstreamv1) | **GET** /method/webinar/stream/setting | Get setting a webinar stream
*WebinarApi* | [**webinarStreamSiteLastV1**](docs/WebinarApi.md#webinarstreamsitelastv1) | **GET** /method/webinar/stream/last | Get last webinar stream
*WebinarApi* | [**webinarStreamSitePauseV1**](docs/WebinarApi.md#webinarstreamsitepausev1) | **POST** /method/webinar/stream/pause | Pause a webinar stream
*WebinarApi* | [**webinarStreamSitePlayV1**](docs/WebinarApi.md#webinarstreamsiteplayv1) | **POST** /method/webinar/stream/play | Resume an active webinar stream
*WebinarApi* | [**webinarStreamSiteSettingStreamV1**](docs/WebinarApi.md#webinarstreamsitesettingstreamv1) | **POST** /method/webinar/stream/setting | Setting a webinar stream
*WebinarApi* | [**webinarStreamSiteUpdateV1**](docs/WebinarApi.md#webinarstreamsiteupdatev1) | **POST** /method/webinar/stream/stop | Stop a webinar stream


### Documentation For Models

 - [AccessChangedResponse](docs/AccessChangedResponse.md)
 - [ActivityChangedPayload](docs/ActivityChangedPayload.md)
 - [ActivityChangedResponse](docs/ActivityChangedResponse.md)
 - [ActivityRecordedPayload](docs/ActivityRecordedPayload.md)
 - [ActivityRecordedResponse](docs/ActivityRecordedResponse.md)
 - [ActivityScopeResponse](docs/ActivityScopeResponse.md)
 - [ActivitySubjectResponse](docs/ActivitySubjectResponse.md)
 - [AddChannelResponse](docs/AddChannelResponse.md)
 - [AuthCentrifugoChannelResponse](docs/AuthCentrifugoChannelResponse.md)
 - [AuthCentrifugoConnectResponse](docs/AuthCentrifugoConnectResponse.md)
 - [BalanceForPayResponse](docs/BalanceForPayResponse.md)
 - [BizonDto](docs/BizonDto.md)
 - [BlogPageSiteResponse](docs/BlogPageSiteResponse.md)
 - [BlogPageSiteResponseId](docs/BlogPageSiteResponseId.md)
 - [BoostyDto](docs/BoostyDto.md)
 - [BroadcastCredentialsIngress](docs/BroadcastCredentialsIngress.md)
 - [BroadcastLiveStatusRestream](docs/BroadcastLiveStatusRestream.md)
 - [BroadcastMessageItemResponse](docs/BroadcastMessageItemResponse.md)
 - [BroadcastMessageItemResponseEntitiesInner](docs/BroadcastMessageItemResponseEntitiesInner.md)
 - [BroadcastMessageItemResponseEntitiesInnerOneOf](docs/BroadcastMessageItemResponseEntitiesInnerOneOf.md)
 - [BroadcastMessageItemResponseEntitiesInnerOneOf1](docs/BroadcastMessageItemResponseEntitiesInnerOneOf1.md)
 - [BroadcastMessageListResponse](docs/BroadcastMessageListResponse.md)
 - [BroadcastRestreamCentrifugeItemV2](docs/BroadcastRestreamCentrifugeItemV2.md)
 - [BroadcastRestreamInfoItem](docs/BroadcastRestreamInfoItem.md)
 - [BroadcastStatusV1200Response](docs/BroadcastStatusV1200Response.md)
 - [CancelMediaServiceFileRequest](docs/CancelMediaServiceFileRequest.md)
 - [CategoryItemResponse](docs/CategoryItemResponse.md)
 - [CategoryListResponse](docs/CategoryListResponse.md)
 - [CategorySubListItemResponse](docs/CategorySubListItemResponse.md)
 - [CentrifugoAppEventResponseUnion](docs/CentrifugoAppEventResponseUnion.md)
 - [CentrifugoAppReleasePayload](docs/CentrifugoAppReleasePayload.md)
 - [CentrifugoAppReleaseResponse](docs/CentrifugoAppReleaseResponse.md)
 - [CentrifugoBroadcastEventResponseUnion](docs/CentrifugoBroadcastEventResponseUnion.md)
 - [CentrifugoBroadcastEventResponseUnionEvent](docs/CentrifugoBroadcastEventResponseUnionEvent.md)
 - [CentrifugoBroadcastRestreamStartedPayload](docs/CentrifugoBroadcastRestreamStartedPayload.md)
 - [CentrifugoBroadcastRestreamStartedResponse](docs/CentrifugoBroadcastRestreamStartedResponse.md)
 - [CentrifugoBroadcastRestreamStoppedResponse](docs/CentrifugoBroadcastRestreamStoppedResponse.md)
 - [CentrifugoBroadcastViewsResponse](docs/CentrifugoBroadcastViewsResponse.md)
 - [CentrifugoChannelCatalogItemResponse](docs/CentrifugoChannelCatalogItemResponse.md)
 - [CentrifugoChannelConnectionsPayload](docs/CentrifugoChannelConnectionsPayload.md)
 - [CentrifugoChannelConnectionsResponse](docs/CentrifugoChannelConnectionsResponse.md)
 - [CentrifugoChannelEventResponseUnion](docs/CentrifugoChannelEventResponseUnion.md)
 - [CentrifugoChannelEventResponseUnionEvent](docs/CentrifugoChannelEventResponseUnionEvent.md)
 - [CentrifugoChannelStartedPayload](docs/CentrifugoChannelStartedPayload.md)
 - [CentrifugoChannelStartedResponse](docs/CentrifugoChannelStartedResponse.md)
 - [CentrifugoChannelStartedUser](docs/CentrifugoChannelStartedUser.md)
 - [CentrifugoChannelStatusPayload](docs/CentrifugoChannelStatusPayload.md)
 - [CentrifugoChannelStatusResponse](docs/CentrifugoChannelStatusResponse.md)
 - [CentrifugoChannelStoppedPayload](docs/CentrifugoChannelStoppedPayload.md)
 - [CentrifugoChannelStoppedResponse](docs/CentrifugoChannelStoppedResponse.md)
 - [CentrifugoChannelsCatalogResponse](docs/CentrifugoChannelsCatalogResponse.md)
 - [CentrifugoPaymentUpdatePayload](docs/CentrifugoPaymentUpdatePayload.md)
 - [CentrifugoPaymentUpdateResponse](docs/CentrifugoPaymentUpdateResponse.md)
 - [CentrifugoProjectEventResponseUnion](docs/CentrifugoProjectEventResponseUnion.md)
 - [CentrifugoProjectEventResponseUnionEvent](docs/CentrifugoProjectEventResponseUnionEvent.md)
 - [CentrifugoProjectImportantEventPayload](docs/CentrifugoProjectImportantEventPayload.md)
 - [CentrifugoProjectImportantEventResponse](docs/CentrifugoProjectImportantEventResponse.md)
 - [CentrifugoProjectNotificationResponse](docs/CentrifugoProjectNotificationResponse.md)
 - [CentrifugoProjectUpdateResponse](docs/CentrifugoProjectUpdateResponse.md)
 - [CentrifugoRestreamStatsUpdatedResponse](docs/CentrifugoRestreamStatsUpdatedResponse.md)
 - [CentrifugoRestreamUrlUpdatedResponse](docs/CentrifugoRestreamUrlUpdatedResponse.md)
 - [CentrifugoStreamStartPayload](docs/CentrifugoStreamStartPayload.md)
 - [CentrifugoStreamStartResponse](docs/CentrifugoStreamStartResponse.md)
 - [CentrifugoStreamStopPayload](docs/CentrifugoStreamStopPayload.md)
 - [CentrifugoStreamStopResponse](docs/CentrifugoStreamStopResponse.md)
 - [CentrifugoTemplateEventResponseUnion](docs/CentrifugoTemplateEventResponseUnion.md)
 - [CentrifugoWidgetTemplatePayloadResponse](docs/CentrifugoWidgetTemplatePayloadResponse.md)
 - [ChannelCategoryInfoDto](docs/ChannelCategoryInfoDto.md)
 - [ChannelDefaultInfoDto](docs/ChannelDefaultInfoDto.md)
 - [ChannelOkInfoDto](docs/ChannelOkInfoDto.md)
 - [ChannelPlayListInfoDto](docs/ChannelPlayListInfoDto.md)
 - [ChannelProviderAccountDto](docs/ChannelProviderAccountDto.md)
 - [ChannelProviderConnectionDto](docs/ChannelProviderConnectionDto.md)
 - [ChannelTrovoInfoDto](docs/ChannelTrovoInfoDto.md)
 - [ChannelTwitchInfoDto](docs/ChannelTwitchInfoDto.md)
 - [ChannelVkCategoryInfoDto](docs/ChannelVkCategoryInfoDto.md)
 - [ChannelVkInfoDto](docs/ChannelVkInfoDto.md)
 - [ChannelVkVideoLiveCategoryInfoDto](docs/ChannelVkVideoLiveCategoryInfoDto.md)
 - [ChannelVkVideoLiveInfoDto](docs/ChannelVkVideoLiveInfoDto.md)
 - [ChannelYoutubeInfoDto](docs/ChannelYoutubeInfoDto.md)
 - [CheckPullKeyResponse](docs/CheckPullKeyResponse.md)
 - [CodeAppAuthResponse](docs/CodeAppAuthResponse.md)
 - [CountriesListMetaResponse](docs/CountriesListMetaResponse.md)
 - [CountriesListResponse](docs/CountriesListResponse.md)
 - [CountryItem](docs/CountryItem.md)
 - [CountryListItemResponse](docs/CountryListItemResponse.md)
 - [CountryNameResponse](docs/CountryNameResponse.md)
 - [CreatePullKeyRequest](docs/CreatePullKeyRequest.md)
 - [CreatePullKeyResponse](docs/CreatePullKeyResponse.md)
 - [CreateSchedulerRequest](docs/CreateSchedulerRequest.md)
 - [CreateSchedulerResponse](docs/CreateSchedulerResponse.md)
 - [CustomDto](docs/CustomDto.md)
 - [DedicatedServerResponse](docs/DedicatedServerResponse.md)
 - [DedicatedServerStatusHistoryItemResponse](docs/DedicatedServerStatusHistoryItemResponse.md)
 - [DedicatedServerUrlValueResponse](docs/DedicatedServerUrlValueResponse.md)
 - [DedicatedServerUrlsResponse](docs/DedicatedServerUrlsResponse.md)
 - [DeleteChannelDto](docs/DeleteChannelDto.md)
 - [DeleteMediaServiceFileRequest](docs/DeleteMediaServiceFileRequest.md)
 - [DesktopAppDownloadResponse](docs/DesktopAppDownloadResponse.md)
 - [DesktopAppPlatformResponse](docs/DesktopAppPlatformResponse.md)
 - [DesktopAppReleasesResponse](docs/DesktopAppReleasesResponse.md)
 - [DisconnectPlannedProviderRequest](docs/DisconnectPlannedProviderRequest.md)
 - [DouyuDto](docs/DouyuDto.md)
 - [ErrorData](docs/ErrorData.md)
 - [ErrorDataData](docs/ErrorDataData.md)
 - [ErrorDataName](docs/ErrorDataName.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [FbDto](docs/FbDto.md)
 - [Fc2liveDto](docs/Fc2liveDto.md)
 - [GetAccountChannelsAccountItem](docs/GetAccountChannelsAccountItem.md)
 - [GetAccountChannelsItem](docs/GetAccountChannelsItem.md)
 - [GetAccountChannelsResponse](docs/GetAccountChannelsResponse.md)
 - [GetAccountsResponse](docs/GetAccountsResponse.md)
 - [GetAccountsResponseItem](docs/GetAccountsResponseItem.md)
 - [GetBlogPageResponse](docs/GetBlogPageResponse.md)
 - [GetHelpPageResponse](docs/GetHelpPageResponse.md)
 - [GetMediaServiceFileResponse](docs/GetMediaServiceFileResponse.md)
 - [GetPaySettingResponseV3](docs/GetPaySettingResponseV3.md)
 - [GetPolicyStructure](docs/GetPolicyStructure.md)
 - [GetPolicyStructureDto](docs/GetPolicyStructureDto.md)
 - [GetShortChannelItem](docs/GetShortChannelItem.md)
 - [GetStreamKeyResponse](docs/GetStreamKeyResponse.md)
 - [GetVersionAppResponse](docs/GetVersionAppResponse.md)
 - [GetcourseDto](docs/GetcourseDto.md)
 - [GoodgameDto](docs/GoodgameDto.md)
 - [HelpPageResponse](docs/HelpPageResponse.md)
 - [HuyaDto](docs/HuyaDto.md)
 - [InstagramDto](docs/InstagramDto.md)
 - [IntegrationAccountListResponse](docs/IntegrationAccountListResponse.md)
 - [IntegrationAccountResponse](docs/IntegrationAccountResponse.md)
 - [IntegrationAdministratorSiteResponse](docs/IntegrationAdministratorSiteResponse.md)
 - [IntegrationModerateSiteResponse](docs/IntegrationModerateSiteResponse.md)
 - [IntegrationScopeItem](docs/IntegrationScopeItem.md)
 - [IntegrationScopeSiteResponse](docs/IntegrationScopeSiteResponse.md)
 - [IntegrationTemplateWidgetGetResponse](docs/IntegrationTemplateWidgetGetResponse.md)
 - [InternalNotifyTypeAction](docs/InternalNotifyTypeAction.md)
 - [InternalNotifyTypeActionText](docs/InternalNotifyTypeActionText.md)
 - [InternalNotifyTypeText](docs/InternalNotifyTypeText.md)
 - [KickDto](docs/KickDto.md)
 - [KinescopeDto](docs/KinescopeDto.md)
 - [LinkedinDto](docs/LinkedinDto.md)
 - [ListMediaServiceFilesItem](docs/ListMediaServiceFilesItem.md)
 - [ListMediaServiceFilesResponse](docs/ListMediaServiceFilesResponse.md)
 - [ListOfCategoryItemResponse](docs/ListOfCategoryItemResponse.md)
 - [ListSchedulerResponse](docs/ListSchedulerResponse.md)
 - [ListVideoResponse](docs/ListVideoResponse.md)
 - [LiveRestreamCentrifugeItemV2](docs/LiveRestreamCentrifugeItemV2.md)
 - [LiveRestreamInfoItem](docs/LiveRestreamInfoItem.md)
 - [MediaServiceFilesStatus](docs/MediaServiceFilesStatus.md)
 - [MessageResponseDto](docs/MessageResponseDto.md)
 - [MessageRestreamResponseDto](docs/MessageRestreamResponseDto.md)
 - [MethodBroadcastRestreamItemResponse](docs/MethodBroadcastRestreamItemResponse.md)
 - [MethodBroadcastRestreamsResponse](docs/MethodBroadcastRestreamsResponse.md)
 - [MethodChannelStatusRequest](docs/MethodChannelStatusRequest.md)
 - [MethodChatHistoryResponse](docs/MethodChatHistoryResponse.md)
 - [MethodChatSendMessageRequestDto](docs/MethodChatSendMessageRequestDto.md)
 - [MethodCreateDedicatedServerRequest](docs/MethodCreateDedicatedServerRequest.md)
 - [MethodCurrentBroadcastResponse](docs/MethodCurrentBroadcastResponse.md)
 - [MethodExecuteNotifyActionRequest](docs/MethodExecuteNotifyActionRequest.md)
 - [MethodIntegrationAccessAddRequest](docs/MethodIntegrationAccessAddRequest.md)
 - [MethodIntegrationAccessListResponse](docs/MethodIntegrationAccessListResponse.md)
 - [MethodIntegrationAccessResponse](docs/MethodIntegrationAccessResponse.md)
 - [MethodIntegrationAddRequest](docs/MethodIntegrationAddRequest.md)
 - [MethodIntegrationAdministratorAddRequest](docs/MethodIntegrationAdministratorAddRequest.md)
 - [MethodIntegrationAdministratorResponse](docs/MethodIntegrationAdministratorResponse.md)
 - [MethodIntegrationAdministratorTransferRequest](docs/MethodIntegrationAdministratorTransferRequest.md)
 - [MethodIntegrationAdministratorsResponse](docs/MethodIntegrationAdministratorsResponse.md)
 - [MethodIntegrationCreateResponse](docs/MethodIntegrationCreateResponse.md)
 - [MethodIntegrationGetRequest](docs/MethodIntegrationGetRequest.md)
 - [MethodIntegrationInviteAddRequest](docs/MethodIntegrationInviteAddRequest.md)
 - [MethodIntegrationInviteDeleteRequest](docs/MethodIntegrationInviteDeleteRequest.md)
 - [MethodIntegrationInviteResponse](docs/MethodIntegrationInviteResponse.md)
 - [MethodIntegrationInviteUserResponse](docs/MethodIntegrationInviteUserResponse.md)
 - [MethodIntegrationInvitesResponse](docs/MethodIntegrationInvitesResponse.md)
 - [MethodIntegrationListResponse](docs/MethodIntegrationListResponse.md)
 - [MethodIntegrationResponse](docs/MethodIntegrationResponse.md)
 - [MethodIntegrationUpdateDesignRequest](docs/MethodIntegrationUpdateDesignRequest.md)
 - [MethodIntegrationUpdateInfoRequest](docs/MethodIntegrationUpdateInfoRequest.md)
 - [MethodIntegrationUpdateSettingsRequest](docs/MethodIntegrationUpdateSettingsRequest.md)
 - [MethodIntegrationWebhookAddRequest](docs/MethodIntegrationWebhookAddRequest.md)
 - [MethodIntegrationWebhookCreateResponse](docs/MethodIntegrationWebhookCreateResponse.md)
 - [MethodIntegrationWebhookListResponse](docs/MethodIntegrationWebhookListResponse.md)
 - [MethodIntegrationWebhookResponse](docs/MethodIntegrationWebhookResponse.md)
 - [MethodIntegrationWebhookUpdateRequest](docs/MethodIntegrationWebhookUpdateRequest.md)
 - [MethodPluginCatalogResponse](docs/MethodPluginCatalogResponse.md)
 - [MethodPluginInstallResponse](docs/MethodPluginInstallResponse.md)
 - [MethodPluginInstallationRequest](docs/MethodPluginInstallationRequest.md)
 - [MethodPluginItemResponse](docs/MethodPluginItemResponse.md)
 - [MethodPluginRegenerateTokenResponse](docs/MethodPluginRegenerateTokenResponse.md)
 - [MethodPluginReportRequest](docs/MethodPluginReportRequest.md)
 - [MethodPluginReportResponse](docs/MethodPluginReportResponse.md)
 - [MethodPluginReportsResponse](docs/MethodPluginReportsResponse.md)
 - [MethodPluginViewRequest](docs/MethodPluginViewRequest.md)
 - [MethodPluginViewResponse](docs/MethodPluginViewResponse.md)
 - [MethodResolveProjectResponse](docs/MethodResolveProjectResponse.md)
 - [MethodResolveUserResponse](docs/MethodResolveUserResponse.md)
 - [MethodSetStatusChannelRequest](docs/MethodSetStatusChannelRequest.md)
 - [MethodSrtDto](docs/MethodSrtDto.md)
 - [MethodTemplateAddRequest](docs/MethodTemplateAddRequest.md)
 - [MethodTemplateCreateResponse](docs/MethodTemplateCreateResponse.md)
 - [MethodTemplateGetRequest](docs/MethodTemplateGetRequest.md)
 - [MethodTemplateListResponse](docs/MethodTemplateListResponse.md)
 - [MethodTemplateResponse](docs/MethodTemplateResponse.md)
 - [MethodTemplateWidgetSetRequest](docs/MethodTemplateWidgetSetRequest.md)
 - [MethodUserProjectInviteAddByEmailRequest](docs/MethodUserProjectInviteAddByEmailRequest.md)
 - [MethodUserProjectInviteAddByIdRequest](docs/MethodUserProjectInviteAddByIdRequest.md)
 - [MethodUserProjectInviteDelRequest](docs/MethodUserProjectInviteDelRequest.md)
 - [MethodUserProjectInviteForUserAcceptRequest](docs/MethodUserProjectInviteForUserAcceptRequest.md)
 - [MethodUserProjectInviteForUserDeclineRequest](docs/MethodUserProjectInviteForUserDeclineRequest.md)
 - [MethodUserProjectInviteSecretAcceptRequest](docs/MethodUserProjectInviteSecretAcceptRequest.md)
 - [MethodUserProjectInviteSecretDeclineRequest](docs/MethodUserProjectInviteSecretDeclineRequest.md)
 - [MoneyFlowBalanceTypeValuesResponse](docs/MoneyFlowBalanceTypeValuesResponse.md)
 - [MoneyFlowDetails](docs/MoneyFlowDetails.md)
 - [MoneyFlowPaymentDetails](docs/MoneyFlowPaymentDetails.md)
 - [MoneyFlowPayoutDetails](docs/MoneyFlowPayoutDetails.md)
 - [MoneyFlowRefundDetails](docs/MoneyFlowRefundDetails.md)
 - [MoneyFlowResponse](docs/MoneyFlowResponse.md)
 - [NavertvDto](docs/NavertvDto.md)
 - [NimotvDto](docs/NimotvDto.md)
 - [NonoliveDto](docs/NonoliveDto.md)
 - [NotifyHistory](docs/NotifyHistory.md)
 - [NotifyHistoryAction](docs/NotifyHistoryAction.md)
 - [NotifyHistoryChannelMobile](docs/NotifyHistoryChannelMobile.md)
 - [NotifyHistoryChannelTelegram](docs/NotifyHistoryChannelTelegram.md)
 - [NotifyHistorySiteResponse](docs/NotifyHistorySiteResponse.md)
 - [NotifyHistoryStatusUserResponse](docs/NotifyHistoryStatusUserResponse.md)
 - [NotifyUserChannels](docs/NotifyUserChannels.md)
 - [NotifyUserRelation](docs/NotifyUserRelation.md)
 - [OkDto](docs/OkDto.md)
 - [PaginatedBlogPageSiteResponse](docs/PaginatedBlogPageSiteResponse.md)
 - [PaginatedBlogPageTagResponse](docs/PaginatedBlogPageTagResponse.md)
 - [PaginatedHelpPageResponse](docs/PaginatedHelpPageResponse.md)
 - [PaginatedMoneyFlowResponse](docs/PaginatedMoneyFlowResponse.md)
 - [PaginatedProjectHistoryResponse](docs/PaginatedProjectHistoryResponse.md)
 - [PaginatedResponseOfNotifyHistorySiteResponse](docs/PaginatedResponseOfNotifyHistorySiteResponse.md)
 - [PaginatedTransactionResponse](docs/PaginatedTransactionResponse.md)
 - [PaginatedUserProjectResponse](docs/PaginatedUserProjectResponse.md)
 - [PayCheckCountryResponse](docs/PayCheckCountryResponse.md)
 - [PayRedirectUrlDto](docs/PayRedirectUrlDto.md)
 - [PaySettingEnBodyDto](docs/PaySettingEnBodyDto.md)
 - [PaySettingResponseV3](docs/PaySettingResponseV3.md)
 - [PaySettingRuBodyDto](docs/PaySettingRuBodyDto.md)
 - [PaySettingSetSettingV1Request](docs/PaySettingSetSettingV1Request.md)
 - [PaySystemListResponse](docs/PaySystemListResponse.md)
 - [PaySystemsResponse](docs/PaySystemsResponse.md)
 - [PaymentCreateRequestRestreamBodyDto](docs/PaymentCreateRequestRestreamBodyDto.md)
 - [PaymentCreateRequestStorageBodyDto](docs/PaymentCreateRequestStorageBodyDto.md)
 - [PaymentCreateRequestTopUpBodyDto](docs/PaymentCreateRequestTopUpBodyDto.md)
 - [PaymentCreateRequestTranscoderBodyDto](docs/PaymentCreateRequestTranscoderBodyDto.md)
 - [PaymentCreateRequestWebinarBodyDto](docs/PaymentCreateRequestWebinarBodyDto.md)
 - [PaymentCreateResponse](docs/PaymentCreateResponse.md)
 - [PaymentCreateV1Request](docs/PaymentCreateV1Request.md)
 - [PaymentCreateV1RequestOneOf](docs/PaymentCreateV1RequestOneOf.md)
 - [PaymentCreateV1RequestOneOf1](docs/PaymentCreateV1RequestOneOf1.md)
 - [PaymentCreateV1RequestOneOf2](docs/PaymentCreateV1RequestOneOf2.md)
 - [PaymentCreateV1RequestOneOf3](docs/PaymentCreateV1RequestOneOf3.md)
 - [PaymentCreateV1RequestOneOf4](docs/PaymentCreateV1RequestOneOf4.md)
 - [PaymentStatusResponse](docs/PaymentStatusResponse.md)
 - [PayoutCreateRequestBodyDto](docs/PayoutCreateRequestBodyDto.md)
 - [PayoutSystemAccountListItemResponse](docs/PayoutSystemAccountListItemResponse.md)
 - [PayoutSystemAccountListResponse](docs/PayoutSystemAccountListResponse.md)
 - [PlanRefund](docs/PlanRefund.md)
 - [PlanRestreamBeforeItem](docs/PlanRestreamBeforeItem.md)
 - [PlanRestreamCheckV2Response](docs/PlanRestreamCheckV2Response.md)
 - [PlanRestreamCurrentItem](docs/PlanRestreamCurrentItem.md)
 - [PlanRestreamDiscountResponse](docs/PlanRestreamDiscountResponse.md)
 - [PlanRestreamFeatureItem](docs/PlanRestreamFeatureItem.md)
 - [PlanRestreamFeatureItemV2](docs/PlanRestreamFeatureItemV2.md)
 - [PlanRestreamFeatureItemV2Value](docs/PlanRestreamFeatureItemV2Value.md)
 - [PlanRestreamFeatureListResponse](docs/PlanRestreamFeatureListResponse.md)
 - [PlanRestreamForProject](docs/PlanRestreamForProject.md)
 - [PlanRestreamForProjectV2](docs/PlanRestreamForProjectV2.md)
 - [PlanRestreamItem](docs/PlanRestreamItem.md)
 - [PlanRestreamNextItem](docs/PlanRestreamNextItem.md)
 - [PlanRestreamPrice](docs/PlanRestreamPrice.md)
 - [PlanRestreamProjectResponse](docs/PlanRestreamProjectResponse.md)
 - [PlanRestreamProjectResponseDto](docs/PlanRestreamProjectResponseDto.md)
 - [PlanRestreamResponse](docs/PlanRestreamResponse.md)
 - [PlanRestreamResponseDto](docs/PlanRestreamResponseDto.md)
 - [PlanStorageCheckResponse](docs/PlanStorageCheckResponse.md)
 - [PlanStorageDiscountResponse](docs/PlanStorageDiscountResponse.md)
 - [PlanStorageForProject](docs/PlanStorageForProject.md)
 - [PlanStorageItem](docs/PlanStorageItem.md)
 - [PlanStorageResponse](docs/PlanStorageResponse.md)
 - [PlanStorageResponseDto](docs/PlanStorageResponseDto.md)
 - [PlanTranscoding2UserItemResponse](docs/PlanTranscoding2UserItemResponse.md)
 - [PlanTranscodingCheckResponse](docs/PlanTranscodingCheckResponse.md)
 - [PlanTranscodingDiscountResponse](docs/PlanTranscodingDiscountResponse.md)
 - [PlanTranscodingForProject](docs/PlanTranscodingForProject.md)
 - [PlanTranscodingItem](docs/PlanTranscodingItem.md)
 - [PlanTranscodingResponse](docs/PlanTranscodingResponse.md)
 - [PlanTranscodingResponseDto](docs/PlanTranscodingResponseDto.md)
 - [PlanWebinar2UserItemResponse](docs/PlanWebinar2UserItemResponse.md)
 - [PlanWebinarCheckV2Response](docs/PlanWebinarCheckV2Response.md)
 - [PlanWebinarDiscountResponse](docs/PlanWebinarDiscountResponse.md)
 - [PlanWebinarForProject](docs/PlanWebinarForProject.md)
 - [PlanWebinarItem](docs/PlanWebinarItem.md)
 - [PlanWebinarResponse](docs/PlanWebinarResponse.md)
 - [PlanWebinarResponseDto](docs/PlanWebinarResponseDto.md)
 - [PlannedItemResponse](docs/PlannedItemResponse.md)
 - [PlannedListResponse](docs/PlannedListResponse.md)
 - [PlatformCategoryDetailsResponse](docs/PlatformCategoryDetailsResponse.md)
 - [PlatformCategoryNotFoundError](docs/PlatformCategoryNotFoundError.md)
 - [PlatformCategoryNotFoundResponse](docs/PlatformCategoryNotFoundResponse.md)
 - [PlatformsSupportedItem](docs/PlatformsSupportedItem.md)
 - [PlaylistItemResponse](docs/PlaylistItemResponse.md)
 - [PlaylistResponse](docs/PlaylistResponse.md)
 - [PluginDeleteResponse](docs/PluginDeleteResponse.md)
 - [PlvideoDto](docs/PlvideoDto.md)
 - [ProjectActivityActorResponse](docs/ProjectActivityActorResponse.md)
 - [ProjectActivityAuthorizedUserDisplayResponse](docs/ProjectActivityAuthorizedUserDisplayResponse.md)
 - [ProjectActivityChangeResponse](docs/ProjectActivityChangeResponse.md)
 - [ProjectActivityChangeResponseBefore](docs/ProjectActivityChangeResponseBefore.md)
 - [ProjectActivityChangesResponse](docs/ProjectActivityChangesResponse.md)
 - [ProjectActivityContextResponse](docs/ProjectActivityContextResponse.md)
 - [ProjectActivityDisplayChangeResponse](docs/ProjectActivityDisplayChangeResponse.md)
 - [ProjectActivityDisplayValueResponse](docs/ProjectActivityDisplayValueResponse.md)
 - [ProjectActivityEntityDisplayResponse](docs/ProjectActivityEntityDisplayResponse.md)
 - [ProjectActivityEntityRefResponse](docs/ProjectActivityEntityRefResponse.md)
 - [ProjectActivityItemResponse](docs/ProjectActivityItemResponse.md)
 - [ProjectActivityListResponse](docs/ProjectActivityListResponse.md)
 - [ProjectActivityPartResponse](docs/ProjectActivityPartResponse.md)
 - [ProjectActivitySourceResponse](docs/ProjectActivitySourceResponse.md)
 - [ProjectActivityUserDisplayResponse](docs/ProjectActivityUserDisplayResponse.md)
 - [ProjectChannelInviteChannelLinkResponse](docs/ProjectChannelInviteChannelLinkResponse.md)
 - [ProjectChannelInviteLinkResponse](docs/ProjectChannelInviteLinkResponse.md)
 - [ProjectChannelInviteListResponse](docs/ProjectChannelInviteListResponse.md)
 - [ProjectChannelInviteProjectResponse](docs/ProjectChannelInviteProjectResponse.md)
 - [ProjectChannelInviteResponse](docs/ProjectChannelInviteResponse.md)
 - [ProjectChannelListResponse](docs/ProjectChannelListResponse.md)
 - [ProjectChannelMemberInfoResponse](docs/ProjectChannelMemberInfoResponse.md)
 - [ProjectChannelMemberStreamInfoResponse](docs/ProjectChannelMemberStreamInfoResponse.md)
 - [ProjectChannelResponse](docs/ProjectChannelResponse.md)
 - [ProjectChannelResponseStreamInfo](docs/ProjectChannelResponseStreamInfo.md)
 - [ProjectHistoryResponse](docs/ProjectHistoryResponse.md)
 - [ProjectInfoAccessResponse](docs/ProjectInfoAccessResponse.md)
 - [ProjectInfoDataResponse](docs/ProjectInfoDataResponse.md)
 - [ProjectInfoResponse](docs/ProjectInfoResponse.md)
 - [ProjectInfoRestreamDataResponse](docs/ProjectInfoRestreamDataResponse.md)
 - [ProjectInfoRestreamPeriodResponse](docs/ProjectInfoRestreamPeriodResponse.md)
 - [ProjectInfoRestreamResponse](docs/ProjectInfoRestreamResponse.md)
 - [ProjectInfoStoragePeriodResponse](docs/ProjectInfoStoragePeriodResponse.md)
 - [ProjectInfoStorageResponse](docs/ProjectInfoStorageResponse.md)
 - [ProjectInfoTranscodingResponse](docs/ProjectInfoTranscodingResponse.md)
 - [ProjectInfoWebinarResponse](docs/ProjectInfoWebinarResponse.md)
 - [ProjectMeResponse](docs/ProjectMeResponse.md)
 - [ProjectMutationResponse](docs/ProjectMutationResponse.md)
 - [PullKeyItemResponse](docs/PullKeyItemResponse.md)
 - [PullKeyListResponse](docs/PullKeyListResponse.md)
 - [PullServerListItem](docs/PullServerListItem.md)
 - [PullServerListResponse](docs/PullServerListResponse.md)
 - [PullServerTransports](docs/PullServerTransports.md)
 - [RefreshAuthResponse](docs/RefreshAuthResponse.md)
 - [RemoveAccountQuery](docs/RemoveAccountQuery.md)
 - [RotateStreamKeyRequest](docs/RotateStreamKeyRequest.md)
 - [RotateStreamKeyResponse](docs/RotateStreamKeyResponse.md)
 - [RtmpServerGraphResponse](docs/RtmpServerGraphResponse.md)
 - [RtmpServerListItemBase](docs/RtmpServerListItemBase.md)
 - [RtmpServerListItemV3](docs/RtmpServerListItemV3.md)
 - [RtmpServerListOptionsV3](docs/RtmpServerListOptionsV3.md)
 - [RtmpServerListResponseBase](docs/RtmpServerListResponseBase.md)
 - [RtmpServerListV3Response](docs/RtmpServerListV3Response.md)
 - [RtmpServerLoading](docs/RtmpServerLoading.md)
 - [RtmpServerLocationResponse](docs/RtmpServerLocationResponse.md)
 - [RtmpServerLocationsResponse](docs/RtmpServerLocationsResponse.md)
 - [RtmpServerPlatformQuality](docs/RtmpServerPlatformQuality.md)
 - [RtmpServerSrtLatencyResponse](docs/RtmpServerSrtLatencyResponse.md)
 - [RtmpServerStateItem](docs/RtmpServerStateItem.md)
 - [RtmpServerStateResponse](docs/RtmpServerStateResponse.md)
 - [RutubeDto](docs/RutubeDto.md)
 - [SchedulerItemResponse](docs/SchedulerItemResponse.md)
 - [SchedulerVideoRequest](docs/SchedulerVideoRequest.md)
 - [SchedulerVideoResponse](docs/SchedulerVideoResponse.md)
 - [SearchChannelCredentialDto](docs/SearchChannelCredentialDto.md)
 - [SearchChannelCredentialsDto](docs/SearchChannelCredentialsDto.md)
 - [SearchChannelItem](docs/SearchChannelItem.md)
 - [SearchChannelItemStreamInfo](docs/SearchChannelItemStreamInfo.md)
 - [SearchChannelLiveUserDto](docs/SearchChannelLiveUserDto.md)
 - [SearchChannelPlatformDto](docs/SearchChannelPlatformDto.md)
 - [SearchChannelPlatformsDto](docs/SearchChannelPlatformsDto.md)
 - [SearchChannelRtmpDto](docs/SearchChannelRtmpDto.md)
 - [SearchChannelTokensDto](docs/SearchChannelTokensDto.md)
 - [SelectedPlannedItemResponse](docs/SelectedPlannedItemResponse.md)
 - [ServerUrl](docs/ServerUrl.md)
 - [ServerUrlValue](docs/ServerUrlValue.md)
 - [SessionMediaServiceFileResponse](docs/SessionMediaServiceFileResponse.md)
 - [SetMediaServiceFileRequest](docs/SetMediaServiceFileRequest.md)
 - [SetRecordStreamRequest](docs/SetRecordStreamRequest.md)
 - [SetWaitStreamKeyRequest](docs/SetWaitStreamKeyRequest.md)
 - [SiteAuthCentrifugeResponse](docs/SiteAuthCentrifugeResponse.md)
 - [SiteAuthExchangeRequest](docs/SiteAuthExchangeRequest.md)
 - [SiteBlogPageTagResponse](docs/SiteBlogPageTagResponse.md)
 - [SiteBroadcastCredentialsResponse](docs/SiteBroadcastCredentialsResponse.md)
 - [SiteBroadcastEventsV4Response](docs/SiteBroadcastEventsV4Response.md)
 - [SiteBroadcastFindResponse](docs/SiteBroadcastFindResponse.md)
 - [SiteBroadcastGraphResponse](docs/SiteBroadcastGraphResponse.md)
 - [SiteBroadcastItemResponse](docs/SiteBroadcastItemResponse.md)
 - [SiteBroadcastListResponse](docs/SiteBroadcastListResponse.md)
 - [SiteBroadcastPauseRequest](docs/SiteBroadcastPauseRequest.md)
 - [SiteBroadcastPlayRequest](docs/SiteBroadcastPlayRequest.md)
 - [SiteBroadcastRestreamCentrifugeResponse](docs/SiteBroadcastRestreamCentrifugeResponse.md)
 - [SiteBroadcastRestreamsInfoResponse](docs/SiteBroadcastRestreamsInfoResponse.md)
 - [SiteBroadcastStatusInactiveResponse](docs/SiteBroadcastStatusInactiveResponse.md)
 - [SiteBroadcastStatusLiveResponse](docs/SiteBroadcastStatusLiveResponse.md)
 - [SiteBroadcastStatusSchedulerResponse](docs/SiteBroadcastStatusSchedulerResponse.md)
 - [SiteBroadcastStatusTranscodingResponse](docs/SiteBroadcastStatusTranscodingResponse.md)
 - [SiteBroadcastStopRequest](docs/SiteBroadcastStopRequest.md)
 - [SiteBroadcastTemplateResponse](docs/SiteBroadcastTemplateResponse.md)
 - [SiteBulkUpdateChannelRequest](docs/SiteBulkUpdateChannelRequest.md)
 - [SiteChannelStatusResponse](docs/SiteChannelStatusResponse.md)
 - [SiteChatKeyRequest](docs/SiteChatKeyRequest.md)
 - [SiteChatKeyResponse](docs/SiteChatKeyResponse.md)
 - [SiteCurrentDedicatedServerResponse](docs/SiteCurrentDedicatedServerResponse.md)
 - [SiteGetShortChannelResponse](docs/SiteGetShortChannelResponse.md)
 - [SiteLiveRestreamCentrifugeResponse](docs/SiteLiveRestreamCentrifugeResponse.md)
 - [SiteLiveRestreamsInfoResponse](docs/SiteLiveRestreamsInfoResponse.md)
 - [SiteMarkReadHistoryRequest](docs/SiteMarkReadHistoryRequest.md)
 - [SiteMarkReadHistoryResponse](docs/SiteMarkReadHistoryResponse.md)
 - [SiteNotifyUserResponse](docs/SiteNotifyUserResponse.md)
 - [SitePlannedResponse](docs/SitePlannedResponse.md)
 - [SitePlatformsSupportedResponse](docs/SitePlatformsSupportedResponse.md)
 - [SitePromoApplyResponse](docs/SitePromoApplyResponse.md)
 - [SitePromoCheckResponse](docs/SitePromoCheckResponse.md)
 - [SiteRestreamEventChannelResponse](docs/SiteRestreamEventChannelResponse.md)
 - [SiteRestreamEventResponse](docs/SiteRestreamEventResponse.md)
 - [SiteRestreamEventServerResponse](docs/SiteRestreamEventServerResponse.md)
 - [SiteRestreamEventV4Response](docs/SiteRestreamEventV4Response.md)
 - [SiteRestreamItemResponse](docs/SiteRestreamItemResponse.md)
 - [SiteRestreamResponse](docs/SiteRestreamResponse.md)
 - [SiteSearchChannelResponse](docs/SiteSearchChannelResponse.md)
 - [SiteSetNameRequest](docs/SiteSetNameRequest.md)
 - [SiteSetNotifyUserRequest](docs/SiteSetNotifyUserRequest.md)
 - [SiteSetPlannedRequest](docs/SiteSetPlannedRequest.md)
 - [SiteSetSrtUrlRequest](docs/SiteSetSrtUrlRequest.md)
 - [SiteSetTranscoderRequest](docs/SiteSetTranscoderRequest.md)
 - [SiteSetUrlRequest](docs/SiteSetUrlRequest.md)
 - [SiteSocialListResponse](docs/SiteSocialListResponse.md)
 - [SiteTotalInfoReferralsResponse](docs/SiteTotalInfoReferralsResponse.md)
 - [SiteTranscoderListResponse](docs/SiteTranscoderListResponse.md)
 - [SiteUpdateChatTelegramRequest](docs/SiteUpdateChatTelegramRequest.md)
 - [SiteUpdateOptionsOkRequest](docs/SiteUpdateOptionsOkRequest.md)
 - [SiteUpdateOptionsTrovoRequest](docs/SiteUpdateOptionsTrovoRequest.md)
 - [SiteUpdateOptionsTwitchRequest](docs/SiteUpdateOptionsTwitchRequest.md)
 - [SiteUpdateOptionsVkRequest](docs/SiteUpdateOptionsVkRequest.md)
 - [SiteUpdateOptionsVkVideoLiveRequest](docs/SiteUpdateOptionsVkVideoLiveRequest.md)
 - [SiteUpdateOptionsYoutubeRequest](docs/SiteUpdateOptionsYoutubeRequest.md)
 - [SiteWebinarGetSettingsStreamResponse](docs/SiteWebinarGetSettingsStreamResponse.md)
 - [SiteWebinarRoomCreateResponse](docs/SiteWebinarRoomCreateResponse.md)
 - [SiteWebinarRoomDeleteResponse](docs/SiteWebinarRoomDeleteResponse.md)
 - [SiteWebinarRoomItemResponse](docs/SiteWebinarRoomItemResponse.md)
 - [SiteWebinarRoomJoinResponse](docs/SiteWebinarRoomJoinResponse.md)
 - [SiteWebinarRoomListResponse](docs/SiteWebinarRoomListResponse.md)
 - [SiteWebinarRoomPreJoinParticipantResponse](docs/SiteWebinarRoomPreJoinParticipantResponse.md)
 - [SiteWebinarRoomPreJoinResponse](docs/SiteWebinarRoomPreJoinResponse.md)
 - [SiteWebinarRoomSetSyncBodyRequest](docs/SiteWebinarRoomSetSyncBodyRequest.md)
 - [SiteWebinarRoomStreamLastResponse](docs/SiteWebinarRoomStreamLastResponse.md)
 - [SiteWebinarRoomSyncFocusTrackResponse](docs/SiteWebinarRoomSyncFocusTrackResponse.md)
 - [SiteWebinarRoomSyncResponse](docs/SiteWebinarRoomSyncResponse.md)
 - [SiteWebinarRoomSyncTrackResponse](docs/SiteWebinarRoomSyncTrackResponse.md)
 - [SiteWebinarRoomUpdateResponse](docs/SiteWebinarRoomUpdateResponse.md)
 - [SocialItemResultResponse](docs/SocialItemResultResponse.md)
 - [SteamDto](docs/SteamDto.md)
 - [StopSchedulerRequest](docs/StopSchedulerRequest.md)
 - [StructureHelpPageConnectionsItemFinal](docs/StructureHelpPageConnectionsItemFinal.md)
 - [StructureHelpPageConnectionsItemLang](docs/StructureHelpPageConnectionsItemLang.md)
 - [StructureHelpPageItemResponse](docs/StructureHelpPageItemResponse.md)
 - [StructureHelpPageItemResponse2](docs/StructureHelpPageItemResponse2.md)
 - [StructureHelpPageItemResponse3](docs/StructureHelpPageItemResponse3.md)
 - [StructureHelpPageResponse](docs/StructureHelpPageResponse.md)
 - [SuccessResponse](docs/SuccessResponse.md)
 - [TCityChartData](docs/TCityChartData.md)
 - [TCountryChartData](docs/TCountryChartData.md)
 - [TachidDto](docs/TachidDto.md)
 - [TelegramChatInfoResponseDto](docs/TelegramChatInfoResponseDto.md)
 - [TelegramChatPostsItem](docs/TelegramChatPostsItem.md)
 - [TelegramChatPostsResponseDto](docs/TelegramChatPostsResponseDto.md)
 - [TelegramDto](docs/TelegramDto.md)
 - [TelegramInitConnectResponseDto](docs/TelegramInitConnectResponseDto.md)
 - [TelegramSetSettingsRequestDto](docs/TelegramSetSettingsRequestDto.md)
 - [TelegramSettingsDto](docs/TelegramSettingsDto.md)
 - [TelegramSettingsResponseDto](docs/TelegramSettingsResponseDto.md)
 - [TiktokDto](docs/TiktokDto.md)
 - [TonConnectPaymentIntentDto](docs/TonConnectPaymentIntentDto.md)
 - [TonConnectPaymentStatusDto](docs/TonConnectPaymentStatusDto.md)
 - [TonConnectPaymentSubmitBodyDto](docs/TonConnectPaymentSubmitBodyDto.md)
 - [TotalInfoReferralsProfit](docs/TotalInfoReferralsProfit.md)
 - [TransactionResponse](docs/TransactionResponse.md)
 - [TranscoderChannelItem](docs/TranscoderChannelItem.md)
 - [TranscoderCreateDto](docs/TranscoderCreateDto.md)
 - [TranscoderItemDto](docs/TranscoderItemDto.md)
 - [TranscoderListItem](docs/TranscoderListItem.md)
 - [TranscoderState](docs/TranscoderState.md)
 - [TranscoderUpdateDto](docs/TranscoderUpdateDto.md)
 - [TronPaymentIntentDto](docs/TronPaymentIntentDto.md)
 - [TronPaymentStatusDto](docs/TronPaymentStatusDto.md)
 - [TronPaymentSubmitBodyDto](docs/TronPaymentSubmitBodyDto.md)
 - [UpdateMediaServiceFileRequest](docs/UpdateMediaServiceFileRequest.md)
 - [UpdatePullKeyRequest](docs/UpdatePullKeyRequest.md)
 - [UpdateSchedulerRequest](docs/UpdateSchedulerRequest.md)
 - [UpdateVideoRequest](docs/UpdateVideoRequest.md)
 - [UserProfileResponse](docs/UserProfileResponse.md)
 - [UserProject2ProjectListResponse](docs/UserProject2ProjectListResponse.md)
 - [UserProject2ProjectResponse](docs/UserProject2ProjectResponse.md)
 - [UserProjectGetResponse](docs/UserProjectGetResponse.md)
 - [UserProjectInviteLinkResponse](docs/UserProjectInviteLinkResponse.md)
 - [UserProjectInviteResponse](docs/UserProjectInviteResponse.md)
 - [UserProjectInviteUserLinkResponse](docs/UserProjectInviteUserLinkResponse.md)
 - [UserProjectInviteUserListResponse](docs/UserProjectInviteUserListResponse.md)
 - [UserProjectInviteUserResponse](docs/UserProjectInviteUserResponse.md)
 - [UserProjectResponse](docs/UserProjectResponse.md)
 - [ValidationErrorDto](docs/ValidationErrorDto.md)
 - [VerifyPlannedAccessRequest](docs/VerifyPlannedAccessRequest.md)
 - [VerifyPlannedAccessResponse](docs/VerifyPlannedAccessResponse.md)
 - [VideoCreateSuccessResponse](docs/VideoCreateSuccessResponse.md)
 - [VideoDownloadResponse](docs/VideoDownloadResponse.md)
 - [VideoItemResponse](docs/VideoItemResponse.md)
 - [VideoLimitsResponse](docs/VideoLimitsResponse.md)
 - [VideoProgressChannelResponse](docs/VideoProgressChannelResponse.md)
 - [VkDto](docs/VkDto.md)
 - [VliveDto](docs/VliveDto.md)
 - [WalletConnectPaymentIntentDto](docs/WalletConnectPaymentIntentDto.md)
 - [WalletConnectPaymentStatusDto](docs/WalletConnectPaymentStatusDto.md)
 - [WalletConnectPaymentSubmitBodyDto](docs/WalletConnectPaymentSubmitBodyDto.md)
 - [WebinarRoomCreateDto](docs/WebinarRoomCreateDto.md)
 - [WebinarRoomDeleteDto](docs/WebinarRoomDeleteDto.md)
 - [WebinarRoomJoinAnonymousDto](docs/WebinarRoomJoinAnonymousDto.md)
 - [WebinarRoomJoinDto](docs/WebinarRoomJoinDto.md)
 - [WebinarRoomUpdateDto](docs/WebinarRoomUpdateDto.md)
 - [WebinarStreamPauseDto](docs/WebinarStreamPauseDto.md)
 - [WebinarStreamPlayDto](docs/WebinarStreamPlayDto.md)
 - [WebinarStreamStartDto](docs/WebinarStreamStartDto.md)
 - [WebinarStreamStopDto](docs/WebinarStreamStopDto.md)
 - [WebinarUpdateStreamSettingDto](docs/WebinarUpdateStreamSettingDto.md)
 - [ZhanqitvDto](docs/ZhanqitvDto.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearer"></a>
### bearer

- **Type**: Bearer authentication (JWT)

<a id="X-API-KEY"></a>
### X-API-KEY

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

<a id="oauth2"></a>
### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://streamvi.io/cabinet/oauth
- **Scopes**: 
 - **analytics:read**: Read analytics
 - **broadcast:read**: Read broadcasts
 - **broadcast:write**: Manage broadcasts
 - **billing:read**: Read billing
 - **billing:write**: Manage billing
 - **chat:read**: Read chat
 - **chat:write**: Manage chat
 - **centrifuge:read**: Read Centrifuge
 - **channel:read**: Read channels
 - **channel:write**: Manage channels
 - **channel:delete**: Delete channels
 - **channel-access:write**: Manage channel access
 - **diagnostics:run**: Run diagnostics
 - **media-files:read**: Read media files
 - **media-files:write**: Manage media files
 - **notification:read**: Read notifications
 - **notification:write**: Manage notifications
 - **platform:read**: Read platforms
 - **platform:write**: Manage platforms
 - **stream-keys:read**: Read stream keys
 - **stream-keys:write**: Manage stream keys
 - **transcoding:read**: Read transcoding
 - **transcoding:write**: Manage transcoding
 - **profile:read**: Read profile
 - **profile:write**: Manage profile
 - **project:read**: Read projects
 - **project:write**: Manage projects
 - **project-access:write**: Manage project access
 - **project-access:leave**: Leave project
 - **project-access:delete**: Remove project members
 - **payout:read**: Read payouts
 - **payout:write**: Create payouts
 - **video:read**: Read video
 - **video:write**: Manage video
 - **webinar:read**: Read webinars
 - **webinar:write**: Manage webinars
 - **integration:read**: Read integrations
 - **integration:write**: Manage integrations
 - **integration-template:read**: Read integration templates
 - **integration-template:write**: Manage integration templates
 - **plugin:read**: Read plugins
 - **plugin:write**: Manage plugins
 - **project-invite:read**: Read project invites
 - **project-invite:write**: Manage project invites

<a id="oauth2Project"></a>
### oauth2Project

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://streamvi.io/cabinet/oauth?subject_type=project
- **Scopes**: 
 - **analytics:read**: Read analytics
 - **broadcast:read**: Read broadcasts
 - **broadcast:write**: Manage broadcasts
 - **billing:read**: Read billing
 - **billing:write**: Manage billing
 - **chat:read**: Read chat
 - **chat:write**: Manage chat
 - **centrifuge:read**: Read Centrifuge
 - **channel:read**: Read channels
 - **channel:write**: Manage channels
 - **channel:delete**: Delete channels
 - **channel-access:write**: Manage channel access
 - **diagnostics:run**: Run diagnostics
 - **media-files:read**: Read media files
 - **media-files:write**: Manage media files
 - **notification:read**: Read notifications
 - **notification:write**: Manage notifications
 - **platform:read**: Read platforms
 - **platform:write**: Manage platforms
 - **stream-keys:read**: Read stream keys
 - **stream-keys:write**: Manage stream keys
 - **transcoding:read**: Read transcoding
 - **transcoding:write**: Manage transcoding
 - **profile:read**: Read profile
 - **profile:write**: Manage profile
 - **project:read**: Read projects
 - **project:write**: Manage projects
 - **project-access:write**: Manage project access
 - **project-access:leave**: Leave project
 - **project-access:delete**: Remove project members
 - **payout:read**: Read payouts
 - **payout:write**: Create payouts
 - **video:read**: Read video
 - **video:write**: Manage video
 - **webinar:read**: Read webinars
 - **webinar:write**: Manage webinars
 - **integration:read**: Read integrations
 - **integration:write**: Manage integrations
 - **integration-template:read**: Read integration templates
 - **integration-template:write**: Manage integration templates
 - **plugin:read**: Read plugins
 - **plugin:write**: Manage plugins
 - **project-invite:read**: Read project invites
 - **project-invite:write**: Manage project invites

<a id="oauth2Account"></a>
### oauth2Account

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://streamvi.io/cabinet/oauth?subject_type=account
- **Scopes**: 
 - **analytics:read**: Read analytics
 - **broadcast:read**: Read broadcasts
 - **broadcast:write**: Manage broadcasts
 - **billing:read**: Read billing
 - **billing:write**: Manage billing
 - **chat:read**: Read chat
 - **chat:write**: Manage chat
 - **centrifuge:read**: Read Centrifuge
 - **channel:read**: Read channels
 - **channel:write**: Manage channels
 - **channel:delete**: Delete channels
 - **channel-access:write**: Manage channel access
 - **diagnostics:run**: Run diagnostics
 - **media-files:read**: Read media files
 - **media-files:write**: Manage media files
 - **notification:read**: Read notifications
 - **notification:write**: Manage notifications
 - **platform:read**: Read platforms
 - **platform:write**: Manage platforms
 - **stream-keys:read**: Read stream keys
 - **stream-keys:write**: Manage stream keys
 - **transcoding:read**: Read transcoding
 - **transcoding:write**: Manage transcoding
 - **profile:read**: Read profile
 - **profile:write**: Manage profile
 - **project:read**: Read projects
 - **project:write**: Manage projects
 - **project-access:write**: Manage project access
 - **project-access:leave**: Leave project
 - **project-access:delete**: Remove project members
 - **payout:read**: Read payouts
 - **payout:write**: Create payouts
 - **video:read**: Read video
 - **video:write**: Manage video
 - **webinar:read**: Read webinars
 - **webinar:write**: Manage webinars
 - **integration:read**: Read integrations
 - **integration:write**: Manage integrations
 - **integration-template:read**: Read integration templates
 - **integration-template:write**: Manage integration templates
 - **plugin:read**: Read plugins
 - **plugin:write**: Manage plugins
 - **project-invite:read**: Read project invites
 - **project-invite:write**: Manage project invites

