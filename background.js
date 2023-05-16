chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const { url } = details;
    if (url.includes("google.com/sorry/index")) {
        let searchQuery = url
          .split("www.google.com/search%3Fq%3D")[1]
          .split("%26source%3D")[0];

        //alert("Google is blocking your search for " + searchQuery + ". Redirecting to DuckDuckGo...");
        return {
        redirectUrl: "https://duckduckgo.com/?q=" + searchQuery,
      };
    }
  },
  {
    urls: ["*://*.google.com/*"],
    types: ["main_frame"],
  },
  ["blocking"]
);
