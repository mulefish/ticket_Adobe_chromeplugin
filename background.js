chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  var analyticsDataTextArea = document.getElementById("out");

  analyticsDataTextArea.value += "sender: " + sender + "\n"
    chrome.tabs.executeScript(sender.tab.id,{ code: 'return 1' },((result) => {
        sendResponse(JSON.parse(result[0]));
      }
    ));
    return true;
});