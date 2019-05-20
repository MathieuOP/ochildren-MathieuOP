import React from 'react';

import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 4,
  (y - window.innerHeight) / 4
];
const trans1 = (x, y) => `translate3d(${x / 3 + 850}px,${y / 3 - -285}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 - 350}px,${y / 7 - -140}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 4 + -140}px,${y / 4 - -380}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 + 780}px,${y / 7 - 100}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 7 + 150}px,${y / 7 - -380}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 8 - 920}px,${y / 8 - 260}px,0)`;



const Card1 = () => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 2, tension: 40, friction: 940 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };


  return (
    <div
      className="discovery--nature"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--nature--pic8"
      />
      <animated.div
        className="discovery--nature--pic9"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header="Le Tigre"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic9"
              src="https://image.flaticon.com/icons/svg/616/616523.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--nature--pic10"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Le Toucan"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic10"
              src="https://image.flaticon.com/icons/svg/375/375082.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic11"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="La Panthère Noire"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic11"
              src="https://image.flaticon.com/icons/svg/371/371654.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic12"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header="La Libellule"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic12"
              src="https://image.flaticon.com/icons/svg/184/184979.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic13"
        style={{ transform: p.xy.interpolate(trans5) }}
      >
        <Popup
          header="Le singe"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic13"
              src="https://image.flaticon.com/icons/svg/852/852071.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic14"
        style={{ transform: p.xy.interpolate(trans6) }}
      >
        <Popup
          header="Le Papillon"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic14"
              src="https://image.flaticon.com/icons/svg/235/235423.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      

        
    </div>
    
    
  );
};



export default Card1;
