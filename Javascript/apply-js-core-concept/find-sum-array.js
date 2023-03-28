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
let myNumbers = [34, 53 , 33, 23 ,43];
let sumOfArray = getSumAnArray(myNumbers);
console.log(sumOfArray);

//Output: 
// 0 34
// 1 53
// 2 33
// 3 23
// 4 43
// 186