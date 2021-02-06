import React from 'react';
import './App.css';
import Home from './views/home';
import NavBar from "./components/navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <>
      <NavBar/>
      <BrowserRouter>
          <Switch>
              <Route path={"/"} component={Home}/>
          </Switch>


  </BrowserRouter>
          </>
      )
}

export default App;
