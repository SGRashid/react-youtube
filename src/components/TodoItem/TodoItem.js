import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, onChange, onDelete }) => {
    return (
    <li className='d-flex justify-content-start align-items-center mb-2'>
        <strong className='mr-2'>{ index + 1 }</strong>
        <input className='mr-2 my-auto' 
            type='checkbox'
            checked={ todo.complited }
            onChange={ () => onChange(todo.id) }
        />
        <span>{ todo.text }</span>
        <button className='delete btn btn-outline-danger ml-auto d-flex'
            onClick={ () => onDelete(todo.id) }
        >
            <span className='m-auto'>&times;</span>
        </button>
    </li>
    );
};

export default TodoItem;