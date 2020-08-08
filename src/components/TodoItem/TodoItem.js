import React from 'react';

const TodoItem = ({ todo, index }) => {
    return (
    <li>
        <strong>{ index + 1 }</strong>
        <input type='checkbox' checked={ todo.complited } />
        <span>{ todo.text }</span>
    </li>
    );
};

export default TodoItem;