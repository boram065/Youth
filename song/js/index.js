var viewContainer = document.querySelector(".scrollable-view");
var songTitleDiv = document.querySelector(".songTitle p");
var currentAudio = null;

// 모든 노래의 제목을 viewContainer에 추가
for (var i = 0; i < song.length; i++) {
  let songTitle = song[i].title; // let 키워드를 사용하여 songTitle을 블록 범위로 가져옵니다
  var songPath = song[i].song;
  var audio = new Audio(songPath);
  var titleDiv = document.createElement("div");
  titleDiv.textContent = songTitle.replace(/♬/g, '');
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

var searchInput = document.querySelector('.search .input');
searchInput.addEventListener('input', function() {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredSongs;

    if (searchTerm === '') {
        filteredSongs = song;
    } else {
        filteredSongs = song.filter(function(item) {
            return item.title.toLowerCase().includes(searchTerm);
        });
    }

    renderFilteredSongs(filteredSongs);
});

function renderFilteredSongs(filteredSongs) {
    viewContainer.innerHTML = '';

    filteredSongs.forEach(function(item) {
        var songDiv = document.createElement('div');
        songDiv.textContent = item.title.replace(/♬/g, '');
        songDiv.classList.add('view');

        songDiv.addEventListener('click', function() {
            if (currentAudio) {
                currentAudio.pause();
            }
            var audio = new Audio(item.song);
            audio.play();
            currentAudio = audio;
            songTitleDiv.textContent = item.title;
        });

        viewContainer.appendChild(songDiv);
    });
}