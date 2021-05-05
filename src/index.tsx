import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { themeChackra } from './theme'

ReactDOM.render(
  <ChakraProvider theme={themeChackra}>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
)
