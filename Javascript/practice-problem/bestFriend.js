// maximum character name is best friend 
// function bestFriend(array){
//     var lgth = 0;
//     var longest;
      
//       for (var i = 0; i < array.length; i++) {
//         if (array[i].length > lgth) {
//           var lgth = array[i].length;
//           longest = array[i];
        
//         }
//       }
//       return longest;
      
// }
// const myFriends = ['manik', 'sarker', 'piku sarker', 'raju', 'satu'];
// const bestFriendName = bestFriend(myFriends);
// console.log(bestFriendName);

function bestFriend(array){
    let longest = 0;
    let longestName;
    for(i = 0; i < array.length; i++){
        if(array[i].length > longest){
            longest = array[i].length;
            longestName = array[i];
        }
    }
    return longestName;
}
const myFriends = ['manik', 'raju', 'rony talukdar', 'satu'];
const bestFriendName = bestFriend(myFriends);
console.log(bestFriendName);

// output: rony talukdar