// @flow

import React from 'react';
import { Link } from 'react-router';

import styles from './Links.scss';

export type LinkMeta = {
  path: string,
  label: string,
};

type Props = {
  data: LinkMeta[],
};

export default (props: Props) => [
  props.data &&
    props.data.map((link: LinkMeta) => {
      // console.log(link.label);
      return (
        <div key={link.label}>
          <Link to={link.path} className={styles.Link}>
            {link.label}
          </Link>
        </div>
      );
    }),
];
