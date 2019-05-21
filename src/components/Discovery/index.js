import React, { Component, lazy, Suspense } from 'react';

import PropTypes from 'prop-types';

import {
  Switch,
  Link,
  Route
} from 'react-router-dom';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import './index.scss';

// Discovery's home
class Home extends Component {
  state = {
    open1: false,
    open2: false,
    open3: false,  
  };

  show1 = dimmer1 => () => this.setState({ dimmer1, open1: true });

  show2 = dimmer2 => () => this.setState({ dimmer2, open2: true });

  show3 = dimmer3 => () => this.setState({ dimmer3, open3: true });

  close1 = () => this.setState({ open1: false });

  close2 = () => this.setState({ open2: false });

  close3 = () => this.setState({ open3: false });


  render() {
 
    const { open1, dimmer1 } = this.state;
    const { open2, dimmer2 } = this.state;
    const { open3, dimmer3 } = this.state;

    
    return (
      <main className="discovery">
        <h1 className="discovery--title">Bienvenu sur le dicovery</h1>
        <p className="discovery--description">
          Le discovery est un livre interactif qui vous apprendra tout sur les
          themes si dessous
        </p>
        <ul className="discovery--theme-list">
          <li className="discovery--theme-list--elem">
            <Modal
              className="space_modal"
              dimmer={dimmer1} 
              open={open1} 
              onClose={this.close1}
              trigger={<Image src='https://image.flaticon.com/icons/svg/639/639373.svg' size='tiny'  onClick={this.show1('blurring')} />}
              
            >
              <Modal.Header>Space Discovery </Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium" 
                  src="https://image.flaticon.com/icons/svg/1055/1055646.svg" />
                <Modal.Description>
                  <Header>Space Discovery</Header>
                  <p>Discovery est un livre interactif. Avec lui, tu decouvriras different thèmes...</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="red" 
                  onClick={this.close1}
                  size="large"
                >
                  Retour
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  size="large"
                ><Link to="discovery/space&card=1" style={{ color: '#fff', textDecoration: 'none' }}>Go!</Link></Button>
              </Modal.Actions>
            </Modal>
          </li>
          
          <li className="discovery--theme-list--elem">
            <Modal
              className="science_modal"
              dimmer={dimmer2} 
              open={open2} 
              onClose={this.close2}
              trigger={<Image src='https://image.flaticon.com/icons/svg/167/167732.svg' size='tiny'  onClick={this.show2('blurring')} />}
              
            >
              <Modal.Header>Science Discovery</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium" 
                  src="https://image.flaticon.com/icons/svg/1028/1028474.svg" />
                <Modal.Description>
                  <Header>Science Discovery</Header>
                  <p>Discovery est un livre interactif. Avec lui, tu decouvriras different thèmes...</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="red" 
                  onClick={this.close2}
                  size="large"
                >
                  Retour
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  size="large"
                >
                  <Link to="discovery/science&card=1" style={{ color: '#fff', textDecoration: 'none' }}>Go!</Link>
                </Button>
              </Modal.Actions>
            </Modal>
          </li>
          <li>
            <Modal
              className="nature_modal"
              dimmer={dimmer3} 
              open={open3} 
              onClose={this.close3}
              trigger={<Image src='https://image.flaticon.com/icons/svg/141/141767.svg' size='tiny'  onClick={this.show3('blurring')} />}
              
            >
              <Modal.Header>Nature Discovery</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size="medium" 
                  src="https://image.flaticon.com/icons/svg/713/713999.svg" />
                <Modal.Description>
                  <Header>Nature Discovery</Header>
                  <p>Discovery est un livre interactif. Avec lui, tu decouvriras different thèmes...</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="red" 
                  onClick={this.close3}
                  size="large"
                >
                  Retour
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  size="large"
                ><Link to="discovery/nature&card=1" style={{ color: '#fff', textDecoration: 'none' }}>Go!</Link></Button>
              </Modal.Actions>
            </Modal>
          </li>
        </ul>
      </main>
    );
  }
}

// Discovery dumb
const Discovery = ({ url }) => (
  <Switch>
    <Route exact path={url} component={Home} />

    <Suspense fallback={<div style={{ height: '100vh', width: '100vw', backgroundColor: '#fff', textAlign: 'center' }}>Loading...</div>}>
      <Route
        exact
        path={`${url}/:theme&card=:cardId`}
        render={({ match }) => {
          const { theme, cardId } = match.params;
          const formatedThemeName = theme.charAt(0).toUpperCase() + theme.slice(1);

          if (formatedThemeName.includes('..')) return <h1>Not found</h1>;

          const Theme = lazy(() =>
            import(`./themes/${formatedThemeName}`).catch(() => ({
              default: () => <h1>Not found</h1>
            }))
          );

          return <Theme cardId={parseInt(cardId, 10)} />;
        }}
      />
    </Suspense>
  </Switch>
);

Discovery.propTypes = {
  url: PropTypes.string.isRequired
};

export default Discovery;
