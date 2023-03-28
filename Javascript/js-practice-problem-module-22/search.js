const lyrics = 'tumi bondu kala pakhi ami jano ki bosonto kala tomai bolta parini';
const doesExist = lyrics.includes('pakhi');
console.log(doesExist);
// output: true 

const song = 'bondu Amr Lalgolapi Koi roili ra ';
const search = 'lalGolapi';
const searchWord = song.toLowerCase().includes(search.toLowerCase());
console.log(searchWord);
//output: true