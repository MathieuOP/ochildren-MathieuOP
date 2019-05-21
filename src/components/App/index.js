/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Login from '../Login';
import Register from '../../containers/Register';
import HomeGame from '../../containers/HomeGame';
import CategoriesQuizzs from '../../containers/CategoriesQuizzs';
import Quizzs from '../../containers/Quizzs';
import Quiz from '../../containers/Quiz';
import Games from '../../containers/Games';
import MyPuzzle from '../../containers/MyPuzzle';
import Memory from '../../containers/Memory';
import Page404 from '../Page404';
import Profile from '../../containers/Profile';

// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = ({ error404, dataMemory }) => (
  <div id="app">
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/games/:worldId"
        render={({ match }) => {
          const { worldId } = match.params;

          return <Games worldId={worldId} />;
        }}
      />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/profile" component={Profile} />

      <Route
        exact
        path="/puzzle/:puzzleId"
        render={({ match }) => {
          const { puzzleId } = match.params;

          return <MyPuzzle puzzleId={puzzleId} />;
        }}
      />
      <Route
        exact
        path="/memory/:memoryId"
        render={({ match }) => {
          const { memoryId } = match.params;
          const searchMemory = dataMemory.find(memory => memory.id == memoryId);

          if (searchMemory === undefined) {
            return <Redirect to="/not-found" />;
          }
          return <Memory memoryId={memoryId} />;
        }}
      />
      <Route // is ok
        exact
        path="/home-game/:categories/categories"
        component={CategoriesQuizzs}
      />
      <Route
        exact
        path="/quiz/:quizId"
        render={({ match }) => {
          const { quizId } = match.params;

          if (!error404) {
            return <Quiz quizId={quizId} />;
          }
          return <Redirect to="/not-found" />;
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
          return <Redirect to="/not-found" />;
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
          return <Redirect to="/not-found" />;
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
