chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const { url } = details;
    if (url.includes("google.com/sorry/index")) {
      return {
        redirectUrl: "https://duckduckgo.com/" + encodeURIComponent(url),
      };
    }
  },
  {
    urls: ["*://*.google.com/*"],
    types: ["main_frame"],
  },
  ["blocking"]
);
