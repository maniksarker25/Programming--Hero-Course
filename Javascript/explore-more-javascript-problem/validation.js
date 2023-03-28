function add(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please enter a number'
    }
    return num1 + num2;
}
const result = add(20,'25');
console.log(result);
// output asba : please enter a number 
// jodi 2 tai number input daua hoi tahola sum kora output dakaba 