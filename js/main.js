// Pilih tombol hamburger dan navigasi
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar');

// Tambahkan event listener untuk 'click'
menuToggle.addEventListener('click', function() {
    // Toggle class 'active' pada navigasi
    nav.classList.toggle('active');
});