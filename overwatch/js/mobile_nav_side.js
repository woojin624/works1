var mnsPanel = document.getElementsByClassName("mns_panel"),
  panelHeading = document.getElementsByClassName("mns_panel_heading"),
  panelBody = document.getElementsByClassName("mns_panel_body"),
  openBtn = document.getElementsByClassName("mns_openBtn"),
  closeBtn = document.getElementsByClassName("mns_clostBtn"),
  mns = document.getElementsByClassName("mobile_nav_side");

const toggleBtn = document.querySelector(".navbar_togleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

openBtn.addEventListener("click", () => {
  mns.classList.toggle("active3");
});

// for (var i = 0; i < panelHeading.length; i++) {
//   panelHeading[i].addEventListener("click", function(ev) {
//     for (var j = 0; j < mnsPanel.length; j++) {
//       mnsPanel[j].classList.remove("active2");
//       ev.target.parentNode.classList.add("active2");
//       activateBody2();
//     }
//   });
// }
// function activateBody2() {
//   for (var x = 0; x < panelBody.length; x++) {
//     panelBody[x].style.display = "none";
//   }
//   var activePanel2 = document.querySelector(
//     ".mns_panel.active2 .mns_panel_body"
//   );
//   activePanel2.style.display = "block";
// }
// activateBody2();
