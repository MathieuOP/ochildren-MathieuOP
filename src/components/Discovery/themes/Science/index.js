import React, { lazy, Suspense } from 'react';

import PropTypes from 'prop-types';

import { data } from 'src/datas/discovery';

import './index.scss';

const Science = ({ cardId }) => {
  const Card = lazy(() =>
    import(`./Card${cardId}`).catch(() => ({
      default: () => <h1>Not found</h1>
    }))
  );
  return (
    <Suspense fallback={<div style={{ height: '100vh', width: '100vw', backgroundColor: '#fff', textAlign: 'center' }}>Loading...</div>}>
      <section className="discovery">
        <Card {...data} />
      </section>
    </Suspense>
  );
};
Science.propTypes = {
  cardId: PropTypes.number.isRequired
};

export default Science;
