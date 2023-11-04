var viewContainer = document.querySelector(".scrollable-view");
var songTitleDiv = document.querySelector(".songTitle p");
var view = document.getElementsByClassName("view");
var currentAudio = null;

// 모든 노래의 제목을 viewContainer에 추가
for (var i = 0; i < song.length; i++) {
  let songTitle = song[i].title; // let 키워드를 사용하여 songTitle을 블록 범위로 가져옵니다
  var songPath = song[i].song;
  var audio = new Audio(songPath);
  var titleDiv = document.createElement("div");
  titleDiv.textContent = songTitle.replace(/♬/g, '');
  titleDiv.classList.add("view");

  // 오름차순으로 정렬
  song.sort(function (a, b) {
      if (a.year !== b.year) {
          return a.year - b.year;
      }
      return a.title.localeCompare(b.title);
  });

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

// 노래가 끝나면 자동으로 다음 노래로 넘어가기
var currentSongIndex = 0;
function playNextSong() {
    if (currentAudio) {
        currentAudio.pause();
    }

    if (currentSongIndex < song.length) {
        var songTitle = song[currentSongIndex].title;
        var songPath = song[currentSongIndex].song;
        var audio = new Audio(songPath);

        audio.addEventListener("ended", function () {
            currentSongIndex++; // 다음 노래 인덱스로 이동
            if (currentSongIndex < song.length) {
                var nextSongTitle = song[currentSongIndex].title;
                var nextSongPath = song[currentSongIndex].song;

                audio.src = nextSongPath;
                audio.load();
                audio.play();
                songTitleDiv.textContent = nextSongTitle;
                currentAudio = audio;
            }
        });

        audio.play();
        currentAudio = audio;
        songTitleDiv.textContent = songTitle;
    }
}

for (var i = 0; i < view.length; i++) {
  view[i].addEventListener("click", function (event) {
    // 클릭한 노래의 인덱스를 찾기
    var clickedTitle = event.target.textContent;
    var clickedIndex = song.findIndex(function (item) {
      return item.title.replace(/♬/g, '') === clickedTitle;
    });

    if (clickedIndex !== -1) {
      currentSongIndex = clickedIndex;
      playNextSong();
    }
  });
}