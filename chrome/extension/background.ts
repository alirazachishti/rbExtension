import { Msg } from "./../../app/common/constants";
chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({ recordingAlert: 0 }, function () { });
});