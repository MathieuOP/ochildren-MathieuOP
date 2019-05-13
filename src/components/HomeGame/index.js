import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import GameMenu from '../GameMenu';
import './index.scss';

class HomeGame extends Component {
  componentDidMount() {
    this.props.dataForHomeGame(this.props.category);
  }

  render() {
    console.log(dataHomeGame);
    const { category, dataHomeGame } = this.props;
    return (
      <div className="homeGame">
        <div className="homeGame-title">
          <h1 />
        </div>
        <GameMenu category={category} />
      </div>
    );
  }
}

HomeGame.propTypes = {
  category: PropTypes.string.isRequired,
  dataHomeGame: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired
};

export default HomeGame;
