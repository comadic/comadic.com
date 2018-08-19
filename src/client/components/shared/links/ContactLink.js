// @flow

import React from 'react';

type Props = {
  label: string,
};

export default ({ label, ...props }: Props) => (
  <a href="mailto:contact@comadic.com?subject=Contact" {...props}>
    {label}
  </a>
);
