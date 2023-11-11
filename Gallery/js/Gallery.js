var video = document.querySelector('.main-video');
    
    // 동영상 재생 속도를 0.5로 설정합니다.
video.playbackRate = 0.5;

$(document).ready(function() {
    $(".img-box").on("click", function() {
        var imageUrl = $(this).attr("src");
        $(".popup-img").attr("src", imageUrl);
        $(".popup").fadeIn();
    });

    $(".popup").on("click", function() {
        $(this).fadeOut();
    });

    $(".popup-content").on("click", function(e) {
        e.stopPropagation(); // 팝업 내부를 클릭해도 팝업이 닫히지 않도록 이벤트 전파 중지
    });
});