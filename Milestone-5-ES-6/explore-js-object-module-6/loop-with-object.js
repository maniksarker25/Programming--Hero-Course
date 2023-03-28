// 1. direct  for of loop can not used with object----------
// we have to use for in loop for an object-------------


const bottle = { color: 'yellow', price: 50, capacity: 1, isCleaned: true };
// first option to loop trough an object ---------
const keys = Object.keys(bottle);
for (const key of keys) {

    /*
    3 ways to read object-------------------------------------- 
    1. bottle.color---dot notation----------------
    2. bottle['color']
    3.bottle[key]----bracket notation-------------
     */
    // console.log(key);
    // output:
    // color
    // price
    // capacity
    // isCleaned


    // get all value -------------------
    // console.log(bottle[key]);
    // output; 
    // yellow
    // 50
    // 1
    // true


}

// for in loop  we have to use it mostly ----------------------------------------------------

for (const key in bottle) {
    // console.log(key, bottle[key]);
    // output; 
    // color yellow
    // price 50
    // capacity 1
    // isCleaned true
}

// advanced ----------------------
for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
    // output;
    // color yellow
    // price 50
    // capacity 1
    // isCleaned true
}