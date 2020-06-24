// var menuBtn = document.querySelector("div.menu-bar"),
//     menu = document.querySelector("div.menu"),
//     home = document.querySelector("div.home"),
//     strategy = document.querySelector("div.strategy"),
//     design = document.querySelector("div.design"),
//     service = document.querySelector("div.service"),
//     menuLine = document.getElementsByClassName("menu-line");

   

// menuBtn.addEventListener("click", toggle);
// var toggle = true;
// function toggle(){

//     if(toggle == true){
//         home.style.top = "100vh"
//         strategy.style.top = "100vh"
//         design.style.top = "100vh"
//         service.style.top = "100vh"
//         menuBtn.style.border = "2px solid black"
//         menuBtn.style.background = "rgba(255, 255, 255, 0.5)"
//         menuLine[0].style.transform = "rotate(45deg)"
//         menuLine[0].style.top = "20px"
//         menuLine[0].style.width = "28px"
//         menuLine[0].style.background = "#000"
//         menuLine[1].style.transform = "rotate(-45deg)"
//         menuLine[1].style.bottom = "20px"
//         menuLine[1].style.width = "28px"
//         menuLine[1].style.background = "#000"
//         toggle = false;
//     } 
//     else {
//         home.style.top = "0"
//         strategy.style.top = "0"
//         design.style.top = "0"
//         service.style.top = "0"
//         menuBtn.style.border = "2px solid white"
//         menuBtn.style.background = "none"
//         menuLine[0].style.transform = "rotate(0deg)"
//         menuLine[0].style.top = "15px"
//         menuLine[0].style.width = "22px"
//         menuLine[0].style.background = "white"
//         menuLine[1].style.transform = "rotate(0deg)"
//         menuLine[1].style.bottom = "15px"
//         menuLine[1].style.width = "22px"
//         menuLine[1].style.background = "white"
//         toggle = true;
//     }
// }
// menuBtn.addEventListener("mouseover" , function(){
//     menuBtn.style.border = "2px solid black"
//     menuBtn.style.background = "rgba(255, 255, 255, 0.5)"
//     menuLine[0].style.background = "#000"
//     menuLine[1].style.background = "#000"
// })
// menuBtn.addEventListener("mouseout" , function(){
//     if(toggle == true){
//         menuBtn.style.border = "2px solid white"
//         menuBtn.style.background = "none"
//         menuLine[0].style.background = "white"
//         menuLine[1].style.background = "white"
//     }
// }) 

// // 홈 버튼
// home.addEventListener("click" , closeMenu)

// // 전략 버튼
// strategy.addEventListener("click" , closeMenu)

// // 디자인 버튼
// design.addEventListener("click" , closeMenu)

// // 서비스 버튼
// service.addEventListener("click" , closeMenu)

// function closeMenu(){
//     home.style.top = "0"
//     strategy.style.top = "0"
//     design.style.top = "0"
//     service.style.top = "0"
//     menuBtn.style.border = "2px solid white"
//     menuBtn.style.background = "none"
//     menuLine[0].style.transform = "rotate(0deg)"
//     menuLine[0].style.top = "15px"
//     menuLine[0].style.width = "22px"
//     menuLine[0].style.background = "white"
//     menuLine[1].style.transform = "rotate(0deg)"
//     menuLine[1].style.bottom = "15px"
//     menuLine[1].style.width = "22px"
//     menuLine[1].style.background = "white"
//     toggle = true;
// }