document.addEventListener("DOMContentLoaded", function() {
  var readAnalyticsButton = document.getElementById("readAnalyticsButton");
  var analyticsDataTextArea = document.getElementById("out");

  readAnalyticsButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { file: "content.js" },
        function() {
          chrome.tabs.sendMessage(tabs[0].id, { action: "fetchAnalytics" }, function(response) {
            analyticsDataTextArea.value = JSON.stringify(response);
          });
        }
      );
    });
  });
});