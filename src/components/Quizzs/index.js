import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';

import './index.scss';

class Quizzs extends Component {
  componentDidMount() {
    this.props.getQuizByWorldId(this.props.categoryQuizId)
  }

  handleClick = () => () => {
    const { initialQuiz } = this.props;
    initialQuiz();
  };

  render() {
    const { quizzsByWorldId, nameCategoryQuiz, loaded } = this.props;
    return (
      <div className="quizzs">
        {
          loaded && (
            <Fragment>
              <h1>{ nameCategoryQuiz } </h1>
              <div className="wrapper-quizzs">
                {quizzsByWorldId.map(quiz => (
                  <div className="quizzs-quiz" key={quiz.quizzs[0].id}>
                    <Link
                      onClick={this.handleClick(quiz.quizzs[0].id)}
                      to={`/quiz/${quiz.quizzs[0].id}`}
                    >
                      {quiz.quizzs[0].title}
                    </Link>
                    <FaRegHeart color="#000" className="quizzs-fav" />
                  </div>
                ))}
              </div>
            </Fragment>
          )
        }
      </div>
    )
  }
};

Quizzs.propTypes = {
  quizzsByWorldId: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialQuiz: PropTypes.func.isRequired
};
export default Quizzs;
