import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaSignInAlt, FaHome } from 'react-icons/fa';
// fichier scss
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <MediaQuery query="(max-width: 768px)">
        <Menu right width="250px">
          <p className="header-p">
            <FaHome size="1.5em" color="#fff" />
            <NavLink className="header-link" exact to="/">
              Accueil
            </NavLink>
          </p>
          <p className="header-p">
            <FaSignInAlt size="1.5em" color="#fff" />
            <NavLink className="header-link" to="/login">
              Connexion
            </NavLink>
          </p>
        </Menu>
      </MediaQuery>

      <NavLink className="header-link" to="/">
        {' '}
        <img
          className="header-img"
          src="http://localhost:3000/src/assets/img/logo_ochildren.png"
          alt="logo du site"
        />{' '}
      </NavLink>

      <MediaQuery query="(min-width: 769px)">
        <nav className="header-nav-desktop">
          <ul>
            <li>
              <FaHome size="1.7em" color="#FF2626" />{' '}
              <NavLink className="header-link bm-item" exact to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <FaSignInAlt size="1.7em" color="#FF2626" />{' '}
              <NavLink className="header-link bm-item" to="/login">
                Connexion
              </NavLink>
            </li>
          </ul>
        </nav>
      </MediaQuery>
    </header>
  );
};

export default Header;
