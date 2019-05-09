/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './style.scss';

class FormUserDetails extends Component {
  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      handleRegisterChange,
      emailValue,
      firstNameValue,
      lastNameValue
    } = this.props;

    return (
      <div className="form-user-details">
        <Form>
          <Form.Field>
            <label>Prénom</label>
            <input
              placeholder="Entrez votre Prénom"
              onChange={handleRegisterChange('firstName')}
              value={firstNameValue}
            />
          </Form.Field>
          <Form.Field>
            <label>Nom</label>
            <input
              placeholder="Entrez votre Nom"
              onChange={handleRegisterChange('lastName')}
              value={lastNameValue}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Entrez votre Email"
              onChange={handleRegisterChange('email')}
              value={emailValue}
            />
          </Form.Field>
          <Button id="continue-button" primary={true} onClick={this.continue}>
            Continuer
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormUserDetails;
