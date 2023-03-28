
// fetch sequentually cola na -------------
console.log(1)
console.log(2)
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(3)
console.log(4)
console.log(5)
console.log(6)
