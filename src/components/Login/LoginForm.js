import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import VerifyForm from '../../modules/verifyForm';

import './style.scss';

class LoginForm extends VerifyForm {
  constructor(props) {
    super(props);

    this.verify.init(['identifiant', 'password']);

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

  handleChange = name => evt => {
    const { value } = evt.target;
    this.props.handleLoginChange(value, name);
    return this.setState({
      inputsErrors: this.verify.cond(
        (() => {
          if (value.length <= 0) return true;
          switch (name) {
            case 'identifiant':
              return !/^.\S*@\w+\.[\w]+(\w+\.[\w]+)*$/.test(value);
            case 'password':
              return value.length <= 7;
            default:
              return false;
          }
        })(),
        name
      )
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onLoginSubmit();
  };

  render() {
    const { password, identifiant, loading } = this.props;
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>
            Identifiant
            <input
              placeholder="Identifiant"
              type="text"
              onChange={this.handleChange('identifiant')}
              style={{
                borderColor: this.verify.verifyOne(
                  'identifiant',
                  identifiant,
                  error => (error ? 'red' : 'green')
                )
              }}
            />
            {this.verify.verifyOne('identifiant', identifiant, error =>
              error
                ? this.verify.errorComp("Cette identifiant n'est pas valide")
                : this.verify.successComp('Votre identifiant est valide')
            )}
          </label>
        </Form.Field>
        <Form.Field>
          <label>
            Password
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange('password')}
              loading={loading}
              disabled={loading}
              style={{
                borderColor: this.verify.verifyOne(
                  'password',
                  password,
                  error => (error ? 'red' : 'green')
                )
              }}
            />
            {this.verify.verifyOne('password', password, error =>
              error
                ? this.verify.errorComp(
                    'Votre password doit être superieur a 7 characters'
                  )
                : this.verify.successComp('Votre password est valide')
            )}
          </label>
        </Form.Field>
        <div className="ui two buttons">
          <Button disabled={this.verify.verifyAll()} id="connexion">
            Connexion
          </Button>
          <Link to="/register" id="inscription" className="ui button">
            Inscription
          </Link>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
