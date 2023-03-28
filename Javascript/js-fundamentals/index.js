var numbers = [25, 24, 87, 54, 96]
//1.get element by index
console.log(numbers[3]);

//
var price = [5550, 4587, 524, 254, 69];
var mainPrice = price[0];
console.log(mainPrice);

//2.change array value with index
var fee = [25, 14, 68, 54]
fee[2] = 77;
console.log(fee);

var money = [500, 541, 58, 42, 84];
money[5]=1000;
console.log(money);
money[10] = 200;
console.log(money);

//3. find index of an element
var total = [45, 58, 47, 35, 64, 87];
var indexPosition = total.indexOf(35);
console.log(indexPosition);
// output=3
var anotherPosition = total.indexOf(5487);
console.log(anotherPosition);
//output=-1

