import React, { memo } from 'react';

const Navbar = ({ data, dataCall }) => {
  console.log('child render');
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
      <h1>{data.title}</h1>
      <h1>{dataCall('Home').title}</h1>
      <h1>{dataCall('About').title}</h1>
      <h1>{dataCall('Classes').title}</h1>

      <h1>Contact</h1>
    </div>
  );
};

export default memo(Navbar);
