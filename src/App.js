import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>

          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Router path="/login" >
            <h1>Login page</h1>
          </Router>

          <Route>
            <h1>Home page</h1>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
