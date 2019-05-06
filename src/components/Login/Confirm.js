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
      <div classNAme='confirmation'>
      <List>
        <List.Item primaryText="First Name" secondaryText={firstName} />
        <List.Item primaryText="Last Name" secondaryText={lastName} />
        <List.Item primaryText="Email" secondaryText={email} />
        <List.Item primaryText="Identifiant" secondaryText={identifiant} />
        <List.Item primaryText="Birthday" secondaryText={birthday} />  
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
        onClick={this.continue}
      >
        Précedent
      </Button>
      </div>
    );
  }
}

export default Confirm;
