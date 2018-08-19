// @flow

import React, { Component } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router';
import { FaBars } from 'react-icons/fa';

import styles from './MobileMenuDropdown.scss';

const cx = classnames.bind(styles);

type Props = {||};

type State = {|
  open: boolean,
|};

class MobileMenuDropdown extends Component<Props, State> {
  state = {
    open: false,
  };

  toggleOpen = () => {
    console.log(this.state.open);
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    return (
      <div className={cx('mobile')}>
        <div className={cx('mobileMenu')} onClick={this.toggleOpen}>
          <FaBars />
        </div>
        <div className={cx('mobileMenuDropdown', { mobileMenuOpen: open })}>
          <Link to="/" onClick={this.toggleOpen}>
            HOME
          </Link>
          <Link to="/about" onClick={this.toggleOpen}>
            ABOUT
          </Link>
          <Link to="/services" onClick={this.toggleOpen}>
            SERVICES
          </Link>
          <Link to="/jobs" onClick={this.toggleOpen}>
            JOBS
          </Link>
          <Link to="/contact" onClick={this.toggleOpen}>
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}

export default MobileMenuDropdown;
