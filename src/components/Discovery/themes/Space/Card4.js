import React from 'react';
import PropTypes from 'prop-types';
import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import './index.scss';

const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10 + 190}px,${y / 10 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 + 540}px,${y / 8 - 160}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 4 + 650}px,${y / 4 - 230}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5 - -200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 8 - 430}px,${y / 8 - -220}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 9 - 750}px,${y / 9 - 320}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 3 + 30}px,${y / 3 - -220}px,0)`;


const Card4 = ({ selectId, cardId }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 500, friction: 180 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data = selectId({ name: 'space', id: cardId});

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
        className="discovery--space--pic18"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--space--pic18"
              src={data.pics[1].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic19"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--space--pic19"
              src={data.pics[2].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic20"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--space--pic20"
              src={data.pics[3].image_url}
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic21"
        style={{ transform: p.xy.interpolate(trans5) }}
      />
      <animated.div
        className="discovery--space--pic22"
        style={{ transform: p.xy.interpolate(trans6) }}
      />
      <animated.div
        className="discovery--space--pic23"
        style={{ transform: p.xy.interpolate(trans7) }}
      />
      <animated.div
        className="discovery--space--pic24"
        style={{ transform: p.xy.interpolate(trans8) }}
      />
     
    </div>
  );
};


Card4.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};

export default Card4;
