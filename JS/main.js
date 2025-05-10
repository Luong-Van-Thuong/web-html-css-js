const menubardt = document.getElementById('menubar-dt');
const menubardt2 = document.getElementById('navbar');
const navtrai = document.getElementById('navb02');
const btntraiElements = document.getElementsByClassName('buttontrai');
const btnphaiElements = document.getElementsByClassName('buttonphai');
const section1 = document.getElementById('head1');
const section2 = document.getElementById('head2');

document.addEventListener('DOMContentLoaded', () => {
  function toggleSections() {
    if (section1.style.display === 'none') {
      section1.style.display = 'flex';
      section2.style.display = 'none';
    } else {
      section1.style.display = 'none';
      section2.style.display = 'flex';
    }
  }

  function changeHead1() {
    const headElement = document.getElementById('head1');
    const headElement2 = document.getElementById('head2');
    if (headElement.style.display === 'none') {
      headElement.style.display = 'flex';
      headElement2.style.display = 'none';
    } else {
      headElement.style.display = 'none';
      headElement2.style.display = 'flex';
    }
    // Gọi lại hàm changeHead1 sau một khoảng thời gian để tạo hiệu ứng lặp lại
    setTimeout(changeHead1, 3000);
  }

  function changesizescreen() {
    const headElement2 = document.getElementById('head2');
    headElement2.style.display = 'none';
    setTimeout(changeHead1, 3000);
  }

  function applyStylesBasedOnWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1190) { // Áp dụng cho cả mobile và tablet
      changesizescreen();
    }
  }
  // Gọi hàm applyStylesBasedOnWidth khi trang được tải
  applyStylesBasedOnWidth();

  // Gắn event listener cho nút trái (nếu có)
  if (btntraiElements.length > 0) {
    btntraiElements[0].addEventListener('click', toggleSections);
  }

  // Gắn event listener cho nút phải (nếu có)
  if (btnphaiElements.length > 0) {
    btnphaiElements[0].addEventListener('click', toggleSections);
  }

  menubardt.addEventListener('click', function() {
    menubardt2.style.display = 'flex';
    console.log('menubardt2.style.display = flex');
  });

  navtrai.addEventListener('click', function() {
    menubardt2.style.display = 'none';
  });

  function toggleSections() {
    if (section1.style.display === 'none') {
      section1.style.display = 'flex';
      section2.style.display = 'none';
    } else {
      section1.style.display = 'none';
      section2.style.display = 'flex';
    }
  }
  
  // Gắn event listener cho nút trái (nếu có)
  if (btntraiElements.length > 0) {
    btntraiElements[0].addEventListener('click', toggleSections);
  }
  
  // Gắn event listener cho nút phải (nếu có)
  if (btnphaiElements.length > 0) {
    btnphaiElements[0].addEventListener('click', toggleSections);
  }
});
