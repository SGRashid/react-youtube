import React from 'react';

const TodoItem = ({ todo, index }) => {
    return (
    <li className='d-flex justify-content-start align-item-center'>
        <strong className='mr-2'>{ index + 1 }</strong>
        <input className='mr-2 my-auto' type='checkbox' checked={ todo.complited } />
        <span>{ todo.text }</span>
    </li>
    );
};

export default TodoItem;