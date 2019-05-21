import React from 'react';

import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 4,
  (y - window.innerHeight) / 4
];
const trans1 = (x, y) => `translate3d(${x / 7 + 460}px,${y / 7 - 300}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 - 350}px,${y / 7 - -140}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 4 + -140}px,${y / 4 - -380}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 + -180}px,${y / 7 - 20}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 7 + -40}px,${y / 7 - -380}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 7 + 390}px,${y / 7 - 160}px,0)`;



const Card1 = ({ selectId, cardId }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 4, tension: 65, friction: 340 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data = selectId({ name: 'nature', id: cardId});

  console.log(data.pics[0].image_url)

  return (
    <div
      className="discovery--nature"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--nature--pic1"
      />
      <animated.div
        className="discovery--nature--pic2"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header="Le soleil"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic2"
              src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
              // exemple
              // src={data.pics[0].image_url}
            />
          }
          style={pStyle}
        />
      </animated.div>

      <animated.div
        className="discovery--nature--pic3"
        style={{ transform: p.xy.interpolate(trans2) }}
      >
        <Popup
          header="Le colibri"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic3"
              src="https://image.flaticon.com/icons/svg/789/789392.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic4"
        style={{ transform: p.xy.interpolate(trans3) }}
      >
        <Popup
          header="La Tortue"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic4"
              src="https://image.flaticon.com/icons/svg/852/852075.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic5"
        style={{ transform: p.xy.interpolate(trans4) }}
      >
        <Popup
          header="Le Dauphin"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic5"
              src="https://image.flaticon.com/icons/svg/427/427544.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic6"
        style={{ transform: p.xy.interpolate(trans5) }}
      >
        <Popup
          header="Le singe"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic6"
              src="https://image.flaticon.com/icons/svg/852/852071.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      <animated.div
        className="discovery--nature--pic7"
        style={{ transform: p.xy.interpolate(trans6) }}
      >
        <Popup
          header="Le peroquet"
          content="hello"
          trigger={
            <Image
              className="discovery--nature--pic7"
              src="https://image.flaticon.com/icons/svg/688/688300.svg"
            />
          }
          style={pStyle}
        />
      </animated.div>
      

        
    </div>
    
    
  );
};



export default Card1;
