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


const carouselImgs = ["./imgs/content-2-img.jpg", "./imgs/bg1.png", "./imgs/bg2.png", "./imgs/bg3.png", "./imgs/bg4.png"];
var carouselIndex = 0;
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
function radioClick(index) {
    let carouselRadios = document.getElementById("carouselRadios").children;
    let carouselContent = document.getElementById("carouselContent");
    
    carouselRadios[carouselIndex].className = "radio";
    carouselIndex = index;
    carouselRadios[index].className = "radio active";
    carouselContent.src = carouselImgs[index];
}
function initImg() {
    let carouselContent = document.getElementById("carouselContent");
    const carouselRadios = document.getElementById("carouselRadios");
    for (let i = 0; i < carouselImgs.length; i++) {
        let radio = document.createElement("div");
        radio.className = i === 0 ? "radio active" : "radio";
        radio.addEventListener("click", () => radioClick(i));
        carouselRadios.appendChild(radio);
    }
    if(carouselImgs.length > 0) {
        carouselContent.src = carouselImgs[0];
    }
}

initImg();