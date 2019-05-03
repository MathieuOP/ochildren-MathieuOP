import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaPuzzlePiece, FaCheckSquare } from 'react-icons/fa';

import './index.scss';


const GameMenu = () => {

  return (
    <div className="gameMenu">
      <nav className="gameMenu-nav">
        <ul>
          <li>
            <Link to="/Discovery">
              <FaGamepad size="3em" />
              <span>Discovery</span>
            </Link>
          </li>
          <li>
            <Link to="/Quiz">
              <FaCheckSquare size="2em" className="gameMenu-icon--square" />
              <span className="gameMenu-link--quiz">Quiz</span> 
            </Link>
          </li>
          <li>
            <Link to="Puzzle">
              <FaPuzzlePiece size="2em" className="gameMenu-icon--puzzle" />
              <span className="gameMenu-link--puzzle">Puzzle</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default GameMenu;
