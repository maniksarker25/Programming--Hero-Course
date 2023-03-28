var shopingCard ={
    book:3,
    sunglass:1,
    pen:25,
    keyboard:2,
    mouse:1
}

//when you know the specific key/properties name , use dot notation to get the value
console.log(shopingCard);
//output:{ book: 3, sunglass: 1, pen: 25, keyboard: 2, mouse: 1 }
var penCount = shopingCard.pen;
console.log(penCount);
//output:25


//alternative system
//when you know the specific key/properties name , use dot notation to get the value
var sunglassCount = shopingCard['sunglass'];
console.log(sunglassCount);
//output: 1


//another way
propertyName = 'mouse';
propertyValue = shopingCard[propertyName];
console.log(propertyName,propertyValue);
// output:mouse 1



//get all keys from a object
var properties = Object.keys(shopingCard);
console.log(properties);
// output:[ 'book', 'sunglass', 'pen', 'keyboard', 'mouse' ]



//get the all value of all keys from a object
var value = Object.values(shopingCard);
console.log(value);
// output:[ 3, 1, 25, 2, 1 ]


//set properties value
shopingCard.mouse = 15;
console.log(shopingCard);
// output:{ book: 3, sunglass: 1, pen: 25, keyboard: 2, mouse: 15 }

var keyName ='book';
shopingCard[keyName] = 50;
console.log(shopingCard);
// output:{ book: 50, sunglass: 1, pen: 25, keyboard: 2, mouse: 15 }