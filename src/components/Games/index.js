import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

class Games extends Component {
  componentDidMount() {
    const { dataForPuzzles, worldId, resetMemory } = this.props;
    dataForPuzzles(worldId);
    resetMemory();
  }

  render() {
    const { puzzles, dataMemory } = this.props;
    return (
      <div className="games">
        <h1>Les jeux</h1>

        <div className="games-wrapper">
          {puzzles.map(({ image, title, id }) => (
            <div key={title} className="games-puzzles">
              <img
                src={`http://92.243.9.67/plateforme-educative-api/public/uploads/images/${image}`}
                alt={title}
              />
              <Link to={`/puzzle/${id}`}> {title} </Link>
            </div>
          ))}
          {dataMemory.map(({ id, title, icon }) => (
            <div key={id} className="games-memory">
              <img
                src={`/src/assets/img/${icon}`}
                alt={title}
              />
              <Link to={`/memory/${id}`}> {title} </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Games.propTypes = {
  puzzles: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataForPuzzles: PropTypes.func.isRequired,
  worldId: PropTypes.string.isRequired
};

export default Games;
