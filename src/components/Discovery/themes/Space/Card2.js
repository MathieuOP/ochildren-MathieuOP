import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Popup, Button } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import './index.scss';

const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 15 + 420}px,${y / 10 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 + 450}px,${y / 6 - 120}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 - 290}px,${y / 6.5 - 100}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 - 150}px,${y / 3.5 - -200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 6 - 170}px,${y / 4 - -80}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 9 - 610}px,${y / 4 - -200}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 3.5 - -200}px,0)`;

const Card2 = ({ selectId, cardId, themeName }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 500, friction: 180 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data = selectId({ name: 'space', id: cardId });

  return (
    <div
      className="discovery--space"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--space--pic5"
        style={{ transform: p.xy.interpolate(trans1) }}
      />
      <animated.div
        className="discovery--space--pic6"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--space--pic6"
              src={data.pics[1].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic7"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--space--pic7"
              src={data.pics[2].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic8"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--space--pic8"
              src={data.pics[3].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic9"
        style={{ transform: p.xy.interpolate(trans5) }}
      >
        <Popup
          header={data.pics[4].name}
          content={data.pics[4].desc}
          trigger={
            <Image
              className="discovery--space--pic9"
              src={data.pics[4].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic10"
        style={{ transform: p.xy.interpolate(trans6) }}
      >
        <Popup
          header={data.pics[5].name}
          content={data.pics[5].desc}
          trigger={
            <Image
              className="discovery--space--pic10"
              src={data.pics[5].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic11"
        style={{ transform: p.xy.interpolate(trans7) }}
      >
        <Popup
          header={data.pics[6].name}
          content={data.pics[6].desc}
          trigger={
            <Image
              className="discovery--space--pic11"
              src={data.pics[6].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic12"
        style={{ transform: p.xy.interpolate(trans8) }}
      />
      <Link to={`/discovery/${themeName}&card=${cardId - 1}`}>
        <Button
          className="back-button"
          icon="left chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Retour
        </Button>
      </Link>
      <Link to={`/discovery/${themeName}&card=${cardId + 1}`}>
        <Button
          className="forward-button"
          icon="right chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Continer
        </Button>
      </Link>
    </div>
  );
};

Card2.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};

export default Card2;
