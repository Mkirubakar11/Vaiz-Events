/* =========================
PRODUCT PAGE
========================= */

function openProduct(name,price,image){

localStorage.setItem("name",name)
localStorage.setItem("price",price)
localStorage.setItem("image",image)

window.location="product.html"
}

/* load product */

document.getElementById("name") &&
(document.getElementById("name").innerText=
localStorage.getItem("name"))

document.getElementById("price") &&
(document.getElementById("price").innerText=
"₹"+localStorage.getItem("price"))

document.getElementById("img") &&
(document.getElementById("img").src=
localStorage.getItem("image"))


/* =========================
SLIDER
========================= */

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

function showSlide(){
if(slides){
slides.style.transform = `translateX(-${index * 100}%)`;
}
}

/* next button */

document.querySelector(".next") &&
document.querySelector(".next").addEventListener("click",()=>{
index++;
if(index >= images.length){
index = 0;
}
showSlide();
});

/* prev button */

document.querySelector(".prev") &&
document.querySelector(".prev").addEventListener("click",()=>{
index--;
if(index < 0){
index = images.length - 1;
}
showSlide();
});

/* auto slide */

setInterval(()=>{
index++;
if(index >= images.length){
index = 0;
}
showSlide();
},4000);


/* swipe mobile */

let startX = 0;

slides && slides.addEventListener("touchstart",(e)=>{
startX = e.touches[0].clientX;
});

slides && slides.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX;

if(startX > endX){
index++;
}else{
index--;
}

if(index < 0) index = images.length - 1;
if(index >= images.length) index = 0;

showSlide();

});