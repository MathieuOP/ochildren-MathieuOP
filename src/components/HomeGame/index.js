import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameMenu from '../GameMenu';
import './index.scss';

class HomeGame extends Component {
  componentDidMount() {
    this.props.dataForHomeGame(this.props.category);
  }

  render() {
    const { category, dataHomeGame } = this.props;
    console.log(dataHomeGame);
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
