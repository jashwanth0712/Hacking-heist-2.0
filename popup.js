let array=[]
document.getElementById("paused").addEventListener("click",pause_btn_clicked);
document.getElementById("play").addEventListener("click",play_btn_clicked);
document.getElementById("stop").addEventListener("click",stop_btn_clicked);
function pause_btn_clicked(){
    console.log("paused");
document.getElementById("paused").style.display="none";
document.getElementById("play").style.display="block";
document.getElementById("stop").style.display="block";

//chrome.runtime.sendMessage({ msg: "pausebtn" });

}

function play_btn_clicked(){
    console.log("play button clicked"); 
document.getElementById("play").style.display="none";
document.getElementById("paused").style.display="block";
document.getElementById("stop").style.display="block";

//chrome.runtime.sendMessage({ msg: "startbtn" });

// var bgPage = chrome.extension.getBackgroundPage();
// var dat = bgPage.paste();
}


function stop_btn_clicked(){
    console.log("stop button clicked");
document.getElementById("play").style.display="block";
document.getElementById("paused").style.display="none";
document.getElementById("stop").style.display="none";

//chrome.runtime.sendMessage({ msg: "stopbtn" });

}
