import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
// fichier scss
import './index.scss';

const Header = () => {

  return (
    <header className="header">

      <MediaQuery query="(max-width: 768px)">
        <Menu right width="250px" >
          <NavLink exact to="/">Accueil</NavLink>
          <NavLink to="/login">Connexion</NavLink>
        </Menu>
      </MediaQuery>

      <NavLink className="header-link" href="/"> <img className="header-img" src="src/components/App/assets/img/logo.png" alt="logo du site" /> </NavLink>

      <MediaQuery query="(min-width: 769px)">
        <nav className="header-nav-desktop">
          <ul>
            <li><NavLink className="header-link bm-item" exact to="/">Accueil</NavLink></li>
            <li><NavLink className="header-link bm-item" to="/login">Connexion</NavLink></li>
          </ul>
        </nav>
      </MediaQuery>
    </header>
  )
}

export default Header;
