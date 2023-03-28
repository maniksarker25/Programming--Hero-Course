const lyrics = 'tumi bondu kala pakhi. ami jano ki bosonto kala tomai bolta parini';
const parts = lyrics.split(' ');
console.log(parts);
//output:
// [
//     'tumi',  'bondu',
//     'kala',  'pakhi',
//     'ami',   'jano',
//     'ki',    'bosonto',
//     'kala',  'tomai',
//     'bolta', 'parini'
//   ]



const sentence = lyrics.split('.')
console.log(sentence);
//output
// [
//     'tumi bondu kala pakhi',
//     ' ami jano ki bosonto kala tomai bolta parini'
//   ]



const character = lyrics.split('');
console.log(character);
//output
// [
//     't', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd',
//     'u', ' ', 'k', 'a', 'l', 'a', ' ', 'p', 'a',
//     'k', 'h', 'i', '.', ' ', 'a', 'm', 'i', ' ',
//     'j', 'a', 'n', 'o', ' ', 'k', 'i', ' ', 'b',
//     'o', 's', 'o', 'n', 't', 'o', ' ', 'k', 'a',
//     'l', 'a', ' ', 't', 'o', 'm', 'a', 'i', ' ',
//     'b', 'o', 'l', 't', 'a', ' ', 'p', 'a', 'r',
//     'i', 'n', 'i'
//   ]


// join 
const lines = [
    'tumi bondu kala pakhi',
    ' ami jano ki bosonto kala tomai bolta parini'
]
const song = lines.join('. ');
console.log(song);
//output:tumi bondu kala pakhi: ami jano ki bosonto kala tomai bolta parini