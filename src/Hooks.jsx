import React, { useState, useEffect } from 'react';

const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  const [name, setName] = useState('webbrain');

  // case 1
  useEffect(() => {
    console.log('case 1');
  });

  // case 2
  useEffect(() => {
    console.log('case 2');
  }, []);

  // case 3
  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  // case 4
  useEffect(() => {
    console.log('case 4');
  }, [name, count]);

  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks Components</h1>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <input
        type='text'
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Hooks;
