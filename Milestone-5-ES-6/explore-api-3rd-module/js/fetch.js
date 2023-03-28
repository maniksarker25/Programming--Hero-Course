// copy paste from JSON placeholder

// fetch('https://jsonplaceholder.typicode.com/todos/1') // link ta kono akta api 
//       .then(response => response.json())
//       .then(json => console.log(json)) // .json is not similar but close to JSON.parse


// nijadar moto kora 
//
/* const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then(response => response.json())
.then(json => console.log(json)); */

//
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));
}
