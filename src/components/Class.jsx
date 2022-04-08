import React, { useContext } from 'react';
import { StudentContext } from '../context/Students';

const Navbar = () => {
  const [data] = useContext(StudentContext);
  return (
    <div
      style={{
        background: 'blue',
        color: 'white',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <h1>Students {data.length}</h1>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Classes</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Navbar;
