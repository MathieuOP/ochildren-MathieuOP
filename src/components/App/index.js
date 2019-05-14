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
import HomeGame from '../../containers/HomeGame';
import CategoriesQuizzs from '../../containers/CategoriesQuizzs';
import Discovery from '../Discovery';
import Quizzs from '../../containers/Quizzs';
import Quiz from '../../containers/Quiz';
import MyPuzzle from '../MyPuzzle';
import Page404 from '../Page404';

// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Route
      path="*"
      render={({ location }) =>
        /^(?!.*(\/home-game\/\d+\/discovery\/)).*$/.test(location.pathname) && (
          <Header />
        )
      }
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home-game/:category/puzzle" component={MyPuzzle} />
      <Route
        path="/home-game/:category/categories"
        component={CategoriesQuizzs}
      />
      <Route
        path="/home-game/:category/discovery"
        render={({ match }) => <Discovery url={match.url} />}
      />

      <Route path="/home-game/:catAge/:catQuizzs/quiz" component={Quiz} />
      <Route path="/home-game/:catAge/:catQuizzs" component={Quizzs} />
      <Route
        path="/home-game/:category"
        render={({ match }) => {
          const { category } = match.params;

          return <HomeGame category={category} />;
        }}
      />
      <Route component={Page404} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
