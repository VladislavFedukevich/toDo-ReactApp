import React from 'react'
import './App.css';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, addTodo, deleteTodo] = useTodo();
  return (
    <div>
      <h1>My ToDo App!</h1>
      <ToDoList />
    </div>
  )
}

export default App;
