import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        padding: '0'
    }
};

const TodoList = (props) => {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem todo={ todo }
                                key={ todo.id }
                                index={ index }
                            />;
                })  
            }
        </ul>
    );
};

export default TodoList;