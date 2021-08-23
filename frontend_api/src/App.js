import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home'
import { Cadastrar } from './pages/Cadastrar'
import { Visualizar } from './pages/Visualizar'
import { Editar } from './pages/Editar'

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cadastrar" component={Cadastrar} />
          <Route path="/Visualizar/:id" component={Visualizar} />
          <Route path="/Editar/:id" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;