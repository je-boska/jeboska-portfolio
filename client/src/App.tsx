import React from 'react'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/portfolio' component={Portfolio} />
    </Router>
  )
}

export default App
