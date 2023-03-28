// argument is a array like object 
// you can use for loop 
// you can not push anything
// can not use map filter
// you can convert it an array using ...


function sum(a,b,c){

    // console.log(arguments);
    // output:  {'0': 34,'1': 54,'2': 33,'3': 44,'4': 52,'5': 66,'6': 77}

    // console.log(arguments[3]);
    // output; 44

    const arrys = [...arguments];
    // console.log(arrys);
    // output: [34, 54, 33, 44,52, 66, 77]

    // console.log(typeof arguments);
    // output: object

    const total = a + b + c;
    return total;
}
const result = sum(34, 54, 33, 44, 52, 66, 77);
// console.log(result);
// output: 121

// console.log(typeof sum);
// output: function

// console.log(sum.length);
// output: 3