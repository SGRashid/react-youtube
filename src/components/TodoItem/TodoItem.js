import React, { useContext } from 'react';
import './TodoItem.css';
import '../../context';
import Context from '../../context';

const maxLength = 25;

const textTrim = text => text.length <= maxLength ? text : text.slice(0, maxLength) + '...';

const TodoItem = ({ todo, index }) => {
    const { deleteTodo, toggleTodo } = useContext(Context);
    return (
        <li className='d-flex justify-content-start align-items-center mb-2'>
            <strong className='mr-2'>{ index + 1 }</strong>
            <input className='mr-2 my-auto cursor-pointer' 
                type='checkbox'
                checked={ todo.complited }
                onChange={ () => toggleTodo(todo.id) }
            />
            <span className={ todo.complited ? 'done' : '' }>{ textTrim(todo.text) }</span>
            <button className='delete btn btn-outline-danger ml-auto d-flex'
                onClick={ () => deleteTodo(todo.id) }
            >
                <span className='m-auto'>&times;</span>
            </button>
        </li>
    );
};

export default TodoItem;