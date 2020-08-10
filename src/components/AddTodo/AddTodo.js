import React, {useContext, useState} from 'react';
import './AddTodo.css';
import Context from '../../context';

const AddTodo = () => {

    const [value, setValue] = useState('');
    const {createTodo} = useContext(Context);

    const submitHandler = event => {
        event.preventDefault();
        if (value.trim()) {
            createTodo(value);
            setValue('');
        }
    };
    
    return (
        <form className='add-todo d-flex flex-row'
            onSubmit={ event => submitHandler(event) }
        >
            <input className='form-control'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button className='ml-2 btn btn-success'
                type='submit'
            >+</button>
        </form>
    );
};

export default AddTodo;