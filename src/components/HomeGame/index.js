import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const HomeGame = ({ description, image }) => {
  return (
    <div className="homeGame">
      <div className="homeGame-title">
        <img src={`../src/assets/img/${image}`} alt="catégorie" />
        <h2> {description} </h2>
      </div>
    </div>
  );
};

HomeGame.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default HomeGame;
