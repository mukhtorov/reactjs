import React, { useState, useMemo, useCallback } from 'react';
import Navbar from './Class';

const Body = () => {
  const [counter, setCounter] = useState(0);
  console.log('Parent render');

  const data = useMemo(() => {
    return { title: 'Webbrain' };
  }, []);
  const dataCall = useCallback((param) => {
    return { title: param };
  }, []);

  return (
    <div>
      <Navbar dataCall={dataCall} data={data} />
      <h1>Counter {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Body;
