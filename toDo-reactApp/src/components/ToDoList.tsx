import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Todo } from '../hooks/useTodo'
<<<<<<< HEAD

type Props = {
  todos: Todo[]
  deleteTodo: (id: string) => void
}

function TodoList({ todos, deleteTodo }: Props) {
  if (todos.length === 0)
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        List is empty. Please add your note.
      </Badge>
    )

  const vStackProps = {
    p: '4',
    w: '100%',
    maxW: { base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' },
    borderColor: 'gray.100',
    borderWidth: '2px',
    borderRadius: 'lg',
    alignItems: 'stretch',
    divider: <StackDivider />
  }

  const buttonProps = {
    icon: <FaTrash />,
    isRound: true,
    'aria-label': 'delete',
  }
=======

type Props = {
  todos: Todo[]
  deleteTodo: (id: string) => void
}

function TodoList({ todos, deleteTodo }: Props) {
  if (todos.length === 0)
    return (
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        List is empty. Please add your note.
      </Badge>
    )

  const vStackProps = {
    p: '4',
    w: '100%',
    maxW: { base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' },
    borderColor: 'gray.100',
    borderWidth: '2px',
    borderRadius: 'lg',
    alignItems: 'stretch',
    divider: <StackDivider />
  }

  const buttonProps = {
    icon: <FaTrash />,
    isRound: true,
    'aria-label': 'delete',
  }

>>>>>>> bb3c0c040f34542a83e9cb9389adee0aa5338c1a
  return (
    <VStack {...vStackProps}>
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton onClick={() => deleteTodo(todo.id)} {...buttonProps} />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
