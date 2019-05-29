import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';

import './index.scss';

class Quizzs extends Component {
  componentDidMount() {
    const {
      getQuizByWorldId,
      worldId,
      handleGetUserInfos,
      loggedIn
    } = this.props;

    if (loggedIn) handleGetUserInfos();
    getQuizByWorldId(worldId);
  }

  handleClick = () => () => {
    const { initialQuiz } = this.props;
    initialQuiz();
  };

  handleClickFav = quizId => () => {
    console.log('send');
    const { toggleFavoris } = this.props;
    toggleFavoris(quizId);
  };

  render() {
    const { quizzsByWorldId, worldId } = this.props;
    console.log(worldId)
    return (
      <div className="quizzs">
        <h1>Nos quiz</h1>
        <div className="wrapper-quizzs">
          {quizzsByWorldId.map(({ image, id, title }) => (
            <div className="quizzs-quiz" key={id}>
              <img
                src={`http://92.243.9.67/plateforme-educative-api/public/uploads/images/${
                  image
                }`}
                alt="icon"
              />
              <Link
                onClick={this.handleClick(id)}
                to={`/quiz/${id}`}
              >
                {title}
              </Link>
              <FaRegHeart
                onClick={this.handleClickFav(id)}
                color="#000"
                className="quizzs-fav"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Quizzs.defaultProps = {
  handleGetUserInfos: () => {},
  loggedIn: false,
}

Quizzs.propTypes = {
  quizzsByWorldId: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialQuiz: PropTypes.func.isRequired,
  getQuizByWorldId: PropTypes.func.isRequired,
  worldId: PropTypes.string.isRequired,
  handleGetUserInfos: PropTypes.func,
  loggedIn: PropTypes.bool,
  toggleFavoris: PropTypes.func.isRequired,
};

export default Quizzs;
