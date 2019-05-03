/**
 * Import
 */
import React from 'react';
import { Route } from "react-router-dom";

/**
 * Local import
 */
// Composants
import Header from '../Header';
import Home from '../Home';
import Quiz from '../Quiz';
// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
  </div>
);

/**
 * Export
 */
export default App;
