// @flow

import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

import ContactLink from '../links/ContactLink';
import styles from './Footer.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.company}>Comadic Ltd</div>
    <div className={styles.telephone}>
      <FaPhone />
      (0044) 7516 131766
    </div>
    <div className={styles.email}>
      <FaEnvelope />
      <ContactLink label="contact@comadic.com" />
    </div>
  </div>
);
