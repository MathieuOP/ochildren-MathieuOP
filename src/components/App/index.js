/**
 * Import
 */
import React from 'react';
import { Route, Switch } from "react-router-dom";

/**
 * Local import
 */
// Composants
import Header from '../Header';
import Home from '../Home';
import Quiz from '../../containers/Quiz';
// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
