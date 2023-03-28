const country = 'bangladesh';
const age = 52;
const isIdenpendence = true;
const student = {id:254, class:12, name:'rony'};
const friends = [33, 53, 23, 21, 22, 44];
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIdenpendence);
console.log(typeof student);
// it,s wrong way
console.log(typeof friends);
// output asba: object (worng)

// Proper way -- check array type using isarray 
console.log(Array.isArray(friends));
// answer : true 

// check includes
console.log(friends.includes(23));
// true
console.log(friends.includes(487));
// false


//another way to check includes
if(friends.includes(53) !== -1){
    console.log('includes')
}
else{
    console.log('not includes')
}

// output : includes

/// array concate 
const newFriends = [33, 53, 22, 13, 43, 11];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

// output:
// [
//     33, 53, 23, 21, 22,
//     44, 33, 53, 22, 13,
//     43, 11
//   ]