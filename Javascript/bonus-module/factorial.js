// find factorial of 5 to use recursion function
/* let factorial = 1;
for(i = 1; i <= 5; i++){
    factorial = factorial * i;

}
console.log(factorial); */


// use recursion function

function factorial(i){
    if(i == 5){
        return 5;
    }
    return i * factorial(i + 1 )
}
const result = factorial(1);
console.log(result);


/* 
    1 * factorial(i+1) = 1 * factorial(2);
    1 * 2 * factorial(2+1) = 1 * 2 * factorial(3);
    1 * 2 * 3 * factorial(3+1) = 1 * 2 * 3 * factorial(4);
    1 * 2 * 3 * 4 * factorial(4+1) = 1 * 2 * 3 * 4 * 5 = 120
*/