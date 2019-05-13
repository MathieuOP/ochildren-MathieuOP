import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import './index.scss';

const Quizzs = ({
  quizzs,
  currrentSlugCatQuizzs,
  getQuestionsByQuizId,
  currentSlugCatAge,
  initialQuiz
}) => {
  const handleClick = id => () => {
    getQuestionsByQuizId(id);
    initialQuiz();
  };

  return (
    <div className="quizzs">
      <h1>{currrentSlugCatQuizzs}</h1>

      <div className="wrapper-quizzs">
        {quizzs.map(quiz => (
          <div className="quizzs-quiz" key={quiz.quizzs[0].id}>
            <Link
              onClick={handleClick(quiz.quizzs[0].id)}
              to={`/home-game/${currentSlugCatAge}/${quiz.name}/quiz`}
            >
              {quiz.quizzs[0].title}
            </Link>
            <FaRegHeart color="#000" className="quizzs-fav" />
          </div>
        ))}
      </div>
    </div>
  );
};

Quizzs.propTypes = {
  quizzs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currrentSlugCatQuizzs: PropTypes.string.isRequired,
  getQuestionsByQuizId: PropTypes.func.isRequired,
  currentSlugCatAge: PropTypes.string.isRequired,
  initialQuiz: PropTypes.func.isRequired
};
export default Quizzs;
