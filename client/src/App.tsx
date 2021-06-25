import React from 'react'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </Router>
  )
}

export default App
