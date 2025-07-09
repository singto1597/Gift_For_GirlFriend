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

// --- ตั้งค่าวันเกิดปีหน้า (ปี-เดือน-วัน) ---
const countdownDate = new Date("July 9, 2026 00:00:00").getTime();

// อัปเดตทุกๆ 1 วินาที
const x = setInterval(function() {

  // หาวันและเวลาปัจจุบัน
  const now = new Date().getTime();

  // ระยะห่างระหว่างวันเกิดกับเวลาปัจจุบัน
  const distance = countdownDate - now;

  // คำนวณเวลาสำหรับ วัน, ชั่วโมง, นาที, วินาที
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // แสดงผลใน element ที่มี id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // ถ้าหมดเวลาแล้ว ให้แสดงข้อความ
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎂 HAPPY BIRTHDAY! 🎂";
  }
}, 1000);