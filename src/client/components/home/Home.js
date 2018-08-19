// @flow

import React from 'react';

import HomeImage from './HomeImage';
import styles from './Home.scss';

export const Homes = () => [
  <HomeImage>
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>
          Web & Mobile
          <br />
          App Development
        </h1>
        <h2 className={styles.subheadline}>Onsite expertise for your next project</h2>
      </div>
    </div>
  </HomeImage>,
];

export default Homes;
