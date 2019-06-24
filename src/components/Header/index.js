import React from 'react';
import PropTypes from 'prop-types';
import { bubble as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaSignInAlt, FaHome } from 'react-icons/fa';

// fichier scss
import './index.scss';
import logo from '../../assets/img/logo.png';

const Header = ({ loggedIn, handleLogOut }) => (
  <header className="header">
    <MediaQuery query="(max-width: 768px)">
      <Menu right width="250px">
        <p className="header-p">
          <FaHome size="1.5em" color="#fff" />
          <NavLink className="header-link" exact to="/">
            Accueil
          </NavLink>
        </p>
        {loggedIn ? (
          <>
            <p className="header-p">
              <FaSignInAlt size="1.5em" color="#fff" />
              <NavLink className="header-link" to="/profile">
                Mon Compte
              </NavLink>
            </p>
            <p className="header-p">
              <FaSignInAlt size="1.5em" color="#fff" />
              <a
                className="header-link bm-item"
                href="#"
                onClick={handleLogOut}
              >
                Se déconnecter
              </a>
            </p>
          </>
        ) : (
          <p className="header-p">
            <FaSignInAlt size="1.5em" color="#fff" />
            <NavLink className="header-link" to="/login">
              Connexion
            </NavLink>
          </p>
        )}
      </Menu>
    </MediaQuery>

    <NavLink className="header-link" to="/">
      <img
        className="header-img"
        src="./src/assets/img/logo.png"
        alt="logo du site"
      />
    </NavLink>

    <MediaQuery query="(min-width: 769px)">
      <nav className="header-nav-desktop">
        <ul>
          <li>
            <FaHome size="1.7em" color="lightgreen" />
            <NavLink className="header-link bm-item" exact to="/">
              Accueil
            </NavLink>
          </li>
          {loggedIn ? (
            <>
              <li>
                <FaSignInAlt size="1.7em" color="lightgreen" />
                <NavLink className="header-link bm-item" to="/profile">
                  Mon Compte
                </NavLink>
              </li>
              <li>
                <FaSignInAlt size="1.7em" color="lightgreen" />
                <a
                  className="header-link bm-item"
                  href="#"
                  onClick={handleLogOut}
                >
                  Se déconnecter
                </a>
              </li>
            </>
          ) : (
            <li>
              <FaSignInAlt size="1.7em" color="lightgreen" />
              <NavLink className="header-link bm-item" to="/login">
                Connexion
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </MediaQuery>
  </header>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default Header;
