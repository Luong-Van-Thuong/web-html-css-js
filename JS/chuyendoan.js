function chuyensection(){
    document.addEventListener('DOMContentLoaded', () => {
        const t1 = document.getElementById('title1');
        const t2 = document.getElementById('title2');
        const s1 = document.getElementById('sc1');
        const s2 = document.getElementById('sc2');
        t1.addEventListener('click', function() {
                s1.style.display = 'flex';
                s2.style.display = 'none';  
                t1.style.backgroundColor = '#DCDCDC';
                t2.style.backgroundColor = '#FFFFFF';  
        });
        t2.addEventListener('click', function() {
                s1.style.display = 'none';
                s2.style.display = 'flex';  
                t1.style.backgroundColor = '#FFFFFF';
                t2.style.backgroundColor = '#DCDCDC';  
                
        });
        
    });
}

chuyensection();