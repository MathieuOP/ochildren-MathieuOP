/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Header from '../Header';
import Home from '../../containers/Home';
import HomeGame from '../../containers/HomeGame';
import CategoriesQuizzs from '../../containers/CategoriesQuizzs';
import Quizzs from '../../containers/Quizzs';
import Quiz from '../../containers/Quiz';
import MyPuzzle from '../MyPuzzle';
import Page404 from '../Page404';

// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = ({ error404 }) => (
  <div id="app">
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home-game/:category/puzzle" component={MyPuzzle} />
      <Route // is ok
        exact
        path="/home-game/:categories/categories"
        component={CategoriesQuizzs}
      />
      <Route exact path="/quiz/:quizId"
        render={({ match }) => {
          const { quizId } = match.params;
          
          if (!error404) {
            return <Quiz quizId={quizId} />;
          }
          return <Redirect to="/not-found" />
        }}
      />
      <Route
        exact
        path="/category/:categoryQuizId"
        render={({ match }) => {
          const { categoryQuizId } = match.params;

          if (!error404) {
            return <Quizzs categoryQuizId={categoryQuizId} />;
          }
          return <Redirect to="/not-found" />
        }}
      />
      <Route // is ok
        exact
        path="/home-game/:category"
        render={({ match }) => {
          const { category } = match.params;
          
          if (!error404) {
            return <HomeGame category={category} />;
          }
          return <Redirect to="/not-found" />
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
