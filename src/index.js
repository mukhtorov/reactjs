import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import StudentsList from './context';

ReactDOM.render(
  <React.StrictMode>
    <StudentsList>
      <Root />
    </StudentsList>
  </React.StrictMode>,
  document.getElementById('root')
);
