import React from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {

  const todos = [
    {id: 1, complited: false, text: 'купить хлеб'},
    {id: 2, complited: false, text: 'купить пиво'},
    {id: 3, complited: false, text: 'купить сухарики'},
  ];

  return (
    <div className="wrapper">
      <h1>Список дел</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
