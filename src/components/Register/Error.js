import React from 'react';

import './style.scss';

const Error = () => (
  <div className="error">
    <React.Fragment>
      <h1>Une erreur est survenu</h1>
      <p>
        Vous{' '}
        <a href="" onClick={() => window.location.reload()}>
          pouvez retourner sur la page d'inscription
        </a>{' '}
        pour ressayer
      </p>
    </React.Fragment>
  </div>
);

export default Error;
