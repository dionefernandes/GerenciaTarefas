import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home'
import { Cadastrar } from './pages/Cadastrar'

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cadastrar" component={Cadastrar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;