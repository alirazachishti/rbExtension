export const showIconOnDynamicOrigins = [
  "https://*.slack.com",
  "https://*.lifesize.com",
  "https://*.skype.com",
  "https://*.join.me",
  "https://meeting.zoho.*",
  "https://*.freeconferencecall.com",
  "https://www.hopin.*",
  "https://hopin.*",
  "https://zoom.*",
  "https://*.webex.com",
  "https://*.gotomeeting.com",
]
export const showIconOnStaticOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",

  "https://webex.com",
  "https://www.webex.com",

  "https://bluejeans.com",
  "https://www.bluejeans.com",

  "https://uberconference.com",
  "https://www.uberconference.com",

  "https://remo.co",
  "https://live.remo.co",

  "https://meet.google.com",
  "https://teams.microsoft.com",
  "https://lifesizecloud.com",
  "https://skype.com",
  "https://join.me",
  "https://meetinglab.zoho.com",
  "https://app.hopin.com",

  // not tested
  "https://3cx.com",
  "https://www.eztalks.com",
  "https://whereby.com",
  "https://start.highfive.com",
  "https://go.highfive.com",

  "https://globalmeet.webcasts.com",
  "https://livestudio.webcasts.com",
  "https://apacfree.globalmeet.com",

  // telephony

  "https://voice.google.com",
  "https://hangouts.google.com",
  "https://www.messenger.com",
  "https://www.textnow.com",
  "https://video.drift.com",
  "https://app.crisp.chat",
  "https://app.wire.com",
  "https://app.acquire.io",
  "https://acquire.io",
]
export const recordingDynamicOrigins = [
  "https://*.slack.com",
  "https://*.lifesize.com",
  "https://*.skype.com",
  "https://*.join.me",
  "https://meeting.zoho.*",
  "https://*.freeconferencecall.com",
  "https://www.hopin.*",
  "https://hopin.*",
  "https://*.webex.com",
  "https://*.gotomeeting.com",
  "https://zoom.*",
]
export const recordingStaticOrigins = [
  // for localhost only

  "http://localhost:3000",
  "http://localhost:3001",

  // for supported urls
  "https://webex.com",
  "https://www.webex.com",

  "https://bluejeans.com",
  "https://www.bluejeans.com",

  "https://uberconference.com",
  "https://www.uberconference.com",

  "https://remo.co",
  "https://live.remo.co",

  "https://meet.google.com",
  "https://teams.microsoft.com",
  "https://lifesizecloud.com",
  "https://skype.com",
  "https://join.me",
  "https://meetinglab.zoho.com",
  "https://app.hopin.com",

  // not tested
  "https://3cx.com",
  "https://www.eztalks.com",
  "https://whereby.com",
  "https://start.highfive.com",
  "https://go.highfive.com",

  "https://globalmeet.webcasts.com",
  "https://livestudio.webcasts.com",
  "https://apacfree.globalmeet.com",


  // telephony

  "https://voice.google.com",
  "https://hangouts.google.com",
  "https://www.messenger.com",
  "https://www.textnow.com",
  "https://video.drift.com",
  "https://app.crisp.chat",
  "https://app.wire.com",
  "https://app.acquire.io",
  "https://acquire.io",

  // other urls

  "https://www.youtube.com",
  "https://youtube.com",
  "https://commondatastorage.googleapis.com",
];
export const allowedSiteProtocol = ["https", "http"];
const devServerUrl = "media-storage.fireflies.dev";
const prodServerUrl = "media-storage.firefliesapp.com";
export const mediaStorageUrl = process.env.NODE_ENV === "development" ? devServerUrl : prodServerUrl;

export const extensionApplicationLoginURL =
  "https://app.fireflies.ai/api/chromeExtensionLogin";
export const oauthRedirectURL = "https://extensions.fireflies.ai/_oauth/google";
export const complianceInfoURL =
  "https://www.notion.so/fireflies/Fireflies-Platform-Rules-e0015d3d608f4f25aa65860706b49b11";
export const mediaServiceProcessUrl = `https://${mediaStorageUrl}/process`;
export const audioServiceToken = "86d2c7a8-c230-4999-8f2d-3abc9c5d4e74";
export const mediaServerUrl = `wss://${mediaStorageUrl}`;
export const sentryDsnUrl =
  "https://5e74084576624408ad3884553d89628a@o207331.ingest.sentry.io/5581756";
export const logglyKey = "bca1fd4a-ad1c-4c01-896d-cc10e1278d4e";
export const fireFliesSiteUrl = "https://www.fireflies.ai?ref=chromeRecorder";
export const fireFliesTermsUrl = "https://fireflies.ai/terms-of-service.pdf";
export const firefliesPolicyUrl = "https://help.fireflies.ai/en/category/security-6xpqb0"