import React from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, complited: false, text: 'купить хлеб'},
    {id: 2, complited: false, text: 'купить пиво'},
    {id: 3, complited: false, text: 'купить сухарики'},
  ]);

  const toggleTodo = id => {
    console.log(id);
    setTodos(todos.map(t => {
      if (t.id !== id) { return t; }
      return { ...t, complited: !t.complited };
    }));
  };

  return (
    <div className="wrapper">
      <h1>Список дел</h1>
      <TodoList todos={todos} onChange={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
