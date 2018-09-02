// @flow

import React from 'react';

type Props = {
  label: string,
};

const ContactLink = ({ label, ...props }: Props) => (
  <a href="mailto:contact@comadic.com?subject=Contact" {...props}>
    {label}
  </a>
);

ContactLink.displayName = 'ContactLink';

export default ContactLink;
