const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar');


menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});