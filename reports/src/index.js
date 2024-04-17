import React from 'react';
import ReactDOM from 'react-dom';
import ReportsList from './ReportsList';

window.mountreportsMfe = (el) => {
  ReactDOM.render(
    <ReportsList />,
    el
  )
}