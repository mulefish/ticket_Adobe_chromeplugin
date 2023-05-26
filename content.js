chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "fetchAnalytics") {
      var data = self._satellite // window.analytics.analytics.getState("track");
      sendResponse(data);
    }
  });


  