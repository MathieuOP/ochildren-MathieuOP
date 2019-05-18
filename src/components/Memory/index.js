import React, { Component, Fragment } from 'react';
import './index.scss';

class CardFlip extends Component {
  openedCard = [];

  container = React.createRef();

  componentDidMount() {
    const cards = this.container.current.childNodes;
    cards.forEach((card, index) => {
      card.childNodes[0].addEventListener('click', this.handleClickCard(index, card.name));
    });
  }

  componentWillUnmount() {
    const cards = this.container.current.childNodes;
    cards.forEach((card, index) => {
      card.childNodes[0].removeEventListener('click', this.handleClickCard(index, card.name));
    });
  }

  cardMatched = () => {
    const { dataMemory, updatedData, resetCountClick, tentative, countPairs, updatedOpenedCard, openedCard } = this.props;

    if (openedCard.length === 2 && openedCard[0].name === openedCard[1].name && openedCard[0].index !== openedCard[1].index) {
      countPairs();

      setTimeout(() => {
        dataMemory[openedCard[0].index].complete = true;
        dataMemory[openedCard[1].index].complete = true;

        updatedData([
          ...dataMemory,
        ]);

        resetCountClick();
        updatedOpenedCard([]);
        tentative();
      }, 1000);
    }
  }

  notMatch = () => {
    const { openedCard, updatedOpenedCard, updatedData, tentative, resetCountClick, dataMemory } = this.props;

    if (openedCard.length === 2 && openedCard[0].name !== openedCard[1].name && openedCard[0].index !== openedCard[1].index) {
      
      setTimeout(() => {
        dataMemory[openedCard[0].index].close = true;
        dataMemory[openedCard[1].index].close = true;

        updatedData([
          ...dataMemory,
        ]);

        updatedOpenedCard([]);
        tentative();
        resetCountClick();
      }, 800);
    }
  }

  gameFinished = () => {
    const { memoryFinished, dataMemory, getCountPaire } = this.props;

    if (getCountPaire == dataMemory.length / 2) {
      setTimeout(() => {
        memoryFinished();
      }, 1200);
    }
  }

  handleClickCard = (indexCard, name) => (e) => {
    const {
      incrementeCountClick,
      dataMemory,
      updatedData,
      updatedOpenedCard,
    } = this.props;

    if (!dataMemory[indexCard].close) return;
    incrementeCountClick();

    if (this.props.getCountClick <= 2 && dataMemory[indexCard].close) {
      dataMemory[indexCard].close = false;
      updatedData([
        ...dataMemory,
      ]);

      updatedOpenedCard({
        ...dataMemory[indexCard],
        index: indexCard,
      });
      
      this.cardMatched();
      this.notMatch();
      this.gameFinished();
    }
  };

  render() {
    const { getCountPaire, getTentative, dataMemory, finished } = this.props;

    return (
      <Fragment>
        <div className="memory-infos">
          <p>Nombre de paire trouvée: { getCountPaire }</p>
          <p>Nombre de tentative: {getTentative}</p>
        </div>
        <div ref={this.container} className="container">
          {
            dataMemory.map((card, index) => (
              <div key={index} className="wrapper">
                <div data-animal={card.name} className={"card" + (!card.close ? ' is-flipped' : '') + (card.complete ? ' matched' : '')}>
                  <div className="card__face card__face--front">
                    <p>
                      o'children
                    </p>
                  </div>
                  <div className="card__face card__face--back">
                    <div className="home-category home-category--link">
                      <img src={`src/assets/img/puzzle_${card.name}.jpg`} alt="animal" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          finished && (
            <div className="memory-win">
              <p>Bravo tu as terminé le memory !</p>
            </div>
          )
        }
      </Fragment>
    );
  }
}

export default CardFlip;
