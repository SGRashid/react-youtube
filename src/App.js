import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo/AddTodo';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, complited: false, text: 'купить хлеб'},
    {id: 2, complited: false, text: 'купить пиво'},
    {id: 3, complited: false, text: 'купить сухарики'},
  ]);

  const toggleTodo = id => {
    console.log('todo id : ', id);
    setTodos(todos.map(t => {
      if (t.id !== id) { return t; }
      return { ...t, complited: !t.complited };
    }));
  };

  const deleteTodo = id => {
    console.log('deleted todo id : ', id);
    setTodos(todos.filter(t => t.id !== id));
  };

  const createTodo = message => {
    console.log('new todo : ', message);
    setTodos(todos.concat({
      id: (new Date()).getTime(),
      complited: false,
      text: message
    }));
  };

  return (
    <Context.Provider value={{ deleteTodo, toggleTodo, createTodo }}>
      <div className="wrapper">
        <h1>Список дел</h1>
        { todos.length ? <TodoList todos={todos} /> : <p>Нет задач</p> }
        <AddTodo />
      </div>
    </Context.Provider>
  );
}

export default App;
