let sideMenuBtn = document.querySelector(".sideMenuBtn");
let menu = document.querySelector("#menu");
sideMenuBtn.addEventListener("click",function (){
 menu.classList.add("on");

});
menu.addEventListener("click",function(e){
  if(e.target == menu) {
    menu.classList.remove("on");
  }
});


let slides = document.querySelectorAll(".pagination button");
let slideBtns = document.querySelector(".slider ul");
for (let i =0; i < slides.length; i++) {
  slides[i].addEventListener("click", function () {
    slideBtns.style.transform = `translate(${-100 * i}vw)`;  
  });
}

let modalBack = document.querySelector(".modalBack");
let closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", function(){
modalBack.style.display ="none";
})