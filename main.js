  const menubardt = document.getElementById('menubar-dt');
  const menubardt2 = document.getElementById('navbar');
  const navtrai = document.getElementById('navb02');
  const btntraiElements = document.getElementsByClassName('buttontrai');
  const btnphaiElements = document.getElementsByClassName('buttonphai');
  const section1 = document.getElementById('head1');
  const section2 = document.getElementById('head2');
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
    setTimeout(changeHead1, 1000);
  }

function changesizescreen(){
  document.addEventListener('DOMContentLoaded', () => {
    const headElement2 = document.getElementById('head2');
    headElement2.style.display = 'none'; // Ẩn head2 ban đầu
    // Gọi hàm changeHead1 lần đầu tiên sau 1 giây để bắt đầu quá trình chuyển đổi
     setTimeout(changeHead1, 1000);
  });  
}

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

function applyStylesBasedOnWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767) {
    // changesizescreen();
    // Có thể bạn muốn loại bỏ hoặc thêm/sửa đổi event listeners ở đây nếu cần
  } else if (screenWidth >= 768 && screenWidth <= 1190) {
    // changesizescreen();
    // Tương tự, xử lý event listeners nếu cần
  } else if (screenWidth >= 1200) {
    // Không cần gọi lại buttontrai() và buttonphai() ở đây nữa
    // Vì event listeners đã được gắn một lần khi trang tải
  }
}

  menubardt.addEventListener('click', function() {
    menubardt2.style.display = 'flex';
  });

  navtrai.addEventListener('click', function() {
    menubardt2.style.display = 'none';
  });
