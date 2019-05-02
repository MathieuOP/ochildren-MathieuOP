/**
 * Import
 */
import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"

/**
 * Local import
 */
// Composants
import Header from '../Header';
// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
  </div>
);

/**
 * Export
 */
export default App;
