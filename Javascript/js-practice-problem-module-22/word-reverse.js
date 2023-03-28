function wordReverse(string){
    const words = string.split(' ');
    const result = [];
    for(i = words.length-1; i >= 0; i--){
        const element = words[i];
        result.push(element);
       
    }
    const reversed = result.join(' ');
    return reversed;

}
const myString = 'I am a good boy';
const reverseWord = wordReverse(myString);
console.log(reverseWord);

