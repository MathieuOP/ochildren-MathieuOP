import React from 'react';

import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 3,
  (y - window.innerHeight) / 3
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
// const trans1 = (x, y) => `translate3d(${x / 10 + -380}px,${y / 7 - -330}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 + 920}px,${y / 6 - 240}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 7 - 780}px,${y / 7 + -80}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 - 300}px,${y / 7 + -390}px,0)`;


const Card2 = () => {
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
        className="discovery--science--pic5"
        style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--science--pic6"
       // style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header="Professeur Al"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic6"
              src="https://image.flaticon.com/icons/svg/843/843255.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--science--pic7"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Les Bactéries"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic7"
              src="https://image.flaticon.com/icons/svg/1176/1176353.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--science--pic8"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="Les virus"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic8"
              src="https://image.flaticon.com/icons/svg/1198/1198638.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      <animated.div
        className="discovery--science--pic9"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header="Les Atomes"
          content="hello"
          trigger={
            <Image
              className="discovery--science--pic9"
              src="https://image.flaticon.com/icons/svg/1198/1198627.svg"
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      

        
    </div>
    
    
  );
};



export default Card2;
