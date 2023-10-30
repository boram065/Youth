var viewContainer = document.querySelector(".scrollable-view");
var songTitleDiv = document.querySelector(".songTitle p");
var currentAudio = null;

// 모든 노래의 제목을 viewContainer에 추가
for (var i = 0; i < song.length; i++) {
  let songTitle = song[i].title; // let 키워드를 사용하여 songTitle을 블록 범위로 가져옵니다
  var songPath = song[i].song;
  var audio = new Audio(songPath);
  var titleDiv = document.createElement("div");
  titleDiv.textContent = songTitle;
  titleDiv.classList.add("view");

  titleDiv.addEventListener("click", (function (audio, titleDiv, songTitle) {
    return function () {
      if (currentAudio) {
        currentAudio.pause();
      }
      audio.play();
      currentAudio = audio;
      songTitleDiv.textContent = songTitle;
    };
  })(audio, titleDiv, songTitle));
  
  viewContainer.appendChild(titleDiv);
}