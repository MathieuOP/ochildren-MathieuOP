import React from 'react';
import PropTypes from 'prop-types';
import { Image, Popup } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';



const calc = (x, y) => [
  (x - window.innerWidth) / 4,
  (y - window.innerHeight) / 4
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 7 + 460}px,${y / 7 - 300}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 - 350}px,${y / 7 - -140}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 4 + -140}px,${y / 4 - -380}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 + -180}px,${y / 7 - 20}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 7 - -50}px,${y / 7 - -380}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 7 + 280}px,${y / 7 - 160}px,0)`;



const Card1 = ({ selectId, cardId }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 400, friction: 140 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data = selectId({ name: 'nature', id: cardId});

  // console.log(data.pics[0].image_url)

  return (
    <div
      className="discovery--nature"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--nature--pic1"
        style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--nature--pic2"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--nature--pic2"
              src={data.pics[1].image_url}
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
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--nature--pic3"
              src={data.pics[2].image_url}
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
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--nature--pic4"
              src={data.pics[3].image_url}
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
          header={data.pics[4].name}
          content={data.pics[4].desc}
          trigger={
            <Image
              className="discovery--nature--pic5"
              src={data.pics[4].image_url}
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
          header={data.pics[5].name}
          content={data.pics[5].desc}
          trigger={
            <Image
              className="discovery--nature--pic6"
              src={data.pics[5].image_url}
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
          header={data.pics[6].name}
          content={data.pics[6].desc}
          trigger={
            <Image
              className="discovery--nature--pic7"
              src={data.pics[6].image_url}
            />
          }
          style={pStyle}
        />
      </animated.div>
      

        
    </div>
    
    
  );
};

Card1.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};

export default Card1;
