function reverseString(text){
    reversed = '';
    for(i = text.length-1; i >= 0; i--){
        const element = text[i];
        console.log(element);
        reversed = reversed + element;
        console.log(element,reversed)

    }
    return reversed;

}
const myString = 'I am a good boy';
const reverse = reverseString(myString);
console.log('reverse output:', reverse);