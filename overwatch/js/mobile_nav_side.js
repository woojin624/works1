//왼쪽 사이드 내비------------------------------------------------------
const openBtn = document.getElementById("mns_openBtn");
const closeBtn = document.getElementById("mns_closeBtn");
const mns = document.querySelector(".mobile_nav_side");
const ovarlay = mns.querySelector(".mns_overlay");
const openMns = () => {
  mns.classList.remove("hidden");
  ovarlay.classList.remove("mnso_hidden");
};
const closeMns = () => {
  mns.classList.add("hidden");
  ovarlay.classList.add("mnso_hidden");
};
ovarlay.addEventListener("click", closeMns);
openBtn.addEventListener("click", openMns);
closeBtn.addEventListener("click", closeMns);
//오른쪽 사이드 내비------------------------------------------------------
const openBtn2 = document.getElementById("mas_openBtn");
const closeBtn2 = document.getElementById("mas_closeBtn");
const mas = document.querySelector(".mobile_account_side");
const ovarlay2 = mas.querySelector(".mas_overlay");
const openMas = () => {
  mas.classList.remove("hidden_man");
  ovarlay2.classList.remove("maso_hidden");
};
const closeMas = () => {
  mas.classList.add("hidden_man");
  ovarlay2.classList.add("maso_hidden");
};
ovarlay2.addEventListener("click", closeMas);
openBtn2.addEventListener("click", openMas);
closeBtn2.addEventListener("click", closeMas);
//패널 여닫------------------------------------------------------
var mnsPanel = document.getElementsByClassName("mns_panel"),
  panelHeading = document.getElementsByClassName("mns_panel_heading"),
  panelBody = document.getElementsByClassName("mns_panel_body");

for (var i = 0; i < panelHeading.length; i++) {
  panelHeading[i].addEventListener("click", function(ev) {
    for (var j = 0; j < mnsPanel.length; j++) {
      mnsPanel[j].classList.remove("active2");
      ev.target.parentNode.classList.add("active2");
      activateBody2();
    }
  });
}
function activateBody2() {
  for (var x = 0; x < panelBody.length; x++) {
    panelBody[x].style.display = "none";
  }
  var activePanel2 = document.querySelector(
    ".mns_panel.active2 .mns_panel_body"
  );
  activePanel2.style.display = "block";
}
activateBody2();
