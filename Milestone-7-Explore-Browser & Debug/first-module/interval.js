console.log(1)
console.log(2)
let num = 0;
const intervalId = setInterval(()=>{
    // num++ dila aga 0 log korba tarpor 1 kora baraba 
    // ++num dila aga + kora nia dakaba
    console.log(num++);
    if(num === 10){
        clearInterval(intervalId)
    }
},1000)
console.log(4)
console.log(5)
console.log(6)