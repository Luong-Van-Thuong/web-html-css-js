function showItems(){
    document.addEventListener('DOMContentLoaded', () => {
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

function footerudemyan(){

    document.addEventListener('DOMContentLoaded', () => {
        const explore = document.getElementById('exploretopskills');
        const content = document.getElementById('content-exploretopskills');
        const tren = document.getElementById('hien');
        const duoi = document.getElementById('an');
        explore.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(content);
            if (computedStyle.display === 'none') {
                content.style.display = 'flex';
                tren.style.display = 'flex';
                duoi.style.display = 'none';
            }
            else {
                content.style.display = 'none';
                tren.style.display = 'none';
                duoi.style.display = 'flex';
            }

        });
    });
}

function footerudemyan1(){
    document.addEventListener('DOMContentLoaded', () => {
        const explore = document.getElementById('exploretopskills1');
        const content = document.getElementById('content-exploretopskills1');
        const tren = document.getElementById('hien1');
        const duoi = document.getElementById('an1');
        explore.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(content);
            if (computedStyle.display === 'none') {
                content.style.display = 'flex';
                tren.style.display = 'flex';
                duoi.style.display = 'none';
            }
            else {
                content.style.display = 'none';
                tren.style.display = 'none';
                duoi.style.display = 'flex';
            }

        });
    });
}
const dem2 = 0;
function displayfooter(haha2, haha){
    haha2.addEventListener('click', () =>{
        haha.style.display = "flex"
    });
    
};

function footerudemyan2(){
    document.addEventListener('DOMContentLoaded', () => {
        const explore = document.getElementById('exploretopskills2');
        const content = document.getElementById('content-exploretopskills2');
        const tren = document.getElementById('hien2');
        const duoi = document.getElementById('an2');
        explore.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(content);
            if (computedStyle.display === 'none') {
                content.style.display = 'flex';
                tren.style.display = 'flex';
                duoi.style.display = 'none';
            }
            else {
                content.style.display = 'none';
                tren.style.display = 'none';
                duoi.style.display = 'flex';
            }

        });
    });
}


function footerudemyan3(){
    document.addEventListener('DOMContentLoaded', () => {
        const explore = document.getElementById('exploretopskills3');
        const content = document.getElementById('content-exploretopskills3');
        const tren = document.getElementById('hien3');
        const duoi = document.getElementById('an3');
        explore.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(content);
            if (computedStyle.display === 'none') {
                content.style.display = 'flex';
                tren.style.display = 'flex';
                duoi.style.display = 'none';
            }
            else {
                content.style.display = 'none';
                tren.style.display = 'none';
                duoi.style.display = 'flex';
            }
        });
    });
}



function applyStylesBasedOnWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
        footerudemyan();
        footerudemyan1();
        footerudemyan2();
        footerudemyan3();      
    } else if (screenWidth >= 768 && screenWidth <= 1190) {
        footerudemyan();
        footerudemyan1();
        footerudemyan2();
        footerudemyan3();
    } else if (screenWidth >= 1200) {
        showItems();
        showItems1();
    }
  }

function playvideo(){
    const videoElement = document.querySelector('.whvideo'); // Chọn thẻ video bằng class
    const playButton = document.getElementById('playButton');
    if (videoElement && playButton) {
        playButton.addEventListener('click', function() {
            videoElement.play(); // Gọi phương thức play() trên thẻ video
            console.log("Chay video");
            playButton.style.display = 'none'; // Ẩn nút Play khi video chạy
        });

        // Không cần thiết phải lắng nghe sự kiện 'play' trên nút playButton
        videoElement.addEventListener('play', function() {
            playButton.style.display = 'none'; // Ẩn nút Play khi video thực sự bắt đầu phát (nếu có tương tác khác)
        });
    }
}

function showless(){
    const showlessButton = document.getElementById('showless');
    const contentanElements = document.getElementsByClassName('contentan');
        showlessButton.addEventListener('click', function(){
        if (contentanElements.length > 0) {
            Array.from(contentanElements).forEach(function(element){ // Chuyển đổi sang Array và sử dụng forEach
            const computedStyle = window.getComputedStyle(element);
            if(computedStyle.display === 'none' ){
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        });
        }
    });
}
// Dung ham theo kieu chuyen bien
// click, hien, down, up
function displaysection(var1, var2, var3, var4){    
    var1.addEventListener('click', function(){
        const computedStyle = window.getComputedStyle(var2);        
        if(computedStyle.display === 'none' ){
            var2.style.display = 'flex';
            var3.style.display = 'none';
            var4.style.display = 'flex';
        } else {
            var2.style.display = 'none';
            var3.style.display = 'flex';
            var4.style.display = 'none';
        }
    });    
}
// click, show, down, up
function showallcoursecontent(coursecontent, showcoursecontent, down, up){
    coursecontent.addEventListener('click', function(){
        if(showcoursecontent.length > 0){
            Array.from(showcoursecontent).forEach(function(element){
                const cstyle = window.getComputedStyle(element);
                if(cstyle.display === 'none'){
                    element.style.display = 'flex';
                    down.style.display = 'none';
                    up.style.display = 'flex';
                } else {
                    element.style.display = 'none';
                    down.style.display = 'flex';
                    up.style.display = 'none';
                }
            });
        }
        
    });
}

// Gọi hàm playvideo để thiết lập các event listener sau khi DOM được tải
document.addEventListener('DOMContentLoaded', playvideo);
document.addEventListener('DOMContentLoaded', showless);
applyStylesBasedOnWidth();
document.addEventListener('DOMContentLoaded', () =>{
    // Course content 1
    const ctindex0 = document.getElementById('contentctindex');     
    const content1 = document.getElementById('coursect1');
    const content2 = document.getElementById('coursect2');    
    const up = document.getElementById('indexup');
    const down = document.getElementById('indexdown'); 
    const up1 = document.getElementById('indexup1');
    const down1 = document.getElementById('indexdown1');   
    const showcoursecontent = document.getElementsByClassName('hiencoursecontent');
    // Course content 2
    const cct20 = document.getElementById('coursecontent20');     
    const cct21 = document.getElementById('coursecontent21');
    const cct22 = document.getElementById('coursecontent22');   
    const cct23 = document.getElementById('coursecontent23');
    const cct24 = document.getElementById('coursecontent24');
    const up21 = document.getElementById('indexup21');
    const down21 = document.getElementById('indexdown21'); 
    const up22 = document.getElementById('indexup22');
    const down22 = document.getElementById('indexdown22');  
    const up23 = document.getElementById('indexup23');
    const down23 = document.getElementById('indexdown23');
    const showcoursecontent2 = document.getElementsByClassName('hiencoursecontent2');
    // Call function
    showallcoursecontent(ctindex0, showcoursecontent, down, up);
    displaysection(content1, content2, down1, up1);    
    showallcoursecontent(cct20, showcoursecontent2, down21, up21);
    displaysection(cct21, cct22, down22, up22);
    displaysection(cct23, cct24, down23, up23);
});