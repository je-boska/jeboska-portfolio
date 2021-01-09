import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Fonts } from './fonts'

const components = {
  Heading: {
    sizes: {
      xl: {
        fontSize: '5rem',
        fontFamily: 'karrik',
      },
    },
  },
}

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

const customTheme = extendTheme({ config, components })

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
