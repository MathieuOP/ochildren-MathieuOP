import React, { lazy, Suspense } from 'react';

import PropTypes from 'prop-types';

import { Switch, Link, Route } from 'react-router-dom';

import './index.scss';

// Discovery's home
const Home = () => (
  <main id="discovery">
    <h1 className="discovery--title">Bienvenu sur le dicovery</h1>
    <p className="discovery--description">
      Le discovery est un livre interactif qui vous apprendra tout sur les
      themes si dessous
    </p>
    <ul className="discovery--theme-list">
      <li className="discovery--theme-list--elem">
        <Link to="discovery/space&card=1">Space</Link>
      </li>
    </ul>
  </main>
);

// Discovery dumb
const Discovery = ({ url }) => (
  <Switch>
    <Route exact path={url} component={Home} />

    <Suspense fallback={<div>Loading...</div>}>
      <Route
        exact
        path={`${url}/:theme&card=:cardId`}
        render={({ match }) => {
          const { theme, cardId } = match.params,
            formatedThemeName = theme.charAt(0).toUpperCase() + theme.slice(1);

          if (formatedThemeName.includes('..')) return <h1>Not found</h1>;

          const Theme = lazy(() =>
            import(`./themes/${formatedThemeName}`).catch(() => ({
              default: () => <h1>Not found</h1>
            }))
          );

          return <Theme cardId={parseInt(cardId, 10)} />;
        }}
      />
    </Suspense>
  </Switch>
);

Discovery.propTypes = {
  url: PropTypes.string.isRequired
};

export default Discovery;
