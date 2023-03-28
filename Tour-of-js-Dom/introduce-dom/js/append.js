// add a li
//1.where to be add
const placesList = document.getElementById('places-list');
//2.what to be added
const li = document.createElement('li');
li.innerText = 'Pahartoli bon';
//3. add the child
placesList.appendChild(li);


// make a section-------------------------------
//where to be added
const mainContainer = document.getElementById('main-container');

//what to be added
const section = document.createElement('section');
//make h1
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

//make ul and li list 
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salat';
ul.appendChild(li3);
section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML =   `
<h1>My drees collection </h1>
<ul>
    <li>T-shart</li>
    <li>lungi</li>
    <li>pant</li>
</ul>
`
mainContainer.appendChild(sectionDress);
