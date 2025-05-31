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
*AnalyticsApi* | [**analyticsTsStreamBitrateV1**](docs/AnalyticsApi.md#analyticstsstreambitratev1) | **GET** /method/analytics/stream/graph/bitrate | Bitrate for stream
*AnalyticsApi* | [**analyticsTsStreamEventsV1**](docs/AnalyticsApi.md#analyticstsstreameventsv1) | **GET** /method/analytics/stream/events | Events for stream
*AnalyticsApi* | [**analyticsTsStreamViewersV1**](docs/AnalyticsApi.md#analyticstsstreamviewersv1) | **GET** /method/analytics/stream/graph/viewers | Viewers for stream
*AuthApi* | [**authAuthTelegramV1**](docs/AuthApi.md#authauthtelegramv1) | **GET** /method/auth/auth-telegram | Auth telegram
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
*AuthApi* | [**authGetProfileV1**](docs/AuthApi.md#authgetprofilev1) | **GET** /method/auth/me | Get basic data for auth user
*AuthApi* | [**authGuestV1**](docs/AuthApi.md#authguestv1) | **GET** /method/auth/guest | Guest request of auth
*AuthApi* | [**authLogoutV1**](docs/AuthApi.md#authlogoutv1) | **POST** /method/auth/logout | Logout
*AuthApi* | [**authRefreshAccessV1**](docs/AuthApi.md#authrefreshaccessv1) | **POST** /method/auth/refresh-access | Update access token
*BlogPageApi* | [**blogPageGetV1**](docs/BlogPageApi.md#blogpagegetv1) | **GET** /method/blog/page/get | Get blog page
*BlogPageApi* | [**blogPageListV1**](docs/BlogPageApi.md#blogpagelistv1) | **GET** /method/blog/page/list | Get list of blog pages
*BlogPageTagApi* | [**blogPageTagListV1**](docs/BlogPageTagApi.md#blogpagetaglistv1) | **GET** /method/blog/tag/list | Get list of blog pages
*BroadcastApi* | [**methodBroadcastRestreamsV1**](docs/BroadcastApi.md#methodbroadcastrestreamsv1) | **GET** /method/broadcast/restreams | Get restreams
*BroadcastApi* | [**methodBroadcastTokenChannelV1**](docs/BroadcastApi.md#methodbroadcasttokenchannelv1) | **GET** /method/broadcast/longpoll | Connect channel, long polling
*CentrifugeApi* | [**centrifugeAuthV2**](docs/CentrifugeApi.md#centrifugeauthv2) | **GET** /method/centrifuge | Auth centrifuge
*CentrifugeApi* | [**centrifugeProjectV1**](docs/CentrifugeApi.md#centrifugeprojectv1) | **GET** /method/centrifuge/auth/project | Auth token for project
*CentrifugeApi* | [**getTokenBroadcastV1**](docs/CentrifugeApi.md#gettokenbroadcastv1) | **GET** /method/centrifuge/token/broadcast | Auth token for broadcast
*ChannelApi* | [**channelShortChannelListV1**](docs/ChannelApi.md#channelshortchannellistv1) | **GET** /method/channel/short | Minimal channel list
*ChannelApi* | [**methodSearchV1**](docs/ChannelApi.md#methodsearchv1) | **GET** /method/channel/search | Search channel list
*ChannelApi* | [**methodSetStatusV1**](docs/ChannelApi.md#methodsetstatusv1) | **POST** /method/channel/set-status | Get live status
*ChannelSettingsApi* | [**channelChatGetTelegramSettingV1**](docs/ChannelSettingsApi.md#channelchatgettelegramsettingv1) | **GET** /method/channel_settings/chat/telegram/setting | Get telegram settings
*ChannelSettingsApi* | [**channelChatInitTelegramChatConnectV1**](docs/ChannelSettingsApi.md#channelchatinittelegramchatconnectv1) | **GET** /method/channel_settings/chat/telegram/init | Get code for connected chat
*ChannelSettingsApi* | [**channelChatRemoveTelegramChatV1**](docs/ChannelSettingsApi.md#channelchatremovetelegramchatv1) | **GET** /method/channel_settings/chat/telegram/disconnect | Disconnect telegram chat
*ChannelSettingsApi* | [**channelChatSetTelegramSettingV1**](docs/ChannelSettingsApi.md#channelchatsettelegramsettingv1) | **POST** /method/channel_settings/chat/telegram/setting | Set telegram settings
*ChannelSettingsApi* | [**channelChatTelegramPostsV1**](docs/ChannelSettingsApi.md#channelchattelegrampostsv1) | **GET** /method/channel_settings/chat/telegram/posts | Get telegram post list
*ChannelSettingsApi* | [**channelChatUpdateOptionsTelegramV1**](docs/ChannelSettingsApi.md#channelchatupdateoptionstelegramv1) | **POST** /method/channel_settings/chat/setTelegram | Optional settings for telegram
*ChannelSettingsApi* | [**channelOptionsGetPlannedV1**](docs/ChannelSettingsApi.md#channeloptionsgetplannedv1) | **GET** /method/channel_settings/options/getPlanned | Get planned list
*ChannelSettingsApi* | [**channelOptionsGetPlayListV1**](docs/ChannelSettingsApi.md#channeloptionsgetplaylistv1) | **GET** /method/channel_settings/options/getPlaylist | Get playlists from the platform
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsOkV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsokv1) | **POST** /method/channel_settings/options/setOk | Optional settings for ok. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsTrovoV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionstrovov1) | **POST** /method/channel_settings/options/setTrovo | Optional settings for trovo. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsTwitchV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionstwitchv1) | **POST** /method/channel_settings/options/setTwitch | Optional settings for twitch. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsVkV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsvkv1) | **POST** /method/channel_settings/options/setVk | Optional settings for vk. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsVkVideoLiveV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsvkvideolivev1) | **POST** /method/channel_settings/options/setVkVideoLive | Optional settings for vk video live. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdateOptionsYoutubeV1**](docs/ChannelSettingsApi.md#channeloptionsupdateoptionsyoutubev1) | **POST** /method/channel_settings/options/setYoutube | Optional settings for youtube. Depends on the tariff.
*ChannelSettingsApi* | [**channelOptionsUpdatePlannedV1**](docs/ChannelSettingsApi.md#channeloptionsupdateplannedv1) | **POST** /method/channel_settings/options/setPlanned | Set planned id. Depends on the tariff.
*ChannelSettingsApi* | [**channelSettingGetStatusV1**](docs/ChannelSettingsApi.md#channelsettinggetstatusv1) | **GET** /method/channel_settings/getStatus | Get status platform
*ChannelSettingsApi* | [**channelSettingSetNameV1**](docs/ChannelSettingsApi.md#channelsettingsetnamev1) | **POST** /method/channel_settings/setName | Set name from custom channel. Global settings.
*ChannelSettingsApi* | [**channelSettingUpdateRtmpV1**](docs/ChannelSettingsApi.md#channelsettingupdatertmpv1) | **POST** /method/channel_settings/setRtmp | Set rtmp url from channel. Global settings.
*ChannelSettingsApi* | [**channelSettingUpdateTokenV1**](docs/ChannelSettingsApi.md#channelsettingupdatetokenv1) | **GET** /method/channel_settings/update-token | Get status platform
*ChannelSettingsApi* | [**channelSettingUpdateTranscoderV1**](docs/ChannelSettingsApi.md#channelsettingupdatetranscoderv1) | **POST** /method/channel_settings/setTranscoder | Set transcoder from channel. Personal settings.
*ChannelSettingsApi* | [**telegramGetPostByFilterV1**](docs/ChannelSettingsApi.md#telegramgetpostbyfilterv1) | **GET** /method/channel_settings/chat/telegram/posts/get-by-filter | Get telegram post by filter
*ChatGatewayApi* | [**methodChatGatewayDeleteV1**](docs/ChatGatewayApi.md#methodchatgatewaydeletev1) | **POST** /method/chat/messages/delete | Remove message
*ChatGatewayApi* | [**methodChatGatewayGetMessageV1**](docs/ChatGatewayApi.md#methodchatgatewaygetmessagev1) | **GET** /method/chat/messages/message | Get one message
*ChatGatewayApi* | [**methodChatGatewayHistoryV1**](docs/ChatGatewayApi.md#methodchatgatewayhistoryv1) | **GET** /method/chat/messages | List history message
*ChatGatewayApi* | [**methodChatGatewaySendV1**](docs/ChatGatewayApi.md#methodchatgatewaysendv1) | **POST** /method/chat/messages | Send message
*HelpPageApi* | [**helpPageGetV1**](docs/HelpPageApi.md#helppagegetv1) | **GET** /method/help/page/get | Get help page
*HelpPageApi* | [**helpPageListV1**](docs/HelpPageApi.md#helppagelistv1) | **GET** /method/help/page/search | Get list of help pages
*HelpPageApi* | [**helpPageStructureV1**](docs/HelpPageApi.md#helppagestructurev1) | **GET** /method/help/page/structure | Get structure of help pages
*LiveApi* | [**controllersRestreamsV1**](docs/LiveApi.md#controllersrestreamsv1) | **GET** /method/live/restreams | View live info
*MoneyFlowApi* | [**moneyFlowListV1**](docs/MoneyFlowApi.md#moneyflowlistv1) | **GET** /method/money_flow/list | Transaction list for frontend
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
*PaySystemApi* | [**paySystemCreateChallengeV1**](docs/PaySystemApi.md#paysystemcreatechallengev1) | **GET** /method/pay-system/payoneer/create | 
*PaySystemApi* | [**paySystemCreateUnitpayV1**](docs/PaySystemApi.md#paysystemcreateunitpayv1) | **GET** /method/pay-system/unitpay/create | 
*PaySystemApi* | [**paySystemListV1**](docs/PaySystemApi.md#paysystemlistv1) | **GET** /method/pay-system/list | Load available pay systems
*PaymentApi* | [**paymentCreateV1**](docs/PaymentApi.md#paymentcreatev1) | **POST** /method/payment | Create payment item for pay system
*PaymentApi* | [**paymentGetStatusV1**](docs/PaymentApi.md#paymentgetstatusv1) | **GET** /method/payment | 
*PaymentApi* | [**paymentListV1**](docs/PaymentApi.md#paymentlistv1) | **GET** /method/payment/list | 
*PayoutApi* | [**payoutCreateV1**](docs/PayoutApi.md#payoutcreatev1) | **POST** /method/payout/create | Create payout
*PayoutApi* | [**payoutPrepareV1**](docs/PayoutApi.md#payoutpreparev1) | **GET** /method/payout/prepare | Get payout data for create
*PlanRestreamApi* | [**planRestreamBuyV1**](docs/PlanRestreamApi.md#planrestreambuyv1) | **POST** /method/plan_restream | Buy restream tariff
*PlanRestreamApi* | [**planRestreamCheck2V1**](docs/PlanRestreamApi.md#planrestreamcheck2v1) | **GET** /method/plan_restream/check | Load data for show card the tariffs v2
*PlanRestreamApi* | [**planRestreamGetDiscountV1**](docs/PlanRestreamApi.md#planrestreamgetdiscountv1) | **GET** /method/plan_restream/get_discount | Get discount restream
*PlanRestreamApi* | [**planRestreamListProjectV1**](docs/PlanRestreamApi.md#planrestreamlistprojectv1) | **GET** /method/plan_restream/list/project | Get list of restream tariffs for project
*PlanRestreamApi* | [**planRestreamListV1**](docs/PlanRestreamApi.md#planrestreamlistv1) | **GET** /method/plan_restream/list | Get list of restream tariffs
*PlanRestreamApi* | [**planRestreamRemoveV1**](docs/PlanRestreamApi.md#planrestreamremovev1) | **DELETE** /method/plan_restream | Remove after tariff
*PlanRestreamApi* | [**planRestreamTariffV1**](docs/PlanRestreamApi.md#planrestreamtariffv1) | **GET** /method/plan_restream | Get tariff for project
*PlanStorageApi* | [**planStorageBuyV1**](docs/PlanStorageApi.md#planstoragebuyv1) | **POST** /method/plan_storage | Buy storage tariff
*PlanStorageApi* | [**planStorageCancelV1**](docs/PlanStorageApi.md#planstoragecancelv1) | **DELETE** /method/plan_storage | Remove next tariff
*PlanStorageApi* | [**planStorageCheckV1**](docs/PlanStorageApi.md#planstoragecheckv1) | **GET** /method/plan_storage/check | Check storage tariff before buy
*PlanStorageApi* | [**planStorageGetDiscountV1**](docs/PlanStorageApi.md#planstoragegetdiscountv1) | **GET** /method/plan_storage/get_discount | Get discount of storage
*PlanStorageApi* | [**planStorageListV1**](docs/PlanStorageApi.md#planstoragelistv1) | **GET** /method/plan_storage/list | Get info for storage tariff
*PlanStorageApi* | [**planStorageTariffV1**](docs/PlanStorageApi.md#planstoragetariffv1) | **GET** /method/plan_storage | Get tariff for project
*PlanTranscodingApi* | [**planTranscodingBuyV1**](docs/PlanTranscodingApi.md#plantranscodingbuyv1) | **POST** /method/plan_transcoding | Buy transcoder tariff
*PlanTranscodingApi* | [**planTranscodingCancelV1**](docs/PlanTranscodingApi.md#plantranscodingcancelv1) | **DELETE** /method/plan_transcoding | Remove after tariff
*PlanTranscodingApi* | [**planTranscodingCheckV1**](docs/PlanTranscodingApi.md#plantranscodingcheckv1) | **GET** /method/plan_transcoding/check | Check transcoding tariff before buy
*PlanTranscodingApi* | [**planTranscodingGetDiscountV1**](docs/PlanTranscodingApi.md#plantranscodinggetdiscountv1) | **GET** /method/plan_transcoding/get_discount | Get discount transcoding
*PlanTranscodingApi* | [**planTranscodingListV1**](docs/PlanTranscodingApi.md#plantranscodinglistv1) | **GET** /method/plan_transcoding/list | Get list of transcoding tariffs
*PlanTranscodingApi* | [**planTranscodingTariffV1**](docs/PlanTranscodingApi.md#plantranscodingtariffv1) | **GET** /method/plan_transcoding | Get tariff for project
*PlatformsApi* | [**platformsAddAccountV1**](docs/PlatformsApi.md#platformsaddaccountv1) | **GET** /method/platforms/connect | Get url for start oauth
*PlatformsApi* | [**platformsGetCategoryV1**](docs/PlatformsApi.md#platformsgetcategoryv1) | **GET** /method/platforms/category | Get category from the platform
*PlatformsApi* | [**platformsLogoutAccountV1**](docs/PlatformsApi.md#platformslogoutaccountv1) | **POST** /method/platforms/logout | Get category from the platform
*PlatformsApi* | [**platformsPlatformListV1**](docs/PlatformsApi.md#platformsplatformlistv1) | **GET** /method/platforms/list | Supported platforms
*PolicyPageApi* | [**policyPageGetItemV1**](docs/PolicyPageApi.md#policypagegetitemv1) | **GET** /method/policy/get | Get policy page
*PolicyPageApi* | [**policyPageGetStructureV1**](docs/PolicyPageApi.md#policypagegetstructurev1) | **GET** /method/policy/structure | Get policy structure
*ProjectApi* | [**methodLiveStatusV1**](docs/ProjectApi.md#methodlivestatusv1) | **GET** /method/project/live-status | Get live status
*ProjectChannelApi* | [**projectChannelChangeAccessV1**](docs/ProjectChannelApi.md#projectchannelchangeaccessv1) | **POST** /method/channel/access/change | Change access for project in channel
*ProjectChannelApi* | [**projectChannelDelV1**](docs/ProjectChannelApi.md#projectchanneldelv1) | **POST** /method/channel/access/del | Remove access for project in channel
*ProjectChannelApi* | [**projectChannelListV1**](docs/ProjectChannelApi.md#projectchannellistv1) | **GET** /method/channel/access/list | Project channel list
*ProjectChannelApi* | [**projectChannelTransferOwnerV1**](docs/ProjectChannelApi.md#projectchanneltransferownerv1) | **POST** /method/channel/access/transfer_owner | Transfer owner for project in channel
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
*PromoApi* | [**promoApplyV1**](docs/PromoApi.md#promoapplyv1) | **GET** /method/promo/apply | Apply code
*PromoApi* | [**promoCheckV1**](docs/PromoApi.md#promocheckv1) | **GET** /method/promo/check | Check code
*PullServersApi* | [**pullServersGetPullServersV1**](docs/PullServersApi.md#pullserversgetpullserversv1) | **GET** /method/pull-servers/list | Get pull servers
*ReferralsApi* | [**referralsTotalInfoV1**](docs/ReferralsApi.md#referralstotalinfov1) | **GET** /method/referrals/info | Total info
*ReleaseApi* | [**releaseAppCabinetV1**](docs/ReleaseApi.md#releaseappcabinetv1) | **GET** /method/release-app | Get current version app
*RtmpServerApi* | [**methodRtmpServerListLocationsUnauthorizedV1**](docs/RtmpServerApi.md#methodrtmpserverlistlocationsunauthorizedv1) | **GET** /method/rtmp_server/list_locations_unauthorized | Rtmp locations server list example for unauthorized
*RtmpServerApi* | [**rtmpServerGraphV1**](docs/RtmpServerApi.md#rtmpservergraphv1) | **GET** /method/rtmp_server/graph | Graph of rtmp servers
*RtmpServerApi* | [**rtmpServerListV1**](docs/RtmpServerApi.md#rtmpserverlistv1) | **GET** /method/rtmp_server/list | List rtmp servers
*RtmpServerApi* | [**rtmpServerStateV1**](docs/RtmpServerApi.md#rtmpserverstatev1) | **GET** /method/rtmp_server/state | State of rtmp servers
*RtmpServerApi* | [**rtmpServerUpV1**](docs/RtmpServerApi.md#rtmpserverupv1) | **GET** /method/rtmp_server/up | State of rtmp servers
*SocialsApi* | [**socialsGetListV1**](docs/SocialsApi.md#socialsgetlistv1) | **GET** /method/socials/list | Social list for user
*StreamKeyApi* | [**streamKeysKeyV1**](docs/StreamKeyApi.md#streamkeyskeyv1) | **GET** /method/stream-keys | Get stream credentials
*StreamKeyApi* | [**streamKeysUpdateRecordV1**](docs/StreamKeyApi.md#streamkeysupdaterecordv1) | **POST** /method/stream-keys/record | Update record
*StreamPullKeysApi* | [**streamPullKeysSiteCheckV1**](docs/StreamPullKeysApi.md#streampullkeyssitecheckv1) | **GET** /method/stream-pull-keys/check | Check key
*StreamPullKeysApi* | [**streamPullKeysSiteCreateV1**](docs/StreamPullKeysApi.md#streampullkeyssitecreatev1) | **POST** /method/stream-pull-keys | Create key
*StreamPullKeysApi* | [**streamPullKeysSiteGetV1**](docs/StreamPullKeysApi.md#streampullkeyssitegetv1) | **GET** /method/stream-pull-keys | List keys
*StreamPullKeysApi* | [**streamPullKeysSiteRemoveV1**](docs/StreamPullKeysApi.md#streampullkeyssiteremovev1) | **DELETE** /method/stream-pull-keys | Delete key
*StreamPullKeysApi* | [**streamPullKeysSiteUpdateV1**](docs/StreamPullKeysApi.md#streampullkeyssiteupdatev1) | **PUT** /method/stream-pull-keys | Update key
*TransactionsApi* | [**transactionsListV1**](docs/TransactionsApi.md#transactionslistv1) | **GET** /method/transactions/list | Transaction list for frontend
*TranscodersApi* | [**transcodersAddV1**](docs/TranscodersApi.md#transcodersaddv1) | **POST** /method/transcoder/add | Transcoder create
*TranscodersApi* | [**transcodersDeleteV1**](docs/TranscodersApi.md#transcodersdeletev1) | **POST** /method/transcoder/delete | Transcoder delete
*TranscodersApi* | [**transcodersListV1**](docs/TranscodersApi.md#transcoderslistv1) | **GET** /method/transcoder/list | List of transcoder
*TranscodersApi* | [**transcodersStopV1**](docs/TranscodersApi.md#transcodersstopv1) | **POST** /method/transcoder/stop | Transcoder stop
*TranscodersApi* | [**transcodersUpdateV1**](docs/TranscodersApi.md#transcodersupdatev1) | **POST** /method/transcoder/update | Transcoder update
*UserApi* | [**userGetProfileV1**](docs/UserApi.md#usergetprofilev1) | **GET** /method/users/profile | Get user profile
*UserApi* | [**userUpdateProfileV1**](docs/UserApi.md#userupdateprofilev1) | **POST** /method/users/profile | Update profile
*UserProjectApi* | [**userProjectChangeAccessV1**](docs/UserProjectApi.md#userprojectchangeaccessv1) | **POST** /method/project/user/change_access | Change access user from project
*UserProjectApi* | [**userProjectDelV1**](docs/UserProjectApi.md#userprojectdelv1) | **POST** /method/project/user/del | Remove user from project
*UserProjectApi* | [**userProjectGetProjectInfoV1**](docs/UserProjectApi.md#userprojectgetprojectinfov1) | **GET** /method/project/get_project_info | Get project full info
*UserProjectApi* | [**userProjectGetProjectV1**](docs/UserProjectApi.md#userprojectgetprojectv1) | **GET** /method/project/get_project | Get project by number id
*UserProjectApi* | [**userProjectGetUserV1**](docs/UserProjectApi.md#userprojectgetuserv1) | **GET** /method/project/get_user | Get user by number id
*UserProjectApi* | [**userProjectListAccessV1**](docs/UserProjectApi.md#userprojectlistaccessv1) | **GET** /method/project/user/list | List of user in project
*UserProjectApi* | [**userProjectListV1**](docs/UserProjectApi.md#userprojectlistv1) | **GET** /method/project/list | List of project for current user
*UserProjectApi* | [**userProjectSelectProjectV1**](docs/UserProjectApi.md#userprojectselectprojectv1) | **GET** /method/project/select | Select user for project


### Documentation For Models

 - [AmountItem](docs/AmountItem.md)
 - [BalanceForPayResponse](docs/BalanceForPayResponse.md)
 - [BlogPageSiteResponse](docs/BlogPageSiteResponse.md)
 - [BlogPageSiteResponseId](docs/BlogPageSiteResponseId.md)
 - [CategoryItemResponse](docs/CategoryItemResponse.md)
 - [CategorySubListItemResponse](docs/CategorySubListItemResponse.md)
 - [ChannelCategoryInfoDto](docs/ChannelCategoryInfoDto.md)
 - [ChannelDefaultInfoDto](docs/ChannelDefaultInfoDto.md)
 - [ChannelOkInfoDto](docs/ChannelOkInfoDto.md)
 - [ChannelPlayListInfoDto](docs/ChannelPlayListInfoDto.md)
 - [ChannelTrovoInfoDto](docs/ChannelTrovoInfoDto.md)
 - [ChannelTwitchInfoDto](docs/ChannelTwitchInfoDto.md)
 - [ChannelVkCategoryInfoDto](docs/ChannelVkCategoryInfoDto.md)
 - [ChannelVkInfoDto](docs/ChannelVkInfoDto.md)
 - [ChannelYoutubeInfoDto](docs/ChannelYoutubeInfoDto.md)
 - [CheckPullKeyResponse](docs/CheckPullKeyResponse.md)
 - [CodeAppAuthResponse](docs/CodeAppAuthResponse.md)
 - [CountryItem](docs/CountryItem.md)
 - [CreatePullKeyRequest](docs/CreatePullKeyRequest.md)
 - [CreatePullKeyResponse](docs/CreatePullKeyResponse.md)
 - [ErrorData](docs/ErrorData.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [GetHelpPageResponse](docs/GetHelpPageResponse.md)
 - [GetPaySettingResponseV3](docs/GetPaySettingResponseV3.md)
 - [GetPolicyStructure](docs/GetPolicyStructure.md)
 - [GetPolicyStructureDto](docs/GetPolicyStructureDto.md)
 - [GetShortChannelItem](docs/GetShortChannelItem.md)
 - [GetStreamKeyResponse](docs/GetStreamKeyResponse.md)
 - [GetVersionAppResponse](docs/GetVersionAppResponse.md)
 - [HelpPageResponse](docs/HelpPageResponse.md)
 - [InternalNotifyTypeAction](docs/InternalNotifyTypeAction.md)
 - [InternalNotifyTypeActionText](docs/InternalNotifyTypeActionText.md)
 - [InternalNotifyTypeText](docs/InternalNotifyTypeText.md)
 - [ListOfCategoryItemResponse](docs/ListOfCategoryItemResponse.md)
 - [ListOfPaySystemListResponse](docs/ListOfPaySystemListResponse.md)
 - [ListOfPayoutSystemAccountListItemResponse](docs/ListOfPayoutSystemAccountListItemResponse.md)
 - [ListOfPlaylistItemResponse](docs/ListOfPlaylistItemResponse.md)
 - [ListOfProjectChannelInviteResponse](docs/ListOfProjectChannelInviteResponse.md)
 - [ListOfProjectChannelResponse](docs/ListOfProjectChannelResponse.md)
 - [ListOfRtmpServerLocationResponse](docs/ListOfRtmpServerLocationResponse.md)
 - [ListOfSitePlannedResponse](docs/ListOfSitePlannedResponse.md)
 - [ListOfUserProject2ProjectResponse](docs/ListOfUserProject2ProjectResponse.md)
 - [ListResponse](docs/ListResponse.md)
 - [LiveRestreamCentrifugeItemV2](docs/LiveRestreamCentrifugeItemV2.md)
 - [LiveRestreamInfoItem](docs/LiveRestreamInfoItem.md)
 - [MessageResponseDto](docs/MessageResponseDto.md)
 - [MessageRestreamResponseDto](docs/MessageRestreamResponseDto.md)
 - [MethodBroadcastRestreamItemResponse](docs/MethodBroadcastRestreamItemResponse.md)
 - [MethodBroadcastRestreamsResponse](docs/MethodBroadcastRestreamsResponse.md)
 - [MethodChatHistoryResponse](docs/MethodChatHistoryResponse.md)
 - [MethodChatSendMessageRequestDto](docs/MethodChatSendMessageRequestDto.md)
 - [MethodCurrentBroadcastResponse](docs/MethodCurrentBroadcastResponse.md)
 - [MethodProjectLiveStatusInfo](docs/MethodProjectLiveStatusInfo.md)
 - [MethodProjectLiveStatusInfoRestreamData](docs/MethodProjectLiveStatusInfoRestreamData.md)
 - [MethodProjectLiveStatusResponse](docs/MethodProjectLiveStatusResponse.md)
 - [MethodProjectLiveStatusVideo](docs/MethodProjectLiveStatusVideo.md)
 - [MethodSetStatusChannelRequest](docs/MethodSetStatusChannelRequest.md)
 - [MoneyFlowBalanceTypeValuesResponse](docs/MoneyFlowBalanceTypeValuesResponse.md)
 - [MoneyFlowDetails](docs/MoneyFlowDetails.md)
 - [MoneyFlowResponse](docs/MoneyFlowResponse.md)
 - [NotifyHistorySiteResponse](docs/NotifyHistorySiteResponse.md)
 - [NotifyHistoryStatusUserResponse](docs/NotifyHistoryStatusUserResponse.md)
 - [NotifyUserChannels](docs/NotifyUserChannels.md)
 - [NotifyUserRelation](docs/NotifyUserRelation.md)
 - [PaginatedResponse](docs/PaginatedResponse.md)
 - [PaginatedResponseOfBlogPageSiteResponse](docs/PaginatedResponseOfBlogPageSiteResponse.md)
 - [PaginatedResponseOfHelpPageResponse](docs/PaginatedResponseOfHelpPageResponse.md)
 - [PaginatedResponseOfMoneyFlowResponse](docs/PaginatedResponseOfMoneyFlowResponse.md)
 - [PaginatedResponseOfNotifyHistorySiteResponse](docs/PaginatedResponseOfNotifyHistorySiteResponse.md)
 - [PaginatedResponseOfProjectHistoryResponse](docs/PaginatedResponseOfProjectHistoryResponse.md)
 - [PaginatedResponseOfSiteBlogPageTagResponse](docs/PaginatedResponseOfSiteBlogPageTagResponse.md)
 - [PaginatedResponseOfTransactionResponse](docs/PaginatedResponseOfTransactionResponse.md)
 - [PaginatedResponseOfUserProjectResponse](docs/PaginatedResponseOfUserProjectResponse.md)
 - [PayCheckCountryResponse](docs/PayCheckCountryResponse.md)
 - [PaySettingBodyDto](docs/PaySettingBodyDto.md)
 - [PaySettingResponseV3](docs/PaySettingResponseV3.md)
 - [PaySystemListResponse](docs/PaySystemListResponse.md)
 - [PaymentCreateRequestRestreamBodyDto](docs/PaymentCreateRequestRestreamBodyDto.md)
 - [PaymentCreateRequestStorageBodyDto](docs/PaymentCreateRequestStorageBodyDto.md)
 - [PaymentCreateRequestTopUpBodyDto](docs/PaymentCreateRequestTopUpBodyDto.md)
 - [PaymentCreateRequestTranscoderBodyDto](docs/PaymentCreateRequestTranscoderBodyDto.md)
 - [PaymentCreateResponse](docs/PaymentCreateResponse.md)
 - [PaymentCreateV1Request](docs/PaymentCreateV1Request.md)
 - [PaymentStatusResponse](docs/PaymentStatusResponse.md)
 - [PayoutCreateRequestBodyDto](docs/PayoutCreateRequestBodyDto.md)
 - [PayoutSystemAccountListItemResponse](docs/PayoutSystemAccountListItemResponse.md)
 - [PlanRefund](docs/PlanRefund.md)
 - [PlanRestream2UserItemResponse](docs/PlanRestream2UserItemResponse.md)
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
 - [PlanStorage2UserItemResponse](docs/PlanStorage2UserItemResponse.md)
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
 - [PlannedItemResponse](docs/PlannedItemResponse.md)
 - [PlatformsSupportedItem](docs/PlatformsSupportedItem.md)
 - [PlaylistItemResponse](docs/PlaylistItemResponse.md)
 - [ProjectChannelInviteChannelLinkResponse](docs/ProjectChannelInviteChannelLinkResponse.md)
 - [ProjectChannelInviteLinkResponse](docs/ProjectChannelInviteLinkResponse.md)
 - [ProjectChannelInviteProjectResponse](docs/ProjectChannelInviteProjectResponse.md)
 - [ProjectChannelInviteResponse](docs/ProjectChannelInviteResponse.md)
 - [ProjectChannelResponse](docs/ProjectChannelResponse.md)
 - [ProjectHistoryResponse](docs/ProjectHistoryResponse.md)
 - [ProjectInfoAccessResponse](docs/ProjectInfoAccessResponse.md)
 - [ProjectInfoDataResponse](docs/ProjectInfoDataResponse.md)
 - [ProjectInfoResponse](docs/ProjectInfoResponse.md)
 - [ProjectInfoRestreamResponse](docs/ProjectInfoRestreamResponse.md)
 - [ProjectInfoStorageResponse](docs/ProjectInfoStorageResponse.md)
 - [ProjectInfoTranscodingResponse](docs/ProjectInfoTranscodingResponse.md)
 - [PullKeyItemResponse](docs/PullKeyItemResponse.md)
 - [PullKeyListResponse](docs/PullKeyListResponse.md)
 - [PullServerListItem](docs/PullServerListItem.md)
 - [PullServerListResponse](docs/PullServerListResponse.md)
 - [PullServerTransports](docs/PullServerTransports.md)
 - [RefreshAuthResponse](docs/RefreshAuthResponse.md)
 - [RtmpServerGraphResponse](docs/RtmpServerGraphResponse.md)
 - [RtmpServerListItem](docs/RtmpServerListItem.md)
 - [RtmpServerListResponse](docs/RtmpServerListResponse.md)
 - [RtmpServerLoading](docs/RtmpServerLoading.md)
 - [RtmpServerLocationResponse](docs/RtmpServerLocationResponse.md)
 - [RtmpServerPlatformQuality](docs/RtmpServerPlatformQuality.md)
 - [RtmpServerStateItem](docs/RtmpServerStateItem.md)
 - [RtmpServerStateResponse](docs/RtmpServerStateResponse.md)
 - [SearchChannelCredentialDto](docs/SearchChannelCredentialDto.md)
 - [SearchChannelCredentialsDto](docs/SearchChannelCredentialsDto.md)
 - [SearchChannelItem](docs/SearchChannelItem.md)
 - [SearchChannelItemStreamInfo](docs/SearchChannelItemStreamInfo.md)
 - [SearchChannelLiveUserDto](docs/SearchChannelLiveUserDto.md)
 - [SearchChannelPlatformDto](docs/SearchChannelPlatformDto.md)
 - [SearchChannelPlatformsDto](docs/SearchChannelPlatformsDto.md)
 - [SearchChannelRtmpDto](docs/SearchChannelRtmpDto.md)
 - [SearchChannelTokensDto](docs/SearchChannelTokensDto.md)
 - [SetRecordStreamRequest](docs/SetRecordStreamRequest.md)
 - [SiteAuthCentrifugeResponse](docs/SiteAuthCentrifugeResponse.md)
 - [SiteAuthExchangeRequest](docs/SiteAuthExchangeRequest.md)
 - [SiteBlogPageTagResponse](docs/SiteBlogPageTagResponse.md)
 - [SiteChannelStatusResponse](docs/SiteChannelStatusResponse.md)
 - [SiteGetShortChannelResponse](docs/SiteGetShortChannelResponse.md)
 - [SiteLiveRestreamCentrifugeResponse](docs/SiteLiveRestreamCentrifugeResponse.md)
 - [SiteLiveRestreamsInfoResponse](docs/SiteLiveRestreamsInfoResponse.md)
 - [SiteLogoutAuthRequest](docs/SiteLogoutAuthRequest.md)
 - [SiteMarkReadHistoryRequest](docs/SiteMarkReadHistoryRequest.md)
 - [SiteMarkReadHistoryResponse](docs/SiteMarkReadHistoryResponse.md)
 - [SiteNotifyUserResponse](docs/SiteNotifyUserResponse.md)
 - [SitePlannedResponse](docs/SitePlannedResponse.md)
 - [SitePlatformsSupportedResponse](docs/SitePlatformsSupportedResponse.md)
 - [SitePromoApplyResponse](docs/SitePromoApplyResponse.md)
 - [SitePromoCheckResponse](docs/SitePromoCheckResponse.md)
 - [SiteRefreshAuthBodyRequest](docs/SiteRefreshAuthBodyRequest.md)
 - [SiteScreenNotifyUserResponse](docs/SiteScreenNotifyUserResponse.md)
 - [SiteSearchChannelResponse](docs/SiteSearchChannelResponse.md)
 - [SiteSetNameRequest](docs/SiteSetNameRequest.md)
 - [SiteSetNotifyUserRequest](docs/SiteSetNotifyUserRequest.md)
 - [SiteSetPlannedRequest](docs/SiteSetPlannedRequest.md)
 - [SiteSetTranscoderRequest](docs/SiteSetTranscoderRequest.md)
 - [SiteSetUrlRequest](docs/SiteSetUrlRequest.md)
 - [SiteTotalInfoReferralsResponse](docs/SiteTotalInfoReferralsResponse.md)
 - [SiteTranscoderListResponse](docs/SiteTranscoderListResponse.md)
 - [SiteUpdateChatTelegramRequest](docs/SiteUpdateChatTelegramRequest.md)
 - [SiteUpdateOptionsOkRequest](docs/SiteUpdateOptionsOkRequest.md)
 - [SiteUpdateOptionsTrovoRequest](docs/SiteUpdateOptionsTrovoRequest.md)
 - [SiteUpdateOptionsTwitchRequest](docs/SiteUpdateOptionsTwitchRequest.md)
 - [SiteUpdateOptionsVkRequest](docs/SiteUpdateOptionsVkRequest.md)
 - [SiteUpdateOptionsVkVideoLiveRequest](docs/SiteUpdateOptionsVkVideoLiveRequest.md)
 - [SiteUpdateOptionsYoutubeRequest](docs/SiteUpdateOptionsYoutubeRequest.md)
 - [StructureHelpPageConnectionsItemFinal](docs/StructureHelpPageConnectionsItemFinal.md)
 - [StructureHelpPageConnectionsItemLang](docs/StructureHelpPageConnectionsItemLang.md)
 - [StructureHelpPageItemResponse](docs/StructureHelpPageItemResponse.md)
 - [StructureHelpPageItemResponse2](docs/StructureHelpPageItemResponse2.md)
 - [StructureHelpPageItemResponse3](docs/StructureHelpPageItemResponse3.md)
 - [StructureHelpPageResponse](docs/StructureHelpPageResponse.md)
 - [SuccessResponse](docs/SuccessResponse.md)
 - [TCityChartData](docs/TCityChartData.md)
 - [TCountryChartData](docs/TCountryChartData.md)
 - [TelegramChatInfoResponseDto](docs/TelegramChatInfoResponseDto.md)
 - [TelegramChatPostsItem](docs/TelegramChatPostsItem.md)
 - [TelegramChatPostsResponseDto](docs/TelegramChatPostsResponseDto.md)
 - [TelegramInitConnectResponseDto](docs/TelegramInitConnectResponseDto.md)
 - [TelegramSetSettingsRequestDto](docs/TelegramSetSettingsRequestDto.md)
 - [TelegramSettingsDto](docs/TelegramSettingsDto.md)
 - [TelegramSettingsResponseDto](docs/TelegramSettingsResponseDto.md)
 - [TransactionResponse](docs/TransactionResponse.md)
 - [TranscoderChannelItem](docs/TranscoderChannelItem.md)
 - [TranscoderCreateDto](docs/TranscoderCreateDto.md)
 - [TranscoderItemDto](docs/TranscoderItemDto.md)
 - [TranscoderListItem](docs/TranscoderListItem.md)
 - [TranscoderUpdateDto](docs/TranscoderUpdateDto.md)
 - [UpdatePullKeyRequest](docs/UpdatePullKeyRequest.md)
 - [UserProfileResponse](docs/UserProfileResponse.md)
 - [UserProject2ProjectResponse](docs/UserProject2ProjectResponse.md)
 - [UserProjectGetResponse](docs/UserProjectGetResponse.md)
 - [UserProjectResponse](docs/UserProjectResponse.md)
 - [ValidationErrorDto](docs/ValidationErrorDto.md)


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

