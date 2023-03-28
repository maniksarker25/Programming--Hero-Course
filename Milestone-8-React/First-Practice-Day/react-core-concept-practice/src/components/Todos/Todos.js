import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos,setTodos] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data => setTodos(data))
    },[])

    return (
        <div>
            <h1>All Todos is here!!</h1>
            <div className='todos-container'>
            {
                todos.map(todo=><Todo todo={todo}></Todo>)
            }
            </div>
        </div>
    );
};

export default Todos;