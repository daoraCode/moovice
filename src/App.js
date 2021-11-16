import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Weekly from './pages/Weekly';
import WeeklyBattle from './pages/WeeklyBattle';
import Popular from './pages/Popular';
import PopularBattle from './pages/PopularBattle';
import Favorites from './pages/Favorites';
import Error404 from './pages/Error404';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand px-4 text-primary" href="/">Moovice</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/weekly">Weekly</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/weekly-battle">Weekly Battle</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/popular">Popular</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/popular-battle">Popular Battle</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/favorites">Favorites</a>
              </li> 
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;