/* eslint-disable default-case */
/* eslint-disable react/require-render-return */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Succes';



class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    identifiant: '',
    birthday: '',
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


  handleChange = input => evt => {
    this.setState({ [input]: evt.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, identifiant, birthday } = this.state;
    const values = { firstName, lastName, email, identifiant, birthday };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        );
        case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return <div />;
    }
  }
}







export default UserForm;
