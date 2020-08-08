import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index }) => {
    return (
    <li className='d-flex justify-content-start align-items-center mb-2'>
        <strong className='mr-2'>{ index + 1 }</strong>
        <input className='mr-2 my-auto' type='checkbox' checked={ todo.complited } />
        <span>{ todo.text }</span>
        <button className='delete btn btn-outline-danger ml-auto d-flex'>
            <span className='m-auto'>&times;</span>
        </button>
    </li>
    );
};

export default TodoItem;