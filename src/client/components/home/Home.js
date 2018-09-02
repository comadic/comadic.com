// @flow

import React from 'react';
import classnames from 'classnames/bind';

import HomeImage from './HomeImage';
import styles from './Home.scss';

const cx = classnames.bind(styles);

export const Home = () => (
  <HomeImage>
    <div className={cx('container')}>
      <div className={cx('contentBox')}>
        <h1>
          Web & Mobile
          <br />
          App Development
        </h1>
        <h2 className={cx('subheadline')}>Need help with your next project?</h2>
      </div>
    </div>
  </HomeImage>
);

Home.displayName = 'Home';

export default Home;
