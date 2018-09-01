// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import classnames from 'classnames/bind';

import styles from './HomeImage.scss';

const cx = classnames.bind(styles);

const image = require('../../assets/images/remote-work.jpg');

type Props = {|
  children: Node,
|};

type State = {|
  loaded: boolean,
|};

class HomeImage extends Component<Props, State> {
  state = {
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 1500);
  }

  render() {
    const { children } = this.props;
    const { loaded } = this.state;

    return (
      <div>
        <img src={image} className={cx('hero', { scaleIn: loaded })} alt="hero" />
        {children}
      </div>
    );
  }
}

export default HomeImage;
