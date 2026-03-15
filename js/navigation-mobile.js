const icon = document.querySelector(".navigation__mobile-button");
icon.addEventListener("click", function () {
    icon.classList.toggle("active");
})
const menu = document.querySelector(".navigation__menu");

icon.addEventListener("click", function () {
    menu.classList.toggle("active");
})
menu.addEventListener("click", function () {
    menu.classList.toggle("active");
})
menu.addEventListener("click", function () {
    icon.classList.toggle("active");
})