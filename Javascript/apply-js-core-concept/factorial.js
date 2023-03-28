//factorial mana sai shonka porjonto multiplication

function multiOfNumbers(number){
    let multi = 1;
    for(i = 1; i <= number; i++){
        const numbers = i;
        multi = multi * numbers;

    }
    return multi;
}
const myNumbers = 9;
const multiplicationOfNumbers = multiOfNumbers(myNumbers);
console.log(multiplicationOfNumbers);

