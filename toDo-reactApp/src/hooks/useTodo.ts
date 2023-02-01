import { useEffect, useState } from 'react'

export type Todo = { id: string, body: string }

function useTodo() {
  const [todos, setTodos] = useState<Todo[]>(
    () => JSON.parse(localStorage.getItem('todos') || "[]")
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return [todos, addTodo, deleteTodo] as const
}

export default useTodo
