// arrow function
const add = (first,second) => first + second;
const fullName = (firstName, secondName) => firstName + ' ' + secondName;
const multiply = (a,b) => a * b;
const name = fullName('manik','sarker');
console.log(name);
// output: manik sarker
const result = multiply(12,10);
console.log(result);
// output: 120

// Arrow function with no para meter
const getPi = () => 3.1416;

// one para meter 
const doubleIt = (num) => num * 2;

// one para meter you can declared without bracket
const fiveTimes = num => num * 5;


// Multiline arrow function -----------------------------
// if you went return, use the return 
const doMath = (a,b,c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const multiply = firstSum * secondSum;
    const result = multiply / 2;
    return result;

}
const math = doMath(5,2,7);
console.log(math);

// output: 31.5-----