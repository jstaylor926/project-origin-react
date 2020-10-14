import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import LandingPage from './pages/LandingPage';
import GeoLocator from './components/GeoLocator.js';
ReactDOM.render(
  <Fragment>
    <LandingPage />
    <GeoLocator />
  </Fragment>,
  document.getElementById('root')
);
