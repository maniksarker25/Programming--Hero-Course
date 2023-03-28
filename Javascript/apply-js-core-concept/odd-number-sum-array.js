function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i
        let elements =numbers[index];
        if(elements % 2 !==0){
            console.log(index,elements);
            oddNumbers.push(elements);
            sum = sum +elements;

            
        }
       
        
    }
    return sum;
    
}
let myNumbers = [25, 54, 87, 58, 88];
let arraySum = getOddNumbersOfAnArray(myNumbers);
console.log(arraySum);

// output
// 0 25
// 2 87
// 112
