var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");

function nextFrame() {
    screen1.style.display = "none";
    screen2.style.display = "block";
}

function preFrame() {
    screen1.style.display = "none";
    screen2.style.display = "block";
}