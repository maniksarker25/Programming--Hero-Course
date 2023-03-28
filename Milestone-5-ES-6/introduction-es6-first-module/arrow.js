// function declaration 
function add(first, second){
    const total = first + second;
    return total;
}

// function expression 
const add1 = function added1(first,second){
    const total = first + second;
    return total;
}

// function expression with anonymous function
const add2 = function (first,second){
    const total = first + second;
    return total;
}

// important------------------- use arrow =>

// arrow function -------------------
const add5 = function(first,second){
    return first + second;
}

// short version
const add6 =(first,second) => first + second;

const result = add6(20,20);
console.log(result)

// output ------40