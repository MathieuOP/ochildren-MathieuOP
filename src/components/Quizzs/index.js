import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  render() {
    const { quizzsByWorldId, loaded } = this.props;

    return (
      <div className="quizzs">
        {
          loaded && (
            <Fragment>
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
                  </div>
                ))}
              </div>
            </Fragment>
          )
        }
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
  loaded: PropTypes.bool.isRequired,
};

export default Quizzs;
