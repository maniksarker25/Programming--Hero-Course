function inchToFeet(inches){
    const feet = inches / 12;
    return feet;

}
const myInches = 72;
const myFeet = inchToFeet(myInches);
console.log(myFeet);
//output: 6

let rajuInches = 65;
let rajuFeet = inchToFeet(rajuInches);
rajuFeet = rajuFeet.toFixed(2);
rajuFeet = parseFloat(rajuFeet);
console.log(rajuFeet);

// output: 5.42
