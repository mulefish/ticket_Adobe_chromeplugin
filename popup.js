document.addEventListener("DOMContentLoaded", function () {
  var readAnalyticsButton = document.getElementById("readAnalyticsButton");
  var analyticsDataTextArea = document.getElementById("out");

  readAnalyticsButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { file: "content.js" },
        function () {
          chrome.tabs.sendMessage(tabs[0].id, { action: "fetchAnalytics" }, function (response) {
            analyticsDataTextArea.value = JSON.stringify(response);
          });
        }
      );
    });
  });

  let counter = 0 
  const injectItNow = document.getElementById("InjectItNow");
  injectItNow.addEventListener("click", function () {

    const analyticsDataTextArea = document.getElementById("out");
    analyticsDataTextArea.value = ++counter + "\n-------------\n"
    try {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
       const sendMe = `2 + 2`
       //  const sendMe = `window.analytics.analytics`
       // const sendMe = 'self._satellite'
       // const sendMe = '_s'
       // const sendMe = "_satellite._container"
       // const sendMe = "aLaunch_isScriptLoaded"
        analyticsDataTextArea.value += "sendMe: " + sendMe + "\n"
        chrome.tabs.executeScript(tabs[0].id, { code: sendMe }, ((result) => {
          analyticsDataTextArea.value += "Got this: |" + result + "|\n"
          sendResponse(JSON.parse(result[0]));
        }));
        analyticsDataTextArea.value += "\ntab " + tabs[0].id + "\n"

      })

    } catch (ohno) {
      analyticsDataTextArea.value += "OH NO " + ohno + " \n"
    }
  }
  )
}




);