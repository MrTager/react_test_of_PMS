//import react
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './routes/Login'
import './App.css';
import RouterShield from './components/RouterShield'
import Index from './routes/Index'

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path='/' component={Login}/>
        <RouterShield path='/' component={Index}/>
      </Switch>
    )
  }
}

export default App;

