import React, { useState } from 'react';

const Body = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('count')));

  const plus = () => {
    localStorage.setItem('count', JSON.stringify({ data: count + 1 }));
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  console.log(JSON.parse(localStorage.getItem('count')), 'count');
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => localStorage.removeItem('count')}>
        delete count
      </button>
      <button onClick={() => localStorage.clear()}>clear</button>
    </div>
  );
};

export default Body;
