import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaPuzzlePiece, FaCheckSquare } from 'react-icons/fa';

import './index.scss';

const GameMenu = ({ category }) => {
  return (
    <div className="gameMenu">
      <nav className="gameMenu-nav">
        <ul>
          <li>
            <Link to="/discovery">
              <FaGamepad className="gameMenu-icon--discovery" />
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
              <FaPuzzlePiece className="gameMenu-icon--puzzle" />
              <span className="gameMenu-link--puzzle">Puzzle</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GameMenu;
