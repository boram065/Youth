var viewContainer = document.querySelector(".scrollable-view");
var songTitleDiv = document.querySelector(".songTitle p");
var circleDiv = document.querySelector(".a");
var noSearch = document.querySelector(".nosearh");
var currentAudio = null;

// 모든 노래의 제목을 viewContainer에 추가
for (var i = 0; i < song.length; i++) {
  let songTitle = song[i].title; // let 키워드를 사용하여 songTitle을 블록 범위로 가져옵니다
  var songPath = song[i].song;
  var audio = new Audio(songPath);
  var titleDiv = document.createElement("div");
  titleDiv.textContent = songTitle.replace(/♬/g, '');
  titleDiv.classList.add("view");
  
  circleDiv.style.animationPlayState = 'paused'; 

  titleDiv.addEventListener("click", (function (audio, titleDiv, songTitle) {
    return function () {
      if (currentAudio) {
        currentAudio.pause();
        circleDiv.style.animationPlayState = 'paused'; 
      }
      audio.play();
      currentAudio = audio;
      songTitleDiv.textContent = songTitle;
      
      circleDiv.style.animationPlayState = 'running'; 
    };
  })(audio, titleDiv, songTitle));
  
  viewContainer.appendChild(titleDiv);
}

// for (var i = 0; i < song.length; i++) {
//   let songTitle = song[i].title;
//   var songPath = song[i].song;
//   var audio = new Audio(songPath);
//   var titleDiv = document.createElement("div");
//   titleDiv.textContent = songTitle.replace(/♬/g, '');
//   titleDiv.classList.add("view");

//   titleDiv.addEventListener("click", function () {
//     if (titleDiv.classList.contains("selected")) {
//       // 이미 선택된 상태인 경우 노래를 멈추고 선택 클래스를 제거함
//       audio.pause();
//       titleDiv.classList.remove("selected");
//         circleDiv.style.animationPlayState = 'paused';
//         songTitleDiv.style.animationPlayState = 'paused'; 
//     } else {
//       // 선택되지 않은 경우 다른 노래를 재생 중이면 멈추고 선택 클래스를 추가한 뒤 노래를 재생함
//       if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.parentElement.classList.remove("selected");
//         circleDiv.style.animationPlayState = 'paused'; 
//         songTitleDiv.style.animationPlayState = 'paused'; 
//       }
//       audio.play();
//       currentAudio = audio;
//       titleDiv.classList.add("selected");
//       // 기존에 선택된 노래의 제목을 초기화하고 현재 노래의 제목을 설정함
//       songTitleDiv.textContent = songTitle;
//       circleDiv.style.animationPlayState = 'running'; 
//       songTitleDiv.style.animationPlayState = 'running'; 
//     }
//   });

//   viewContainer.appendChild(titleDiv);
// }

// var searchInput = document.querySelector('.search .input');
// searchInput.addEventListener('input', function() {
//     var searchTerm = searchInput.value.toLowerCase();
//     var filteredSongs;

//     if (searchTerm === '') {
//         filteredSongs = song;
//     } else {
//         filteredSongs = song.filter(function(item) {
//             return item.title.toLowerCase().includes(searchTerm);
//         });
//     }

//     renderFilteredSongs(filteredSongs);
// });

// function renderFilteredSongs(filteredSongs) {
//     viewContainer.innerHTML = '';
//     filteredSongs.forEach(function(item) {
//         var songDiv = document.createElement('div');
//         songDiv.textContent = item.title.replace(/♬/g, '');
//         songDiv.classList.add('view');

//         songDiv.addEventListener('click', function() {
//             if (currentAudio) {
//                 currentAudio.pause();
//             }
//             var audio = new Audio(item.song);
//             audio.play();
//             currentAudio = audio;
//             songTitleDiv.textContent = item.title;
//         });

//         viewContainer.appendChild(songDiv);
//     });
// }

searchInput.addEventListener('input', function() {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredSongs = song.filter(function(item) {
      return item.title.toLowerCase().includes(searchTerm);
  });

  // 필터링된 노래를 화면에 출력하거나 검색결과 없음 메시지를 보여줌
  if (filteredSongs.length > 0) {
      renderFilteredSongs(filteredSongs);
      nosearch.style.display = 'none'; // 결과가 있으면 메시지를 숨김
  } else {
      viewContainer.innerHTML = ''; // 결과가 없으면 화면을 비움
      nosearch.style.display = 'block'; // 결과 없음 메시지를 보여줌
  }
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