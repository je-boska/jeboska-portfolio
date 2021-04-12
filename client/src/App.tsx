import React from 'react'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
