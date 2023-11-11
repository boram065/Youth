// 화면에 보여지는지 여부를 확인하는 함수
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


window.addEventListener('scroll', () => {
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    const container4 = document.querySelector('.container4');
    const container2Top = container2.offsetTop;
    const container3Top = container3.offsetTop;
    const container4Top = container4.offsetTop;

    // 스크롤 위치에 따라 클래스 추가/제거
    if (window.scrollY > container2Top - window.innerHeight / 2) {
        container2.classList.add('visible');
    } else {
        container2.classList.remove('visible');
    }

    if (window.scrollY > container3Top - window.innerHeight / 2) {
        container3.classList.add('visible');
    } else {
        container3.classList.remove('visible');
    }

    if (window.scrollY > container4Top - window.innerHeight / 2) {
        container4.classList.add('visible');
    } else {
        container4.classList.remove('visible');
    }
});