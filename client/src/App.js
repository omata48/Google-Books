import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
