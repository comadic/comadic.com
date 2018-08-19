// @flow

import React from 'react';
import type { Node } from 'react';

import styles from './HomeImage.scss';

const image = require('../../assets/images/remote-work.jpg');

type Props = {|
  children: Node,
|};

export default ({ children }: Props) => (
  <div>
    <img src={image} className={styles.HomeImage} alt="hero" />
    {children}
  </div>
);
