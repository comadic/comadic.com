// @flow

import React from 'react';
import classnames from 'classnames/bind';

import MobileMenuDropdown from './MobileMenuDropdown';
import Menu from './Menu';

import styles from './Header.scss';

const cx = classnames.bind(styles);

type Props = {||};

const Header = () => (
  <header className={cx('container')}>
    <MobileMenuDropdown />
    <Menu />
  </header>
);

export default Header;