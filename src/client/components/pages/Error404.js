// @flow

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <h1>404</h1>
    <h2>Page not found!</h2>
    <p>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <Link to="/">Go back to the main page</Link>
    </p>
  </div>
);
