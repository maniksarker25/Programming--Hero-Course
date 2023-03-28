// use backtick for write multiline string

// first way -difficult 
const multiline = 'first line text \n' + 
'second line text \n' +
'third line text \n';
// console.log(multiline);
/* output: 
first line text 
second line text
third line text
 */

const newMultiline = `fist line of text 
second line of text
third line of text
forth line of text`;
// console.log(newMultiline);
/* output:
fist line of text 
second line of text
third line of text
forth line of text
 */


// another example of powerful backtick 
// difficult way
const a = 30;
const b = 20;
const summary = 'sum of:'+ a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary);
//output:sum of:30 and 20 is: 50

// easy way with backtick 
const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
// console.log(newSummary);
//output; sum of 30 and 20 is: 50














