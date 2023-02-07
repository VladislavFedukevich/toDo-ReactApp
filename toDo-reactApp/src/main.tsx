import { ColorModeScript } from '@chakra-ui/color-mode'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
>>>>>>> bb3c0c040f34542a83e9cb9389adee0aa5338c1a
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
