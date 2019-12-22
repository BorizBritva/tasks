import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './modules/Home';
import Clients from './modules/Clients';
const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clients" exact component={Clients} />
      </Switch>
    </Router>
  );
}

export default App;
