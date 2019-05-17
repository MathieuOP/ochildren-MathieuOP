/* eslint-disable default-case */
/* eslint-disable react/require-render-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';
import Error from './Error';

class Register extends Component {
  state = {
    step: 1
  };

  componentWillUnmount() {
    this.props.signeUpReset();
  }

  // etape suivante
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // retour etape antérieur
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  render() {
    const { step } = this.state;
    const { error } = this.props;
    switch (step) {
      case 1:
        return <FormUserDetails nextStep={this.nextStep} {...this.props} />;
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            {...this.props}
          />
        );
      case 3:
        return !error ? <Success /> : <Error />;
      default:
        return <div />;
    }
  }
}

Register.propTypes = {
  error: PropTypes.bool.isRequired,
  signeUpReset: PropTypes.func.isRequired
};

export default Register;
