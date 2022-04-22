import React from 'react';
import Counter from './counter';
import Hover from './hover';

export const Root = () => {
  return (
    <div>
      <h1>HOC </h1>
      <Counter />
      <Hover />
    </div>
  );
};

export default Root;
