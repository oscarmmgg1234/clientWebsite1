import React from 'react';
import './App.css';
import Home from './views/home';
import NavBar from "./components/navbar";
import AboutUs from "./views/aboutus";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <>
          <div className={'app'}>
                  <BrowserRouter>
                      <NavBar/>
                      <Switch>
                          <Route path={'/'}>
                          <section id={'home'} className={"section"}>
                          <Home/>
                          </section>
                          <section id={'about'} className={"section"}>
                              <AboutUs/>
                          </section>
                          </Route>
                      </Switch>
              </BrowserRouter>
          </div>
          </>
      )
}

export default App;
