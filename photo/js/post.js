// var submit = document.getElementById('submitButton');
// submit.onclick = showImage;     // Submit 버튼 클릭시 이미지 보여주기

// function showImage() {
//     var newImage = document.getElementById('image-show').lastElementChild;
//     newImage.style.visibility = "visible";
    
//     document.getElementById('image-upload').style.visibility = 'hidden';

//     document.getElementById('fileName').textContent = null;     // 기존 파일 이름 지우기
// }

// function loadFile(input) {
//     var file = input.files[0];


//     var newImage = new Image(); // 새 이미지 객체 생성
//     newImage.onload = function() {
//         var container = document.getElementById('image-show');
//         container.innerHTML = ''; // 기존 이미지 삭제
//         container.appendChild(newImage); // 새 이미지 추가
//     };
//     newImage.src = URL.createObjectURL(file);
//     newImage.style.width = "70%";
//     newImage.style.height = "70%";
//     newImage.style.objectFit = "contain";
// }

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