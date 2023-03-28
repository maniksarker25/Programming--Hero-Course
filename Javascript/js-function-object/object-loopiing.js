var shopingCard ={
    books:3,
    sunglass:1,
    keyboard:1,
    pen:25,
    mouse:1,
    shoes:2
}
const keys = Object.keys(shopingCard);
console.log(keys);
const values = Object.values(shopingCard);
console.log(values);

//keys=[ 'books', 'sunglass', 'keyboard', 'pen', 'mouse', 'shoes' ]

// get keys with values use looping
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shopingCard[propertyName];
    // console.log(propertyName,propertyValue);
}

// output:
// books 3
// sunglass 1
// keyboard 1
// pen 25
// mouse 1
// shoes 2



// get kays and values easy way for in loop
for(var propertyName in shopingCard){
    const value = shopingCard[propertyName];
    console.log(propertyName,value);
}
//output:
// books 3
// sunglass 1
// keyboard 1
// pen 25
// mouse 1
// shoes 2