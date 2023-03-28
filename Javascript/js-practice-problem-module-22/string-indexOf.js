const lyrics = 'tumi bondu kala pakhi ami jano ki bosonto kala ami bolta pari ni';
console.log(lyrics.indexOf('k'));
// output: 11 
console.log(lyrics.indexOf('pakhi'));
//output: 16
console.log(lyrics.indexOf('mono'));
//output: -1

if(lyrics.indexOf('tumi' !== -1)){
    console.log('exist inside the string');
}
else{
    console.log('cannot find it');
}
//output: exist inside the string 


//starts with
console.log(lyrics.startsWith('tumi'))
//output: true

// ends with 
console.log(lyrics.endsWith('kala'));
// output: false