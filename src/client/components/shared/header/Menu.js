// @flow

import React from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';

import { ContactLink } from '../links';
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
      <ContactLink label="CONTACT" />
    </div>
  </div>
);

Menu.displayName = 'Menu';

export default Menu;
