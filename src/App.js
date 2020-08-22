import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo/AddTodo';
import Loader from './components/Loader/Loader';

function App() {

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        const data = json.map(t => ({text: t.title, ...t}));
        console.log(data);
        setTimeout(() => setTodos(data), 2000);
      });
  }, []);

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
      id: Date.now(),
      complited: false,
      text: message
    }));
  };

  return (
    <Context.Provider value={{ deleteTodo, toggleTodo, createTodo }}>
      <div className="wrapper">
        <h1>Список дел</h1>
        { todos.length ? <TodoList todos={todos} /> : <Loader /> }
        <AddTodo />
      </div>
    </Context.Provider>
  );
}

export default App;
