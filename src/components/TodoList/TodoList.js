import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const styles = {
    ul: { listStyle: 'none' }
};

const TodoList = (props) => {
    return (
        <ul style={styles.ul}>
            { props.todos.map(todo => <TodoItem todo={todo} />) }
        </ul>
    );
};

export default TodoList;