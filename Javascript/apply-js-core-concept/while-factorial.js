function factorial(number){
    let i = 1;
    let result = 1;
    while(i <=number){
        result = result * i;
        console.log(i);
        i++;
        
    }
    return result;
}
const factorialResutl = factorial(5);
console.log(factorialResutl)