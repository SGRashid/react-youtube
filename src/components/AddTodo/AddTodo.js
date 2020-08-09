import React, {useContext} from 'react';
import './AddTodo.css';
import Context from '../../context';

const AddTodo = () => {
    const {createTodo} = useContext(Context);
    return (
        <div className='add-todo d-flex flex-row'>
            <input className='form-control' />
            <button className='ml-2 btn btn-success'
                onClick={() => createTodo('Pam-pam')}
            >+</button>
        </div>
    );
};

export default AddTodo;