addEventListener("click", (e) => {
    e.preventDefault();
    const sideMenu = document.getElementById("sideMenu");
    const btn = document.getElementById("menuBtn");
    if((sideMenu.contains(e.target) ? false : !btn.contains(e.target)) && sideMenu.className === "menus") {
        toggleMenu();
    }
});

function toggleMenu(){
    let sideMenu = document.getElementById("sideMenu");
    if(sideMenu.className !== "menus") {
        sideMenu.className = "menus";
    } else {
        sideMenu.className = "menus hidden";
    }
}

var carouselIndex = 0;
const carouselImgs = ["./imgs/content-2-img.jpg", "./imgs/bg1.png", "./imgs/bg2.png", "./imgs/bg3.png", "./imgs/bg4.png"];
function carouselLeft() {
    let carouselRadios = document.getElementById("carouselRadios").children;
    let carouselContent = document.getElementById("carouselContent");
    
    carouselRadios[carouselIndex].className = "radio";
    if(carouselIndex === 0) {
        carouselIndex = carouselRadios.length - 1;
    } else {
        carouselIndex--;
    }
    carouselRadios[carouselIndex].className = "radio active";
    carouselContent.src = carouselImgs[carouselIndex];
}
function carouselRight() {
    let carouselRadios = document.getElementById("carouselRadios").children;
    let carouselContent = document.getElementById("carouselContent");
    
    carouselRadios[carouselIndex].className = "radio";
    if(carouselIndex === carouselRadios.length - 1) {
        carouselIndex = 0;
    } else {
        carouselIndex++;
    }
    carouselRadios[carouselIndex].className = "radio active";
    carouselContent.src = carouselImgs[carouselIndex];
}