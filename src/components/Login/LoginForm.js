import React from 'react'
import { Button, Form } from 'semantic-ui-react';

import './style.scss';





const LoginForm = () => (
    <div className='login'> 
      <Form className='login-form'>
    <Form.Field>
      <label>Identifiant</label>
      <input
        placeholder='Identifiant' 
        type='text'
        />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input 
      placeholder='Password' 
      type='password'
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
      <a className="app-link">Mot de passe oublié</a>
    </div>
  )

  export default LoginForm;
