import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class CardFlip extends Component {
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
        dataMemory.memory[openedCard[0].index].complete = true;
        dataMemory.memory[openedCard[1].index].complete = true;
        updatedData([dataMemory]);

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
        dataMemory.memory[openedCard[0].index].close = true;
        dataMemory.memory[openedCard[1].index].close = true;

        updatedData([dataMemory]);

        updatedOpenedCard([]);
        tentative();
        resetCountClick();
      }, 800);
    }
  }

  gameFinished = () => {
    const { memoryFinished, dataMemory, getCountPaire } = this.props;

    if (getCountPaire == dataMemory.memory.length / 2) {
      setTimeout(() => {
        memoryFinished();
      }, 1200);
    }
  }

  handleClickCard = (indexCard) => (e) => {
    const {
      incrementeCountClick,
      dataMemory,
      updatedData,
      updatedOpenedCard,
    } = this.props;

    if (!dataMemory.memory[indexCard].close) return;
    incrementeCountClick();

    if (this.props.getCountClick <= 2 && dataMemory.memory[indexCard].close) {
      dataMemory.memory[indexCard].close = false;

      updatedData([dataMemory]);
      
      updatedOpenedCard({
        ...dataMemory.memory[indexCard],
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
        <div className={`memory-infos-cat-${dataMemory.world.id}`}>
          <p>Nombre de paire trouvée: { getCountPaire }</p>
          <p>Nombre de tentative: {getTentative}</p>
        </div>
        <div ref={this.container} className="memory-container">
          {
            dataMemory.memory.map((card, index) => (
              <div key={index} className={`memory-wrapper-cat-${dataMemory.world.id}`}>
                <div data-animal={card.name} className={"memory-card" + (!card.close ? ' is-flipped' : '') + (card.complete ? ' matched' : '')}>
                  <div className="memory-card__face memory-card__face--front">
                    <p>
                      <span>o'children</span>
                    </p>
                  </div>
                  <div className="memory-card__face memory-card__face--back">
                    <div className="memory-category memory-category--link">
                      <img className={`memory-category-img-${dataMemory.world.id}`} src={`/src/assets/img/${card.image}`} alt="card.name" />
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

CardFlip.propTypes = {
  dataMemory: PropTypes.object.isRequired,
  updatedData: PropTypes.func.isRequired,
  resetCountClick: PropTypes.func.isRequired,
  tentative: PropTypes.func.isRequired,
  countPairs: PropTypes.func.isRequired,
  updatedOpenedCard: PropTypes.func.isRequired,
  getCountPaire: PropTypes.number.isRequired,
  getTentative: PropTypes.number.isRequired,
  finished: PropTypes.bool.isRequired,
  openedCard: PropTypes.array.isRequired,
  incrementeCountClick: PropTypes.func.isRequired,
  memoryFinished: PropTypes.func.isRequired,
}

export default CardFlip;
