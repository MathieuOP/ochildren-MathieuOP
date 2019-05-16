import React from 'react';
import PropTypes from 'prop-types';
import { Image, Popup, Link, Button } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

import { data } from 'src/datas/discovery';

const calc = (x, y) => [
  (x - window.innerWidth) / 5,
  (y - window.innerHeight) / 5
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 7 + -200}px,${y / 7 - -200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 95}px,${y / 6 - 340}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 + 40}px,${y / 9 - 160}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8 + -150}px,${y / 8 - -100}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 8 + -170}px,${y / 8 - -90}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 8 + -190}px,${y / 8 - -110}px,0)`;

const Card1 = ({ title, description }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 100, friction: 200 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  

  return (
    <div
      className="discovery--space"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--space--pic1"
        style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--space--pic2"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header={title}
          content="rr"
          trigger={
            <Image
              className="discovery--space--pic2"
              src="https://image.flaticon.com/icons/svg/231/231142.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic3"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header={title}
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic3"
              src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic4"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="Fusée"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic4"
              src="https://image.flaticon.com/icons/svg/639/639373.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>

      <animated.div
        className="discovery--space--pic4-1"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header={title}
          content="rr"
          trigger={
            <Image
              className="discovery--space--pic4-1"
              src="https://image.flaticon.com/icons/svg/1137/1137463.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic4-2"
        style={{ transform: p.xy.interpolate(trans5) }}
      >
        <Popup
          header={title}
          content="rr"
          trigger={
            <Image
              className="discovery--space--pic4-2"
              src="https://image.flaticon.com/icons/svg/1137/1137463.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--space--pic4-3"
        style={{ transform: p.xy.interpolate(trans6) }}
      >
        <Popup
          header={title}
          content="rr"
          trigger={
            <Image
              className="discovery--space--pic4-3"
              src="https://image.flaticon.com/icons/svg/1137/1137463.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>    
    </div>
    
    
  );
};

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card1;
