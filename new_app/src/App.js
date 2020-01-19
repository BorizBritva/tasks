import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './modules/header.js';
import Home from './modules/Home';
import Clients from './modules/Clients';
import './App.sass';
const history = createBrowserHistory();


const App = () => {
  return (
      <Fragment>
        <Router history={ history }>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/clients" exact component={Clients} />
          </Switch>
        </Router>
     </Fragment>
  );
}

export default App;
