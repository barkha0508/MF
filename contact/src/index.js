import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import ContactInfo from './ContactInfo';

window.mountContactMfe = (el) => {
  ReactDOM.render(
    <StylesProvider>
      <ContactInfo />
    </StylesProvider>,
    el
  )
}