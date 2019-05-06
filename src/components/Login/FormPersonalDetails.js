/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react';

import './style.scss';


class FormPersonalDetails extends Component {
  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = evt => {
    evt.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleChange } = this.props;
    return (
      <div className='form-personal-details'>
        <Form>
          <Form.Field>
            <label>Choisissez et Entrez votre Identifiant</label>
            <input 
              placeholder='Choisissez et Entrez votre Identifiant'
              onChange={handleChange('identifiant')}
              defaultValue={values.identifiant}
             />
          </Form.Field>
          <Form.Field>
            <label>Entrez votre Age</label>
            <input 
              placeholder='Entrez votre Age'
              onChange={handleChange('birthday')}
              defaultValue={values.birthday}
             />
          </Form.Field>
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
        </Form>
      </div>
    )
  }

}

export default FormPersonalDetails;
