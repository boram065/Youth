// 화면에 보여지는지 여부를 확인하는 함수
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    var h2Element = document.querySelector('.container2 h2');
    if (isElementInViewport(h2Element)) {
        // 화면에 보일 때 투명도를 1로 설정하여 나타나게 함
        h2Element.style.opacity = 1;
        // 혹은 위치를 변경하여 나타나게 할 수도 있음
        // h2Element.style.transform = 'translateY(0)';
    }
});