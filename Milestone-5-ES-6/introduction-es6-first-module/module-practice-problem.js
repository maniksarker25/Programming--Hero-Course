// 1: Write an arrow function that will take three parameters, will multiply the parameters and return the multiply result;
/* const multiply = (a,b) => a * b;
const result = multiply(10,20);
console.log(result);
output:200 */



//2. Write the following sentence in three lines and print this;

/* const sentence = `I am a web developer.
I love to code.
I love to eat biryani`;
console.log(sentence);
output: I am a web developer.
I love to code.
I love to eat biryani */


// 3. Write an arrow function that will be 2 parameter . one will come from you and other one parameter will be the default parameter.add this two parameter and return the result .
/* const add = (a,b=20) => a + b;
const result = add(10);
console.log(result);
output: 30; */


// 4. Write an arrow function where it will do the following
// 1. it will take an array where the array elements will be the your friends name.
// 2. check the if element length is even, push element with the even length to a new array and return the result 


/* const friends = (friend) => {
    let newFriends = [];
    for(let i = 0; i < friend.length; i++){
        const element = friend[i];
        if(element.length % 2 == 0){
            newFriends.push(element);
        }
        
    }
    return newFriends;
    
}
const result = friends(['manik', 'raju', 'rohoman', 'taufic']);
console.log(result);
output: [ 'raju', 'taufic' ] */



// 5. Write an arrow function , where it will do the following 
// 1.Square each array element
// 2. Calculate the sum of the squared elements
// 3. Return the average of the square elements 
/* const doMath = (numbers) => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
       
        const powerValue = Math.pow(numbers[i], 2);
        // newNumbers.push(powerValue);
        sum += powerValue; 
    }
    const average = (sum / numbers.length).toFixed(2);
    return average;
   

}
const result = doMath([2, 3, 5, 6, 7]);
console.log(result);
output; 24.60 */



// 6. Write an arrow function where it will do the following ;
// 1. it will take two array inputs
// 2. combine the two arrays and assign them in a new array 
// find the maximum number from the new array and return the result

/* const combineAndSum = (firstNumbers, secondNumbers) => {
    const newNumbers = firstNumbers.concat(secondNumbers);
    const maxNumber = Math.max(...newNumbers);
    return maxNumber;

}
const result = combineAndSum([3, 4, 6, 7,], [13, 33, 22, 45]);
console.log(result)
output: 45 */
