import React, {useContext, useState} from 'react';
import './AddTodo.css';
import Context from '../../context';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
        },
        clear: () => setValue('')
    };
}

const AddTodo = () => {

    const input = useInputValue();
    // const [value, setValue] = useState('');
    const {createTodo} = useContext(Context);

    const submitHandler = event => {
        event.preventDefault();
        if (input.bind.value.trim()) {
            createTodo(input.bind.value);
            input.clear();
        }
    };
    
    return (
        <form className='add-todo d-flex flex-row'
            onSubmit={ event => submitHandler(event) }
        >
            <input className='form-control'
                {...input.bind}
            />
            <button className='ml-2 btn btn-success'
                type='submit'
            >+</button>
        </form>
    );
};

export default AddTodo;