/* function add(first,second){
    // if(second === undefined){
    //     second = 0;
    // }
    second = second || 0;
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result); */ 
// output: 10;

// es-6 way
function add(first = 0,second = 0){
    const total = first + second;
    return total;

}
// const result = add(10,20);---output: 30
// const result = add(10);-----output: 10
// const result = add()----output: 0
// console.log(result);

//
function fullName(firstName,secondName = 'sarker'){
    const name = firstName + ' ' + secondName;
    return name;

}
// const name = fullName('manik','manik');-----output: manik manik
// const name = fullName('manik')-----output: manik sarker
console.log(name);


