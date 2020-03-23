var myVideo = document.getElementById("myvideo");
var vPlay = document.getElementById("vplay");
var vPause = document.getElementById("vpause");
var btnCover = document.getElementsByClassName("button_cover");

vPlay.addEventListener("click", function() {
  myVideo.play();
  vPlay.style.display = "none";
  vPause.style.display = "flex";
});
vPause.addEventListener("click", function() {
  myVideo.pause();
  vPause.style.display = "none";
  vPlay.style.display = "flex";
});
