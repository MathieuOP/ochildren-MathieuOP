import React from 'react'
import { Button, Form } from 'semantic-ui-react';

import './style.scss';





const LoginForm = ({ password, loading, handleLoginChange, onLoginSubmit}) => {

  const handleChange = name => evt => {
    const { value } = evt.target;
    handleLoginChange(value, name);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    onLoginSubmit();
  }

  return (
    <Form className='login-form' onSubmit={handleSubmit}>
      <Form.Field>
        <label>Identifiant</label>
        <input
          placeholder='Identifiant' 
          type='text'
          onChange = {handleChange('identifiant')}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input 
          placeholder='Password' 
          type='password'
          value={password}
          onChange={handleChange('password')}
          loading={loading}
          disabled={loading}
        />
      </Form.Field>        
      <div className='ui two buttons'>
        <Button id='connexion'>
          Connexion
        </Button>
        <Button
          id='inscription'
        >
        Inscription
        </Button>
      </div>    
    </Form>
  )
}

  export default LoginForm;
