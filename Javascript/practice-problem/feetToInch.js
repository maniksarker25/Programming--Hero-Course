// feet to inch
function feetTOInch(feet){
    const inch = parseFloat((feet * 12).toFixed(2));
    return inch;
}
const inch = feetTOInch(25.485);
console.log('Inch number is:', inch);

// output: 120;
