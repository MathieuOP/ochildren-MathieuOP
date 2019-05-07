/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
import { BrowserRouter as Router } from "react-router-dom"
>>>>>>> 0dc2d3198ec26039ebaf71510cff4bd571223a60

/**
 * Local import
 */
import App from 'src/components/App';
// store
import store from 'src/store';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
