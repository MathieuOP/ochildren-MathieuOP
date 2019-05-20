import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaEye, FaCheckSquare } from 'react-icons/fa';

import './index.scss';

const GameMenu = ({ category }) => {
  return (
    <div className="gameMenu">
      <nav className="gameMenu-nav">
        <ul>
          <li>
            <Link to="/discovery">
              <FaEye className="gameMenu-icon--discovery" />
              <span className="gameMenu-link--discovery">Discovery</span>
            </Link>
          </li>
          <li>
            <Link to={`/home-game/${category}/categories`}>
              <FaCheckSquare className="gameMenu-icon--square" />
              <span className="gameMenu-link--quiz">Quiz</span>
            </Link>
          </li>
          <li>
            <Link to={`/games/${category}`}>
              <FaGamepad className="gameMenu-icon--jeux" />
              <span className="gameMenu-link--jeux">Jeux</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GameMenu;
