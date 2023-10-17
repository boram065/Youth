const navToggleI = nav_toggle.getElementsByTagName("i")[0]; //nav_toggle 요소안에 찾기
const navListUl = document.getElementsByClassName("nav-list")[0];
const firstNavItem = document.querySelector('.nav-item:first-child');
nav_toggle.onclick = () => {
    firstNavItem.style.display = 'none';
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    navListUl.classList.toggle("show-menu");
}