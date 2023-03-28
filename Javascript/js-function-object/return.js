function add(num1, num2){
    console.log(num1,num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;

}
var total = add(80, 20);
console.log('total',total);
// output
// 80 20
// total 100


// another one
function bringSingara(money){
    singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;

}
var myTaka = 200;
var numberOfsingaras = bringSingara(myTaka);
console.log(numberOfsingaras);

//output: 20