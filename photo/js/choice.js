function nextFrame() {
    var screen1 = document.querySelector(".screen1");
    var screen2 = document.querySelector(".screen2");
    screen1.style.display = "none";
    screen2.style.display = "block";
}

function preFrame() {
    var screen1 = document.querySelector(".screen1");
    var screen2 = document.querySelector(".screen2");
    screen1.style.display = "block";
    screen2.style.display = "none";
}