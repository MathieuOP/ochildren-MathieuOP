/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import VerifyForm from '../../modules/verifyForm';

import './style.scss';

export default class FormUserDetails extends VerifyForm {
  constructor(props) {
    super(props);
    this.verify.init(['identifiant', 'birthday']);

    this.verify.setErrorComp(text => (
      <span style={{ color: 'red' }}>{text}</span>
    ));
    this.verify.setSuccessComp(text => (
      <span style={{ color: 'green' }}>{text}</span>
    ));

    this.state = {
      inputsErrors: this.verify.inputs
    };
  }

  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = evt => {
    evt.preventDefault();
    this.props.prevStep();
  };

  verifyChange = name => e => {
    const { value } = e.target;
    this.setState({
      inputsErrors: this.verify.cond(
        (() => {
          switch (name) {
            case 'identifiant':
              return value.length <= 0;
            case 'birthday':
              return !parseInt(value, 10);
            default:
              return false;
          }
        })(),
        name
      )
    });
    this.props.handleRegisterChange(name)(e);
  };

  render() {
    const { identifiantValue, birthdayValue } = this.props;
    return (
      <div className="form-personal-details">
        <Form>
          <Form.Field>
            <label>
              Entrez votre Identifiant
              <input
                placeholder="Choisissez et Entrez votre Identifiant"
                onChange={this.verifyChange('identifiant')}
                value={identifiantValue}
                style={{
                  borderColor: this.verify.verifyOne(
                    'identifiant',
                    identifiantValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne('identifiant', identifiantValue, err =>
                err
                  ? this.verify.errorComp("Cette identifiant n'est pas valide")
                  : this.verify.successComp('Cette identifiant est valide')
              )}
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              Entrez votre Age
              <input
                placeholder="Entrez votre Age"
                onChange={this.verifyChange('birthday')}
                value={birthdayValue}
                style={{
                  borderColor: this.verify.verifyOne(
                    'birthday',
                    birthdayValue,
                    err => (err ? 'red' : 'green')
                  )
                }}
              />
              {this.verify.verifyOne(
                'birthday',
                birthdayValue,
                err =>
                  err
                    ? this.verify.errorComp("Cette age n'est pas valide")
                    : this.verify.successComp(
                        "Mais c'est qu'il est grand ce petit boutchou !" // eslint-disable-line indent
                      ) // eslint-disable-line indent
              )}
            </label>
          </Form.Field>
          <Button
            disabled={this.verify.verifyAll()}
            id="continue-button"
            primary
            onClick={this.continue}
          >
            Continuer
          </Button>
          <Button id="back-button" primary={false} onClick={this.back}>
            Précedent
          </Button>
        </Form>
      </div>
    );
  }
}
