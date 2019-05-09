/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Button, List} from 'semantic-ui-react';

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
      values: { firstName, lastName, email, identifiant, birthday }
    } = this.props;
    return (
      <div className='confirmation'>
      <List>
      <List.Item>
            <List.Header>First Name</List.Header>
            {firstName}
          </List.Item>
          <List.Item>
            <List.Header>Last Name</List.Header>
            {lastName}
          </List.Item>
          <List.Item>
            <List.Header>Email</List.Header>
            {email}
          </List.Item>
          <List.Item >
            <List.Header>Identifiant</List.Header>
            {identifiant}
          </List.Item>
          <List.Item>
            <List.Header>Birthday</List.Header>
            {birthday}
          </List.Item>  
      </List>
      <Button
        id='continue-button'
        primary={true}
        onClick={this.continue}
      >
        Continuer
      </Button>
      <Button
        id='back-button'
        primary={false}
        onClick={this.back}
      >
        Précedent
      </Button>
      </div>
    );
  }
}

export default Confirm;
