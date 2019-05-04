import React, { Component, Fragment } from 'react';
import Puzzle from 'react-image-puzzle';
import GameMenu from '../GameMenu';
import './index.scss';

class MyPuzzle extends Component {
  imgPuzzle = React.createRef();

  puzzle = React.createRef();

  puzzleFinished = () => {
    this.imgPuzzle.current.style.display = "block";
    this.puzzle.current.style.display = "none";
  }

  render() {
    return (
      <Fragment>
        <div className="puzzle">
          <Puzzle
            ref={this.puzzle}
            image='https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg'
            size="500"
            onDone={this.puzzleFinished}
          />
          <img id="test" ref={this.imgPuzzle} src="https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg" alt="" />
        </div>
        <GameMenu />
      </Fragment>
    )
  }
}

export default MyPuzzle;
