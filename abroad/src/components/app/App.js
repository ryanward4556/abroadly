import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Entry from "../Entry";


const App = () => {
  return (
        <Switch>
          <Route exact path="/" component={Entry} />
          {/* <Route exact path="/about" component={About} /> */}
        </Switch>
  );
}

export default App;
