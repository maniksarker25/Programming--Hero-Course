console.log(1)
console.log(2)
doSomething();
// set timeout
setTimeout(doSomething2,3000)
// set time out with arrow function
setTimeout(()=>{
    console.log("You are lazy")
},5000)
console.log(4)
console.log(5)
console.log(6)

function doSomething(){
    console.log(3)
}
function doSomething2(){
    console.log("lazy boy")
}
