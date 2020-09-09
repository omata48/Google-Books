import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Footer from './components/Footer';
import ThemeContext, {themes} from "./components/theme-context";
// import Layout from './components/test-theme';

function App() {
  const [theme, setTheme] = useState(themes.base)

  const toggleTheme = (event) => {
    switch(event.target.value){
      case 'blue':
        setTheme(themes.blue);
        break;
      case 'tan':
        setTheme(themes.tan);
        break;
      default:
        setTheme(themes.base);
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
    <Router>
      <div>
        <Nav toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
