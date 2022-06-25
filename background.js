// var array=[];
// var start_ = function(){
//   chrome.tabs.captureVisibleTab((screenshotUrl) => {
//     console.log("captured " , screenshotUrl);})
//   console.log("background start");
// };
// var pause_ = function(){
//   console.log("background pause");
// };
// var stop_ = function(){
//   console.log("background stop");
// };

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse){
//       if(request.msg == "startbtn") start_();
//       else if(request.msg == "pausebtn") pause_();
//       else if(request.msg == "stopbtn") stop_();
//   }
// );
let id = 100;
chrome.action.onClicked.addListener(() => {
    console.log("clicked");
 chrome.tabs.captureVisibleTab((screenshotUrl) => {
    console.log("captured " , screenshotUrl);
    console.log(typeof(screenshotUrl))
    const viewTabUrl = chrome.extension.getURL('screenshot.html?id=' + id++)
    console.log(viewTabUrl);
    let targetId = null;
chrome.tabs.onUpdated.addListener(function listener(tabId,changedProps) {
    console.log("change occurred ")
if (tabId != targetId || changedProps.status != "complete")
        return;
chrome.tabs.onUpdated.removeListener(listener);
const views = chrome.extension.getViews();
      for (let i = 0; i < views.length; i++) {
        let view = views[i];
        if (view.location.href == viewTabUrl) {
          view.setScreenshotUrl(screenshotUrl);
          break;
        }
      }
    });
chrome.tabs.create({url: viewTabUrl}, (tab) => {
    console.log("Created a tab")
      targetId = tab.id;
    });
  });
});