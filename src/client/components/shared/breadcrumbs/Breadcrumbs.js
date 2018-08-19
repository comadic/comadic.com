// @flow

import React from 'react';
import { Link } from 'react-router';

import type { LinkMeta } from '../links';

import styles from './Breadcrumbs.scss';

type Props = {
  path: LinkMeta[],
};

export default (props: Props) => {
  return (
    <div className={styles.Breadcrumbs}>
      {props.path &&
        props.path.map((link: LinkMeta, index: number) => {
          const result = [];

          result.push(
            <Link key={`link-${link.label}`} to={link.path} className={styles.Breadcrumb}>
              {link.label}
            </Link>,
          );

          if (index < props.path.length - 1) {
            result.push(
              <span key={`spacer-${link.label}`} className={styles.Breadcrumb}>
                {' > '}
              </span>,
            );
          }

          return result;
        })}
    </div>
  );
};
