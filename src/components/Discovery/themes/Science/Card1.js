import React from 'react';

import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 7 + -20}px,${y / 7 - -200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 - -195}px,${y / 7 - -140}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 7 + -140}px,${y / 7 - -160}px,0)`;


const Card1 = () => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 30, friction: 500 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };


  return (
    <div
      className="discovery--science"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--science--pic1"
        //style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--science--pic2"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header="Professeur Al"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic2"
              src="https://image.flaticon.com/icons/svg/843/843255.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--science--pic3"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Microscope"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic3"
              src="https://image.flaticon.com/icons/svg/1198/1198650.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--science--pic4"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="Tubes et fioles à essai"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic4"
              src="https://image.flaticon.com/icons/svg/1283/1283419.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      

        
    </div>
    
    
  );
};



export default Card1;
