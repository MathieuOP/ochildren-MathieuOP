import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

import './index.scss';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
  componentDidMount() {
    const { dataForHomePage } = this.props;
    dataForHomePage();
  }

  handleClickCard = e => {
    e.currentTarget.classList.toggle('is-flipped');
  };

  render() {
    const { dataHomePage, infosCatAge } = this.props;
    return (
      <div className="home">
        <h1>
          <Typed
            className="home-title"
            strings={["Bienvenue sur O'Children"]}
            showCursor={false}
            typeSpeed={50}
          />
        </h1>

        <div className="container">
          {dataHomePage.map(({ id, name, image }) => (
            <div key={id} className="wrapper">
              <div onClick={this.handleClickCard} className="card">
                <div className="card__face card__face--front">
                  <div className="home-category">
                    <img
                      src={`http://92.243.9.67/plateforme-educative-api/public/uploads/images/${image}`}
                      alt="icon"
                    />
                    <h2>{name}</h2>
                  </div>
                </div>
                <div className="card__face card__face--back">
                  <div className="home-category home-category--link">
                    <p className="">
                      <Link
                        onClick={() => infosCatAge(name, id)}
                        to={`/home-game/${id}`}
                      >
                        jouer
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dataHomePage: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired,
  dataForHomePage: PropTypes.func.isRequired,
  infosCatAge: PropTypes.func.isRequired
};

export default Home;
