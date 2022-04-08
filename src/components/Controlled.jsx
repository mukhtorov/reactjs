import React, { useState } from 'react';

export const Controlled = () => {
  const [title, setTitle] = useState('');
  console.log('Controlled');

  return (
    <div>
      <h1>Controlled: {title}</h1>
      <input onChange={(e) => setTitle(e.target.value)} type='text' />
      <hr />
    </div>
  );
};

export default Controlled;
