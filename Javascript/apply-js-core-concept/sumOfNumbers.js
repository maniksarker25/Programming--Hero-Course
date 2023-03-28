function sumOfNumbers(number){
    let sum = 0;
    for(i = 1; i <= number; i++){
        const numbers = i;
        sum = sum + numbers;
    }
    return sum;
}
const myNumbers = 10;
const sum = sumOfNumbers(myNumbers);
console.log(sum);
