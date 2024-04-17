export * from './ContactInfo';

import React from 'react';
import ReactDOM from 'react-dom';

import ContactInfo from './ContactInfo';

ReactDOM.render(
  <ContactInfo />,
  document.querySelector('#contact-dev-root')
);
