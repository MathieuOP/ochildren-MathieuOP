import React, { Component } from 'react'

import './style.scss';


 class Succes extends Component {
  continue = evt => {
    evt.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = evt => {
    evt.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
     <div className='succes'>
        <React.Fragment>
          <h1>Merci de vous être enregisté!</h1>
          <p>Vous allez recevoir un email de condirmation</p>
        </React.Fragment>
     </div>
    );
  }
}

export default Succes;
