/**
 * Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Header from '../Header';
import Home from '../../containers/Home';
import HomeGame from '../HomeGame';

import { selectCategoryFromSlug } from '../../datas';
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
      <Route path="/home-game/jeux/puzzle" component={MyPuzzle} />

      <Route
        path="/home-game/:slug"
        render={({ match }) => {
          const { slug } = match.params;
          const singleCategory = selectCategoryFromSlug(slug);

          return <HomeGame {...singleCategory} />;
        }}
      />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
