function getSumAnArray(numbers){
    let sum =0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let elements = numbers[index];
        console.log(index,elements)
        sum = sum + elements;

        
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i
        let elements =numbers[index];
        if(elements % 2 !==0){
            console.log(index,elements);
            oddNumbers.push(elements);

            
        }
       
        
    }
    return oddNumbers;
    
}
const myNumbers = [35, 54, 32, 56, 87, 89, 90];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumAnArray(oddNumbers);
console.log(oddNumberSum);

// output:
// 0 35
// 4 87
// 5 89
// [ 35, 87, 89 ]

// 0 35
// 1 87
// 2 89
// 211

