// show the output form - 1 to 50
// if the number is divisible by 3 then instead of the number show 'foo'
// if the number is divisible by 5 then instead of the number show 'bar'
// if the number is divisible by 3 and 5 then instead of the number show 'foober'
// let's write the code code and code 

for(let i = 1; i <= 50; i++){
    if(i % 3 ===0 && i % 5 === 0 ){
        console.log('foober');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
   
    else{
        
        console.log(i);
    }
}

// ouput dakhar jonna kosta kora run koro bosso