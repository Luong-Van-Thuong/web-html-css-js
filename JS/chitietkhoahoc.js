document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html')) {
        // Logic cho index.html
        const image1 = document.getElementById('knb1');
        const image2 = document.getElementById('knb2');
        const image3 = document.getElementById('knb3');
        image1.addEventListener('click', () => {
            // Lưu tên file vào localStorage
            localStorage.setItem('contentFile', 'content.txt');
            // Chuyển hướng sang content.html
            window.location.href = 'content.html';
        });

        image2.addEventListener('click', () => {
            console.log('hello');
            // Lưu tên file vào localStorage
            localStorage.setItem('contentFile', 'content2.txt');
            // Chuyển hướng sang content.html
            window.location.href = 'content.html';
        });
        

        image3.addEventListener('click', () => {
            console.log('hello');
            // Lưu tên file vào localStorage
            localStorage.setItem('contentFile', 'content3.txt');
            // Chuyển hướng sang content.html
            window.location.href = 'content.html';
        });
        
    } else if (currentPage.includes('content.html')) {
        // Logic cho content.html
        const contentFile = localStorage.getItem('contentFile');
        if (contentFile) {
            updateContentFromFile(contentFile);
            localStorage.removeItem('contentFile'); // Xóa dữ liệu sau khi sử dụng
        }
    }
});




// Hàm đọc file content2.txt và xử lý nội dung
async function updateContentFromFile(content) {
    try {

        // Đọc file content2.txt
        const response = await fetch(content);
        const text = await response.text();
        // Tách nội dung thành mảng dựa trên dấu "\"
        const contentArray = text.split('\\');
        // Lặp qua các id từ contentfiletxt1 đến contentfiletxt46
        for (let i = 1; i <= 49; i++) {
            const element = document.getElementById(`contentfiletxt${i}`);
            if (element && contentArray[i - 1]) {
                element.textContent = contentArray[i - 1].trim(); // Cập nhật nội dung
            }   
            if(i === 47){
                const element2 = document.getElementById('playButton');   
                 console.log(element2)            
                if (element2 && contentArray[i - 1]) {
                    element2.src = contentArray[i - 1].trim();
                    console.log('47')

                }
            }     
        }
        
    } catch (error) {
        console.error('Error reading or updating content:', error);
    }
}


