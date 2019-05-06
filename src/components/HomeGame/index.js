import React from 'react';
import PropTypes from 'prop-types';
import GameMenu from '../GameMenu';
import './index.scss';

const HomeGame = ({ description, image, slug }) => {
  return(
    <div className="homeGame">
      <div className="homeGame-title">
        <img src={`../src/components/App/assets/img/${image}`} alt="catégorie" />
        <h2> { description } </h2>
      </div>
      <GameMenu slug={slug}/>
    </div>
  )
}

HomeGame.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default HomeGame;
