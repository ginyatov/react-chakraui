import React from 'react'
import Routes from './routes'
import GlobalStore from '@store/store'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <GlobalStore>
      <BrowserRouter>{Routes()}</BrowserRouter>
    </GlobalStore>
  )
}

export default App
