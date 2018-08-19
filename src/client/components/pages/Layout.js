// @flow

import React from 'react';
import type { Node } from 'react';

import { Header } from '../shared/header';
import { Footer } from '../shared/footer';
import './Layout.scss';

type Props = {
  children: Node[],
};

export default (props: Props) => (
  <div className="app-container">
    <Header />
    <div className="app-content">{props.children}</div>
    <Footer />
  </div>
);
