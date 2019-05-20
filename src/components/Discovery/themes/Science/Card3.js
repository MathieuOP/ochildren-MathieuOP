import React from 'react';

import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 7 - 100}px,${y / 7 - 330}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 + 80}px,${y / 7 - 240}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 + -580}px,${y / 6 + 110}px,0)`;




const Card3 = () => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 100, friction: 500 }
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
        className="discovery--science--pic10"
        style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--science--pic11"
      >
        <Popup
          header="Professeur Al"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic11"
              src="https://image.flaticon.com/icons/svg/843/843255.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--science--pic12"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header="Les Médicaments"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic12"
              src="https://image.flaticon.com/icons/svg/1546/1546140.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--science--pic13"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Le tableau Périodique"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic13"
              src="https://image.flaticon.com/icons/svg/1592/1592975.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      <animated.div
        className="discovery--science--pic14"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="Les vaccins"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic14"
              src="https://image.flaticon.com/icons/svg/1529/1529532.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      

        
    </div>
    
    
  );
};



export default Card3;
