// function tallest(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const height = [125, 190, 254, 150, 145];
// const tallestPerson = tallest(height);
// console.log(tallestPerson);

// output: 254;

// lowest in array 
function lowInArray(numbers){
    let lowest  = numbers[0];
    for(i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < lowest ){
            lowest = element;
        } 
    }
    return lowest;

}
const myNumbers = [154, 435, 333, 535, 332, 45];
const lowNumber = lowInArray(myNumbers);
console.log(lowNumber);
//output: 45;

