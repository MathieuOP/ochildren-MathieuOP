import React from 'react';
import PropTypes from 'prop-types';
import { Image, Popup, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  (x - window.innerWidth) / 4,
  (y - window.innerHeight) / 4
];
const trans0 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 8 + 850}px,${y / 8 - -315}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 350}px,${y / 6 - -140}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 + -140}px,${y / 6 - -380}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 7 + 780}px,${y / 7 - 100}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 5 + 150}px,${y / 5 - -380}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 5 - 920}px,${y / 5 - 260}px,0)`;

const Card2 = ({ selectId, cardId, themeName }) => {
  const [p, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 400, friction: 140 }
  }));

  const pStyle = {
    fontSize: '1.2em'
  };
  const data = selectId({ name: 'nature', id: cardId });

  return (
    <div
      className="discovery--nature"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="discovery--nature--pic8"
        style={{ transform: p.xy.interpolate(trans0) }}
      />
      <animated.div
        className="discovery--nature--pic9"
        style={{ transform: p.xy.interpolate(trans1) }}
      >
        <Popup
          header={data.pics[1].name}
          content={data.pics[1].desc}
          trigger={
            <Image
              className="discovery--nature--pic9"
              src={data.pics[1].image_url}
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
          header={data.pics[2].name}
          content={data.pics[2].desc}
          trigger={
            <Image
              className="discovery--nature--pic10"
              src={data.pics[2].image_url}
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
          header={data.pics[3].name}
          content={data.pics[3].desc}
          trigger={
            <Image
              className="discovery--nature--pic11"
              src={data.pics[3].image_url}
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
          header={data.pics[4].name}
          content={data.pics[4].desc}
          trigger={
            <Image
              className="discovery--nature--pic12"
              src={data.pics[4].image_url}
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
          header={data.pics[5].name}
          content={data.pics[5].desc}
          trigger={
            <Image
              className="discovery--nature--pic13"
              src={data.pics[5].image_url}
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
          header={data.pics[6].name}
          content={data.pics[6].desc}
          trigger={
            <Image
              className="discovery--nature--pic14"
              src={data.pics[6].image_url}
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

Card2.propTypes = {
  selectId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired
};

export default Card2;
