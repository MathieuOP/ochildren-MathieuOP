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
const trans1 = (x, y) => `translate3d(${x / 7 - 100}px,${y / 7 - 330}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 + 80}px,${y / 7 - 240}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 + -580}px,${y / 6 + 110}px,0)`;




const Card3 = ({selectId, cardId, themeName}) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };

  const data= selectId({ name: 'science', id: cardId })

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
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--science--pic11"
              src={data.pics[1].image_url}
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
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--science--pic12"
              src={data.pics[2].image_url}
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
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--science--pic13"
              src={data.pics[3].image_url}
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
          header={data.pics[4].name}
          content={data.pics[4].desc}
          trigger={
            <Image
              className="discovery--science--pic14"
              src={data.pics[4].image_url}
            />
          }
          style={pStyle}
        />
        
      </animated.div>
      
      <Link to={`/discovery/${themeName}&card=${cardId - 1}`}>
        <Button
          className="back-button"
          icon="left chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Retour
        </Button>
      </Link>
      <Link to="/discovery">
        <Button
          className="forward-button"
          icon="right chevron"
          style={{ color: '#0b0900', backgroundColor: '#ffdd57' }}
        >
          Fini
        </Button>
      </Link>
        
    </div>
    
    
  );
};

Card3.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};

export default Card3;
