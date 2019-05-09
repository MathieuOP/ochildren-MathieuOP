/* eslint-disable default-case */
/* eslint-disable react/require-render-return */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Succes';

class Register extends Component {
  state = {
    step: 1
  };

  // etape suivante
  nextStep = () => {
    const { step } = this.state;
    // console.log(
    //   Object.values(this.state).map(e => (typeof e === 'string' ? e))
    // );
    // if (
    //   Object.values(this.state)
    //     .map(e => typeof e === 'string')
    //     .trim().length <= 0
    // )
    // return;
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
    const {
      handleRegisterChange,
      emailValue,
      firstNameValue,
      lastNameValue,
      identifiantValue,
      birthdayValue
    } = this.props;
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleRegisterChange={handleRegisterChange}
            emailValue={emailValue}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleRegisterChange={handleRegisterChange}
            identifiantValue={identifiantValue}
            birthdayValue={birthdayValue}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            {...this.props}
          />
        );
      case 4:
        return <Success />;
      default:
        return <div />;
    }
  }
}

export default Register;
