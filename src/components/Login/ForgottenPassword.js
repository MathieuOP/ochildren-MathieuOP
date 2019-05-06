import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const ForgottenPassword = (handleLoginChange) => {

  const handleSubmit = evt => {
    evt.preventdefault();
  }

  return (
    <div id='forgotten-pw'>
      <h1>Changez votre mot de pass</h1>
      <div>
        <p>Suivez les instructions ci-dessous</p>
      </div>
      <div className='forgotten-form'>
        <Form>
          <Form.Field>
            <label>Veuillez renseigner votre Email</label>
            <input
              placeholder='Email' 
              type='text'
              // onChange={handleLoginChange('forgottenPassword')}
            />
          </Form.Field>
          <Button 
            id='new-pw'
            type='submit'
          >
              ok
          </Button>
        </Form>
      </div>
    </div>
  )



}

export default ForgottenPassword;
