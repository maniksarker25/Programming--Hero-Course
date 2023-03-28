import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {userId,title,completed} = props.todo;
    console.log(props.todo.completed)
    return (
        <div className='todo'>
            <h1>UserId:{userId}</h1>
            <h2>Title:{title}</h2>
            <h4>Completed:{completed == true? 'true':'false'}</h4>
        </div>
    );
};

export default Todo;