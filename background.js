var array=[];
var start_ = function(){
  console.log("background start");
};
var pause_ = function(){
  console.log("background pause");
};
var stop_ = function(){
  console.log("background stop");
};

chrome.runtime.onMessage.addListener(

  function(request, sender, sendResponse){
      if(request.msg == "startbtn") start_();
      else if(request.msg == "pausebtn") pause_();
      else if(request.msg == "stopbtn") stop_();
  }
);