import React, { Component, Fragment } from 'react';
import Puzzle from 'react-image-puzzle';
import './index.scss';

class MyPuzzle extends Component {
  imgPuzzle = React.createRef();

  puzzle = React.createRef();

  textWin = React.createRef();

  puzzleFinished = () => {
    this.imgPuzzle.current.className = 'puzzle-img puzzle-img--show';
    this.puzzle.current.className = 'puzzle--hide';
    this.textWin.current.style.transition = '2s';
    this.textWin.current.style.opacity = '1';
    this.textWin.current.style.top = '200.500px';
  };

  render() {
    return (
      <Fragment>
        <div className="puzzle">
          <p ref={this.textWin} className="puzzle-win-text">
            BRAVO !
          </p>
          <div ref={this.puzzle}>
            <Puzzle
              image="https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg"
              size={500}
              onDone={this.puzzleFinished}
            />
          </div>
          <img
            className="puzzle-img"
            ref={this.imgPuzzle}
            src="https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg"
            alt=""
          />
        </div>
      </Fragment>
    );
  }
}

export default MyPuzzle;
