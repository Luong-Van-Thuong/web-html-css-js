const container = document.querySelector('.container1');
let isDragging = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.cursor = 'grabbing'; // Thay đổi con trỏ chuột
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1; // Điều chỉnh tốc độ kéo
  container.scrollLeft = scrollLeft - walk;
});

// Xử lý cho thiết bị cảm ứng
container.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
  isDragging = false;
});

container.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

// Thêm kiểu con trỏ mặc định
container.style.cursor = 'grab';