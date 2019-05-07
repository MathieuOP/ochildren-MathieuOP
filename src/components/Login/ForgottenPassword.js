import React, { Fragment } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './style.scss';



const ForgottenPassword = (handleChange, email) => {
  const handleEmailChange = name => e => handleChange(e.target.value, name);
  return (
    <Fragment>
      <h1>Changez votre mot de passe</h1>
      <br/>
      <p>Suivez les instructions ci-dessous</p>
      <br/>
      <Form>
        <Form.Field>
          <label>Veuillez renseigner votre Email</label>
          <input
            placeholder='Email' 
            type='text'
            onChange={handleEmailChange('email')}
            value={email}
          />
        </Form.Field>
        <Button 
          id='new-pw'
          type='submit'
        >
          ok
        </Button>
      </Form>
    </Fragment>
  )
}

export default ForgottenPassword;
