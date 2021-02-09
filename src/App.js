import React from 'react';
import './App.css';
import Home from './views/home';
import NavBar from "./components/navbar";
import AboutUs from "./views/aboutus";
import Services from "./views/services";
import Pricing from "./views/pricing";
import Contact from "./views/contact";
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
                              <section id={'services'} className={"section"}>
                                  <Services/>
                              </section>
                              <section id={'pricing'} className={"section"}>
                                  <Pricing/>
                              </section>
                              <section id={'contact'} className={"section"}>
                                  <Contact/>
                              </section>
                          </Route>
                      </Switch>
              </BrowserRouter>
          </div>
          </>
      )
}

export default App;
