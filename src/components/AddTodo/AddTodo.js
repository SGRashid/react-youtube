import React from 'react';
import './AddTodo.css'

const AddTodo = () => {
    return (
        <div className='add-todo d-flex flex-row'>
            <input className='form-control' />
            <button className='ml-2 btn btn-success'>+</button>
        </div>
    );
};

export default AddTodo;