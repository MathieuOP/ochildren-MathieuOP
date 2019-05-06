/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {Button, Form } from 'semantic-ui-react';

import './style.scss';



class FormUserDetails extends Component {
  continue = evt => {
    evt.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='form-user-details'> 
        <Form>
          <Form.Field>
            <label>Prénom</label>
            <input 
              placeholder='Entrez votre Prénom'
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
             />
          </Form.Field>
          <Form.Field>
            <label>Nom</label>
            <input 
              placeholder='Entrez votre Nom'
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
             />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input 
              placeholder='Entrez votre Email'
              onChange={handleChange('email')}
              defaultValue={values.email}
             />
          </Form.Field>
          <Button
            id='continue-button'
            primary={true}
            onClick={this.continue}
            >
            Continuer
            </Button>
          </Form>
        
      </div>
    )
  }
}


export default FormUserDetails;
