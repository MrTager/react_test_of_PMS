//import react
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'

import './App.css';
import RouterShield from './components/RouterShield'
import Index from './pages/Index'
import Login from './pages/Login'

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <RouterShield path='/' component={Index}/>
      </Switch>
    )
  }
}

export default App;

