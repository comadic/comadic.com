// @flow

import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import styles from './Menu.scss';

const cx = classnames.bind(styles);

const Menu = () => (
  <div className={cx('menu')}>
    <div className={cx('menuItem')}>
      <Link to="/">HOME</Link>
    </div>
    <div className={cx('menuItem')}>
      <Link to="/about">ABOUT</Link>
    </div>
    <div className={cx('menuItem')}>
      <Link to="/services">SERVICES</Link>
    </div>
    <div className={cx('menuItem')}>
      <Link to="/jobs">JOBS</Link>
    </div>
    <div className={cx('menuItem', 'highlight')}>
      <Link to="/contact">CONTACT</Link>
    </div>
  </div>
);

export default Menu;
