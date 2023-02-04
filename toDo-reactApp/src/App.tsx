import React from 'react'
import { IconButton } from '@chakra-ui/button'
import { Heading, useColorMode, VStack} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';
import AddTodo from './components/AddTodo';
import ToDoList from './components/ToDoList';
import useTodo from './hooks/useTodo';

const App = () => {
  const [todos, addTodo, deleteTodo] = useTodo();
  const { colorMode, toggleColorMode} = useColorMode();

  const buttonProps = {
    size: 'lg',
    isRound: true,
    alignSelf: 'flex-end',
    icon: colorMode === 'light' ? <FaMoon /> : <FaSun />,
    'aria-label': 'Switch DarkMode',
  }

  return (
    <VStack p={4}>
      <IconButton onClick={toggleColorMode} {...buttonProps} />
      <Heading size='2xl'>To-Do React-TypeScript-ChakraUI</Heading>
      <AddTodo addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  )
}

export default App;
