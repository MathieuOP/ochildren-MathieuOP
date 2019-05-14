import React from 'react';
import { Image, Popup } from 'semantic-ui-react';
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


const Card2 = () => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 500, friction: 180 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };
  return(
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
          header="Le Soleil"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic6"
              src="https://www.flaticon.com/premium-icon/icons/svg/1146/1146310.svg"
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
          header="Mercure"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic7"
              src="https://image.flaticon.com/icons/svg/1086/1086084.svg"
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
          header="Venus"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic8"
              src="https://image.flaticon.com/icons/svg/1266/1266586.svg"
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
          header="La Terre"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic9"
              src="https://image.flaticon.com/icons/svg/616/616450.svg"
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
          header="La Lune"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic10"
              src="https://image.flaticon.com/icons/svg/1197/1197992.svg"
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
          header="Le Satellite"
          content="hello"
          trigger={
            <Image
              className="discovery--space--pic11"
              src="https://image.flaticon.com/icons/svg/254/254009.svg"
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
    </div>


  );
};

export default Card2;
