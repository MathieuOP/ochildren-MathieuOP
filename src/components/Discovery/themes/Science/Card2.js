import React from 'react';
import PropTypes from 'prop-types';
import { Image, Popup, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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


const Card2 = ({selectId, cardId, themeName}) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data = selectId({ name: 'science', id: cardId});

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
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--science--pic6"
              src={data.pics[1].image_url}
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
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--science--pic7"
              src={data.pics[2].image_url}
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
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--science--pic8"
              src={data.pics[3].image_url}
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
          header={data.pics[4].name}
          content={data.pics[4].desc}
          trigger={
            <Image
              className="discovery--science--pic9"
              src={data.pics[4].image_url}
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      <Link to="/discovery">
        <Button
          className="back-button"
          icon="left chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Retour
        </Button>
      </Link>
      <Link to={`/discovery/${themeName}&card=${cardId + 1}`}>
        <Button
          className="forward-button"
          icon="right chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Continer
        </Button>
      </Link>

    </div>
    
    
  );
};


Card2.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};


export default Card2;
