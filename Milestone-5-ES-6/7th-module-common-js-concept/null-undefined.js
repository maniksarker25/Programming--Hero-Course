/* 
 8 ways to get undefined 
 1. variable that is not initialized will give undefined
 2. function with no return will give undefined 
 3. parameter that is not pass will be undefined
 4. if return is nothing in right side it will be return undefined
 5. property that doesn't exists on an object that will return undefined
 6.try accessing array element outside of the index range
 7. delete a element from array use delete



*/
//First ---------
let first;
// console.log(first);
// output: undefined
//second---------
function sum(a,b){
    total = a + b;
}
const result = sum(10,4);
// console.log(result);
// output; undefined

//third  ---------------
function third(a,b,c,d){
    total = a + b + c + d;
    console.log(a,b,c,d)
}
// third(2,4);
// output; 2 4 undefined undefined


// forth---------------------
function noNegative(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
// const result2 = noNegative(2,2);
// console.log(result2); 
// output: 4
const result2 = noNegative(3, -4);
// console.log(result2);
// output: undefined

// fifth --------------
const doctor = {id:4, name:'foysal', age:45};
// console.log(doctor.salary);
// output; undefined


// sixth --------------
const numbers = [34, 54, 32, 53, 52];
// console.log(numbers[1]);
// output; 54
// console.log(numbers[7]);
// output; undefined

// seventh ---------------
const marks = [66, 76, 77, 78];
delete marks[1];
// console.log(marks);
// you should not do it instead use splice 
// output; [ 66, <1 empty item>, 77, 78 ]

///---------------------

const eight = undefined;

const ninth = null;
const student = {result: [], update: null};

// console.log(typeof undefined);
// output; undefined
// console.log(typeof null);
// output: object----------------
