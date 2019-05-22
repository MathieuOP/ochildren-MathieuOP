import React, { lazy, Suspense } from 'react';

import PropTypes from 'prop-types';

import { selectId } from 'src/datas/discovery';

import './index.scss';

const Space = ({ cardId, themeName }) => {
  const Card = lazy(() =>
    import(`./Card${cardId}`).catch(() => ({
      default: () => <h1>Not found</h1>
    }))
  );
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#fff',
            textAlign: 'center'
          }}
        >
          Loading...
        </div>
      }
    >
      <section className="discovery">
        <Card selectId={selectId} themeName={themeName} cardId={cardId} />
      </section>
    </Suspense>
  );
};
Space.propTypes = {
  cardId: PropTypes.number.isRequired
};

export default Space;
