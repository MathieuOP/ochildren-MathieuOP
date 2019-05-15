import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Typed from 'react-typed';

import './index.scss';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
  componentDidMount() {
    this.props.dataForHomePage();
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

        {
          // <Grid className="home centered">
          //   <Grid.Row>
          //     <Grid.Column mobile={12} tablet={12} computer={8}>
          //       <div className="home-content">
          //         <p>
          //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //           Vivamus interdum id erat a laoreet. Mauris nec est at quam
          //           faucibus pretium. Suspendisse rutrum, elit at porta sodales,
          //           quam risus molestie libero, ultricies ornare tortor nulla ut
          //           leo. Fusce commodo ipsum nec augue sagittis condimentum. Ut
          //           vel magna ut erat placerat semper non eu ipsum. Pellentesque
          //           lobortis mauris nec erat scelerisque, sed lobortis diam
          //           vulputate. Vestibulum commodo auctor velit.
          //         </p>
          //       </div>
          //     </Grid.Column>
          //   </Grid.Row>
          // </Grid>
        }

        <div className="container">
          {dataHomePage.map(({ id, name, image }) => {
            const category = slugify(name);
            return (
              <div key={id} className="wrapper">
                <div onClick={this.handleClickCard} className="card">
                  <div className="card__face card__face--front">
                    <div className="home-category">
                      <img src={`/src/assets/img/${image}`} alt="icon" />
                      <h2>{name}</h2>
                    </div>
                  </div>
                  <div className="card__face card__face--back">
                    <div className="home-category home-category--link">
                      <p className="">
                        <Link
                          onClick={() => infosCatAge(category, id)}
                          to={`/home-game/${id}`}
                        >
                          jouer
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
