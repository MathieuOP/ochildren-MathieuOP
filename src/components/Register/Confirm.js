/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

import './style.scss';

class Confirm extends Component {
  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = evt => {
    evt.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      emailValue,
      firstNameValue,
      lastNameValue,
      identifiantValue,
      birthdayValue
    } = this.props;
    return (
      <div className="confirmation">
        <List>
          <List.Item>
            <List.Header>First Name</List.Header>
            {firstNameValue}
          </List.Item>
          <List.Item>
            <List.Header>Last Name</List.Header>
            {lastNameValue}
          </List.Item>
          <List.Item>
            <List.Header>Email</List.Header>
            {emailValue}
          </List.Item>
          <List.Item>
            <List.Header>Identifiant</List.Header>
            {identifiantValue}
          </List.Item>
          <List.Item>
            <List.Header>Birthday</List.Header>
            {birthdayValue}
          </List.Item>
        </List>
        <Button id="continue-button" primary={true} onClick={this.continue}>
          Continuer
        </Button>
        <Button id="back-button" primary={false} onClick={this.back}>
          Précedent
        </Button>
      </div>
    );
  }
}

export default Confirm;
