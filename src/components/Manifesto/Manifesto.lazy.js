import React, { lazy, Suspense } from 'react';

const LazyManifesto = lazy(() => import('./Manifesto'));

const Manifesto = props => (
  <Suspense fallback={null}>
    <LazyManifesto {...props} />
  </Suspense>
);

export default Manifesto;
