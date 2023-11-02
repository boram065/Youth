function loadFile(input, imageShowId) {
    var file = input.files[0];
    var newImage = new Image(); // 새 이미지 객체 생성
    newImage.onload = function() {
        var container = document.getElementById(imageShowId);
        container.innerHTML = ''; // 기존 이미지 삭제
        container.appendChild(newImage); // 새 이미지 추가
    };
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.objectFit = "contain";
}

function replaceText() {
    var textarea = document.getElementById('input');
    var text = textarea.value;

    text = text.replaceAll("가", "ㄱr");
    text = text.replaceAll("거", "つㅓ");
    text = text.replaceAll("게", "つㅓl");
    text = text.replaceAll("고", "ヱ");
    text = text.replaceAll("귀", "구l");
    text = text.replaceAll("ュ", "그");
    text = text.replaceAll("긔", "그i");
    text = text.replaceAll("기", "ブl");
    text = text.replaceAll("깨", "까l");
    text = text.replaceAll("나", "ㄴr");
    text = text.replaceAll("내", "Łй");
    text = text.replaceAll("냐", "レF");
    text = text.replaceAll("니", "LI");
    text = text.replaceAll("다", "⊂ト");
    text = text.replaceAll("당", "ㄷб");
    text = text.replaceAll("대", "ㄷН");
    text = text.replaceAll("댈", "달l");
    text = text.replaceAll("더", "て┤");
    text = text.replaceAll("때", "ㄸĦ");
    text = text.replaceAll("라", "ㄹΓ");
    text = text.replaceAll("랑", "己б");
    text = text.replaceAll("래", "㉣łı");
    text = text.replaceAll("랫", "랏l");
    text = text.replaceAll("리", "己l");
    text = text.replaceAll("마", "ㅁト");
    text = text.replaceAll("만", "口ざ");
    text = text.replaceAll("맘", "□占");
    text = text.replaceAll("매", "□Й");
    text = text.replaceAll("미", "ㅁı");
    text = text.replaceAll("바", "ㅂΓ");
    text = text.replaceAll("반", "ㅂĿ");
    text = text.replaceAll("비", "㉥ㅣ");
    text = text.replaceAll("사", "バr");
    text = text.replaceAll("상", "バ6");
    text = text.replaceAll("서", "nㅓ");
    text = text.replaceAll("세", "パㅔ");
    text = text.replaceAll("시", "んı");
    text = text.replaceAll("싸", "ᄊト");
    text = text.replaceAll("아", "ㅇr");
    text = text.replaceAll("애", "0H");
    text = text.replaceAll("야", "○F");
    text = text.replaceAll("이", "øł");
    text = text.replaceAll("에", "øłl");
    text = text.replaceAll("여", "øㅕ");
    text = text.replaceAll("와", "오ŀ");
    text = text.replaceAll("위", "우ι");
    text = text.replaceAll("의", "ºl");
    text = text.replaceAll("이", "○l");
    text = text.replaceAll("자", "ㅈΓ");
    text = text.replaceAll("잠", "叉占");
    text = text.replaceAll("장", "ㅈБ");
    text = text.replaceAll("즤", "즈ı");
    text = text.replaceAll("지", "ズl");
    text = text.replaceAll("짜", "ㅉr");
    text = text.replaceAll("차", "ㅊr");
    text = text.replaceAll("참", "え占");
    text = text.replaceAll("치", "ㅊł");
    text = text.replaceAll("카", "ㅋΓ");
    text = text.replaceAll("키", "ㅋı");
    text = text.replaceAll("타", "ㅌŀ");
    text = text.replaceAll("파", "ㅍr");
    text = text.replaceAll("피", "ㅍı");
    text = text.replaceAll("하", "㈛");
    text = text.replaceAll("한", "ㅎŁ");
    text = text.replaceAll("함", "ㅎ古");
    text = text.replaceAll("항", "ㆅБ");
    text = text.replaceAll("해", "ぁĦ");
    text = text.replaceAll("히", "ぁı");
    text = text.replaceAll("힝", "ㅎb");

    textarea.value = text;
}


var songIndex = 0; // 현재 재생 중인 노래의 인덱스
var isPlaying = false; // 노래가 재생 중인지 여부를 나타내는 변수
var audio = new Audio(); // 오디오 요소 생성

var songTitleDiv = document.querySelector('.song-title .title');
var playBtn = document.getElementById('playBtn');
var nextBtn = document.getElementById('nextBtn');
var backBtn = document.querySelector('.backBtn');
var progressBar = document.querySelector('.element');

function playSong(index) {
    var selectedSong = song[index];
    if (selectedSong) {
        songTitleDiv.textContent = selectedSong.title;
        audio.src = selectedSong.song;
        audio.play();
        isPlaying = true;
    }
}

function nextSong() {
    songIndex = Math.floor(Math.random() * song.length);
    playSong(songIndex);
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        songTitleDiv.style.animationPlayState = 'paused'; 
    } else {
        audio.play();
        songTitleDiv.style.animationPlayState = 'running'
    }
    isPlaying = !isPlaying;
}

function backSong() {
    songIndex = (songIndex - 1 + song.length) % song.length;
    playSong(songIndex);
}

// Play 버튼 클릭 시 재생/일시정지 토글
playBtn.addEventListener('click', playPause);

// Next 버튼 클릭 시 다음 노래 재생
nextBtn.addEventListener('click', nextSong);

// Back 버튼 클릭 시 이전 노래 재생
backBtn.addEventListener('click', backSong);




// 실행 안됨. 시간 나면 수정해보기
function makeDraggable(div) {
    let offsetX, offsetY, isDragging = false;

    div.addEventListener("mousedown", function(event) {
        isDragging = true;
        offsetX = event.clientX - div.getBoundingClientRect().left;
        offsetY = event.clientY - div.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;

            // 부모 요소의 경계 내에 있는지 확인
            const parentRect = div.parentElement.getBoundingClientRect();
            const maxX = parentRect.width - div.offsetWidth;
            const maxY = parentRect.height - div.offsetHeight;

            // 이미지의 위치를 설정하되, 부모 요소의 경계를 넘어가지 않도록 제한
            div.style.left = Math.min(maxX, Math.max(0, x)) + "px";
            div.style.top = Math.min(maxY, Math.max(0, y)) + "px";
        }
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });
}

// 각 이미지 컨테이너에 대해 드래그 핸들러 추가
const imageContainers = document.querySelectorAll(".image-show img");
imageContainers.forEach((container) => {
    makeDraggable(container);
});
audio.addEventListener('timeupdate', function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});
