import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Film from './components/Film'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/film">
          <Film />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
