const menu = document.querySelector(".menu");
const navItems = document.querySelector(".nav-items");
menu.addEventListener('click', function(){
    navItems.classList.toggle("show-items")
})

// const sliderWrappr = document.querySelector(".slider-wrapper");
// const sliderItem = document.querySelectorAll(".sliderItem")

// const btnPrev= document.querySelector(".btn-prev");
// const btnNext= document.querySelector(".btn-next");

// btnPrev.addEventListener('click', ()=> {
//     console.log("clicked")
// })
// btnNext.addEventListener('click', ()=> {
//     console.log("clicked")
// })

// let currentSlide = 0;

// function handleNext(){
//     currentSlide += 1;
//     sliderWrappr.style.transform = `translateX(${currentSlide * -100})`
// }