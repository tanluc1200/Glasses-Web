const searchForm = document.querySelector(".search-form");
const btnSearch = document.querySelector("#search-btn");
btnSearch.onclick = () => {
    searchForm.classList.toggle("active");
};
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");
menuBtn.onclick = () => {
    navBar.classList.toggle("active");
};
const slides = document.querySelectorAll(".home .slide");
let index = 0;
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}
