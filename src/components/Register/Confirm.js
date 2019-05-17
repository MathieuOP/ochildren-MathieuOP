import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

class Confirm extends Component {
  componentDidUpdate() {
    const { signedUp, nextStep, error } = this.props;
    if (signedUp || error) nextStep();
  }

  continue = evt => {
    evt.preventDefault();
    const { signupSubmit, loading } = this.props;
    if (loading) return;
    signupSubmit();
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
      loading
    } = this.props;
    return (
      <div className="confirmation">
        <List>
          <List.Item>
            <List.Header>Identifiant</List.Header>
            {identifiantValue}
          </List.Item>
          <List.Item>
            <List.Header>Prénom</List.Header>
            {firstNameValue}
          </List.Item>
          <List.Item>
            <List.Header>Nom</List.Header>
            {lastNameValue}
          </List.Item>
          <List.Item>
            <List.Header>Email</List.Header>
            {emailValue}
          </List.Item>
        </List>
        <Button
          id="continue-button"
          primary
          loading={loading}
          onClick={this.continue}
        >
          Continuer
        </Button>
        <Button
          id="back-button"
          primary={false}
          disabled={loading}
          onClick={this.back}
        >
          Précedent
        </Button>
      </div>
    );
  }
}

Confirm.propTypes = {
  signedUp: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  signupSubmit: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  firstNameValue: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string.isRequired,
  identifiantValue: PropTypes.string.isRequired
};

export default Confirm;
