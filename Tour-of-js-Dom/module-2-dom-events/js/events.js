console.log('This is separate js file')

//option 2: important = we will use it maximum time 
function makeRed(){
    document.body.style.backgroundColor = "red";
}
//option 3 make body blue for onclick------------------
const makeBlueBody = document.getElementById('make-blue');
makeBlueBody.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor =  'blue';
}

//another way for onclick
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

/* Option 4 will be use any events */
const pinkButton =document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option 4 another way 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// option 4 final : we will use it maximum time 
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})