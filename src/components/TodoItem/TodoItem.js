import React from 'react';

const TodoItem = (props) => {
    return (
    <li>
        <input type='checkbox' checked={props.complited} />
        <span>{ props.todo.text }</span>
    </li>
    );
};

export default TodoItem;