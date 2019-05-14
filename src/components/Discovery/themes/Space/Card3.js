import React from 'react';
import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import './index.scss';

const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10 + 190}px,${y / 10 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 + 40}px,${y / 8 - 160}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 - 250}px,${y / 7 - 200}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5 - -200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 3 + 530}px,${y / 3 - -20}px,0)`;


const Card3 = () => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 500, friction: 180 }
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
        className="discovery--space--pic5"
        style={{ transform: p.xy.interpolate(trans1) }}
      />

      <animated.div
        className="discovery--space--pic13"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Saturne"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic13"
              src="https://image.flaticon.com/icons/svg/1751/1751904.svg"
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic14"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="Jupiter"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic14"
              src="https://image.flaticon.com/icons/svg/124/124558.svg"
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic15"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header="Mars"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic15"
              src="https://image.flaticon.com/icons/svg/124/124582.svg"
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--space--pic16"
        style={{ transform: p.xy.interpolate(trans5) }}
      />
      <animated.div
        className="discovery--space--pic17"
        style={{ transform: p.xy.interpolate(trans6) }}
      >
        <Popup
          header="Les Asteroide"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic17"
              src="https://image.flaticon.com/icons/svg/433/433924.svg"
            />
          }
          // position='top left'
          style={pStyle}
        />
      </animated.div>
     
    </div>
  );
};

export default Card3;
