import React from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

  return (
    <div>
      <h1 className="home-title">Bienvenue sur O'Children</h1>
      <Grid className="home centered"> 
        <Grid.Row>
          <Grid.Column mobile={12} tablet={12} computer={8}>
            <div className="home-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum id erat a laoreet. Mauris nec est at quam faucibus pretium. 
                Suspendisse rutrum, elit at porta sodales, quam risus molestie libero, ultricies ornare tortor nulla ut leo. Fusce commodo ipsum nec augue sagittis condimentum.
                Ut vel magna ut erat placerat semper non eu ipsum. Pellentesque lobortis mauris nec erat scelerisque, sed lobortis diam vulputate. Vestibulum commodo auctor velit.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div className="category">
        <div className="category-one">
          <h2>3-6 ans</h2>
          <hr />
          <p className="category-one-link"><Link to="">jouer</Link></p>
        </div>
        <div className="category-two">
          <h2>7-10 ans</h2>
          <hr />
          <p className="category-one-link"><Link to="">jouer</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Home;
