// practice problem no:1
function foo() {
    console.log('foo');
}
function bar() {
    console.log('bar');
    console.log(foo);
}
foo();
bar();
bar(foo);
// output:
// [Function: foo]
// bar
// [Function: foo]

function bar(){
    console.log("bar")
}
function foo(){
    console.log("foo")
    bar()
}
foo()

//output;
// foo
// far 

//practice problem no:2
function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}
var Average = make_avg(25, 20, 15);
console.log(Average);
// output: 20



// practice problem no:3
function marks(array) {
    var sum = 0;
    array.forEach((num) => (sum += num));
    average = sum / array.length;
    return average;
}
var myArray = [2, 3, 5, 50];
var averageMarks = marks(myArray);
console.log(averageMarks);



// practice problem no:4
function even_odd(num){
    if(num % 2 == 0){
        console.log("this is even")
    }
    else{
        console.log("this is odd")
    }
}
even_odd(20);

// output: this is even 

///
function even_odd(num){
    if(num % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
var myNumber = even_odd(85);
console.log(myNumber);
//output: odd


// Practice problem no:5
var traficSignal = 'red';
if(traficSignal === 'green'){
    console.log('you should cross the road')
}
else if(traficSignal === 'red'){
    console.log('you maybe danger')
}
else if(traficSignal === 'yello'){
    console.log('you should stop')
}
else{
    console.log('the signal is down')
}

// out put: you maybe danger

// switch 
var singnal = 'yellow'
switch(singnal){
    case 'red':
        console.log('you maybe danger')
        break;
    case 'green':
        console.log('you should cross the road')
        break;
    case 'yellow':
        console.log('you should stop')
        break;
    default:
        console.log('THE signal is down')
}