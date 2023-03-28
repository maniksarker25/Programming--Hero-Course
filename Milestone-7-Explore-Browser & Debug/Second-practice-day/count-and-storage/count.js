let count = 0;
const Count = () =>{
    const countValue = document.getElementById('count-value');
    count++;
    countValue.innerText = count;
    localStorage.setItem('count', count);
    

}

const showCount = () =>{
    const countValue = document.getElementById('count-value')
    const storedCount = localStorage.getItem('count');
    countValue.innerText = storedCount;
    count = storedCount;

}
showCount()