//import react
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './routes/Login/index'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return (
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    )
  }
}

export default App;
