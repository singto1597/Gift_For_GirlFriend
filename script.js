// Fade intro and show main
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').classList.add('show');
  }, 3000); // 3 วินาทีก่อนเข้า Main
});

// Slideshow auto switch
let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000); // เปลี่ยนรูปทุก 5 วินาที
