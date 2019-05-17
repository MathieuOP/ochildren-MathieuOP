import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Success extends Component {
  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = evt => {
    evt.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="success">
        <React.Fragment>
          <h1>Merci de vous être enregisté!</h1>
          <p>Vous allez recevoir un email de confirmation</p>
        </React.Fragment>
      </div>
    );
  }
}

Success.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

export default Success;
