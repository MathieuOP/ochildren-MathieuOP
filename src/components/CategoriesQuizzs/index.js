import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import './index.scss';

class CategoriesQuizzs extends Component {
  componentDidMount() {
    this.props.getAllCategoriesQuizzs(); // Lancement de l'action pour récupérer toutes les catégories de quiz
  }

  // Lancement de l'action pour récupérer les quizzs selon un ID
  handleClick = (id, slugCatQuizzs) => () => {
    const { getQuizzsById, currentSlugCatQuizzs } = this.props;

    getQuizzsById(id);
    console.log(slugCatQuizzs);
    currentSlugCatQuizzs(slugCatQuizzs);
  };

  render() {
    const { categoriesQuizzs, slugCatAge } = this.props;

    return (
      <div className="categories">
        <h1>Les catégories de nos quizzs</h1>

        <div className="wrapper-categories">
          {categoriesQuizzs.map(({ id, name, image }) => {
            const slugCatQuizzs = slugify(name);

            return (
              <Link
                key={id}
                onClick={this.handleClick(id, slugCatQuizzs)}
                className="categories-quiz"
                to={`/home-game/${slugCatAge}/${slugCatQuizzs}`}
              >
                <img src={`/src/assets/img/${image}`} alt="icon" />
                <span>{name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

CategoriesQuizzs.propTypes = {
  getAllCategoriesQuizzs: PropTypes.func.isRequired,
  getQuizzsById: PropTypes.func.isRequired,
  currentSlugCatQuizzs: PropTypes.func.isRequired,
  categoriesQuizzs: PropTypes.arrayOf(PropTypes.object).isRequired,
  slugCatAge: PropTypes.string.isRequired
};

export default CategoriesQuizzs;
