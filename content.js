chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "fetchAnalytics") {
      var data = "hello ! " + analytics.analytics.events // window.analytics.analytics.getState("track");
      sendResponse(data);
    }
  });