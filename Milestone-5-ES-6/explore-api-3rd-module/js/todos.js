function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(todos){
    const todoContainer = document.getElementById('todos-container');
    for(todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p> user Id: ${todo.userId}</p>
        <p>Is completed: ${todo.completed === true ? 'Complete': 'Not complete'}
        `
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();