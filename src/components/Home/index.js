import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FlipCard from 'react-flipcard3d';

import './index.scss';
import 'semantic-ui-css/semantic.min.css';

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

      <div className="home-category">
        <FlipCard>
          <FlipCard.Front>
            <div className="home-category-one">
              <img src="src/components/App/assets/img/bear.svg" alt="icon" />
              <h2>3-6 ans</h2>
            </div>
          </FlipCard.Front>
          <FlipCard.Back>
            <div className="home-category-one home-category-one-link">
              <p className=""><Link to="">jouer</Link></p>
            </div>
          </FlipCard.Back>
        </FlipCard>
        
        <FlipCard>
        <FlipCard.Front>
          <div className="home-category-two">
            <img src="src/components/App/assets/img/lego.svg" alt="icon" />
            <h2>7-10 ans</h2>
          </div>
        </FlipCard.Front>
        <FlipCard.Back>
          <div className="home-category-two home-category-one-link">
            <p className=""><Link to="">jouer</Link></p>
          </div>
        </FlipCard.Back>
      </FlipCard>
      </div>
    </div>
  )
}

export default Home;
