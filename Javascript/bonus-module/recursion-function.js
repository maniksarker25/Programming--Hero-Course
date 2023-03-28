// Recursion Function

/* function ka function ar modda call koranor niyom */

// Without function call example with sumation 1-5;
 /*    let sum = 0;
    for(let i = 5; i >= 1; i-- ){
        sum = sum + i;
       
    }
    
    console.log(sum);
 */

// function call in a function
function sum(i){

    if(i == 1){
        return  1;
    }
    return sum = i + sum(i-1);
}
const result = sum(5);
console.log(result);

/* 
    5 + sum(i-5) = 5 + sum(4);
    5 + 4 + sum(4-1) = 5 + 4 + sum(3);
    5 + 4 + 3 + sum(3-1) = 5 + 4 + 3 + sum(2);
    5 + 4 + 3 + 2 + sum(2-1) = 5 + 4 + 3 + 2 + 1

 */
