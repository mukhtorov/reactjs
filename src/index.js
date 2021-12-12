import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student from './Student.jsx';
import Fruits from './fruits';

const students = [
  { id: 1, name: 'Sardor' },
  { id: 2, name: 'Dilshod' },
  { id: 3, name: 'Azizbek' },
  { id: 1, name: 'Sardor' },
  { id: 2, name: 'Dilshod' },
  { id: 3, name: 'Azizbek' },
  { id: 1, name: 'Sardor' },
  { id: 2, name: 'Dilshod' },
  { id: 3, name: 'Azizbek' },
];

ReactDOM.render(
  <React.StrictMode>
    <Fruits />
    {/* {students.map((value) => {
      return <Student data={value} />;
    })} */}
  </React.StrictMode>,
  document.getElementById('root')
);
