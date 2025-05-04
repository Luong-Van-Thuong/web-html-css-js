function showItems(){
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container1');
        const btntraiElements = document.getElementsByClassName('buttontrai1');
        const btnphaiElements = document.getElementsByClassName('buttonphai1');
        const item = document.querySelectorAll('.item');
        const itemsShow = 4;
        let startIndex = 0;

        function showItems() {
        item.forEach((item, index) => {
            if (index >= startIndex && index < startIndex + itemsShow) {
            item.style.display = 'flex';
            } else {
            item.style.display = 'none';
            }
        });
        // Tat nut trai
        if (startIndex === 0) {
            btntraiElements[0]?.classList.add('disabled');
        } else {
            btntraiElements[0]?.classList.remove('disabled');
        }
        //Tat nut phai
        if (startIndex + itemsShow >= item.length) {
            btnphaiElements[0]?.classList.add('disabled');
        } else {
            btnphaiElements[0]?.classList.remove('disabled');
        }
        }

        // Kich hoat su kien
        btnphaiElements[0]?.addEventListener('click', () => {
        if (startIndex + itemsShow < item.length) {
            startIndex++;
            showItems();
        }
        console.log(startIndex);
        });

        btntraiElements[0]?.addEventListener('click', () => {
        if (startIndex > 0) {
            startIndex--;
            showItems();
        }
        });

        // Hiển thị ban đầu


        showItems();    
    });

}

function showItems1(){
    document.addEventListener('DOMContentLoaded', () => {
        const btntraiElements = document.getElementsByClassName('buttontrai2');
        const btnphaiElements = document.getElementsByClassName('buttonphai2');
        const item = document.querySelectorAll('.item2');
        const itemsShow = 4;
        let startIndex = 0;

        function showItems1() {
        item.forEach((item, index) => {
            if (index >= startIndex && index < startIndex + itemsShow) {
            item.style.display = 'flex';
            } else {
            item.style.display = 'none';
            }
        });
        // Tat nut trai
        if (startIndex === 0) {
            btntraiElements[0]?.classList.add('disabled');
        } else {
            btntraiElements[0]?.classList.remove('disabled');
        }
        //Tat nut phai
        if (startIndex + itemsShow >= item.length) {
            btnphaiElements[0]?.classList.add('disabled');
        } else {
            btnphaiElements[0]?.classList.remove('disabled');
        }
        }

        // Kich hoat su kien
        btnphaiElements[0]?.addEventListener('click', () => {
        if (startIndex + itemsShow < item.length) {
            startIndex++;
            showItems1();
        }
        console.log(startIndex);
        });

        btntraiElements[0]?.addEventListener('click', () => {
        if (startIndex > 0) {
            startIndex--;
            showItems1();
        }
        });
        showItems1();    
    });

}

function applyStylesBasedOnWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      
    } else if (screenWidth >= 768 && screenWidth <= 1190) {
      

    } else if (screenWidth >= 1200) {
        showItems();
        showItems1();
    }
  }
  // Gọi hàm applyStylesBasedOnWidth khi trang được tải
  applyStylesBasedOnWidth();