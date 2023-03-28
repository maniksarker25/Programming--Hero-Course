function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i)

    }
    return result;
}
const fact = factorial(5)
console.log('factorial value of 9:', fact);
