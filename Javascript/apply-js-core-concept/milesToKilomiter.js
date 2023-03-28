function milesToKilomiter(miles){
    const kilomiter = miles * 1.60934;
    return kilomiter;
}
let distanceMiles = 54;
let kilomiter = milesToKilomiter(distanceMiles);
kilomiter = kilomiter.toFixed(2);
kilomiter = parseFloat(kilomiter);
console.log(kilomiter);
// output: 86.9
