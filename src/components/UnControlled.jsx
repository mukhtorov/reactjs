import React, { useRef } from 'react';

export const UnControlled = () => {
  const title = useRef('');

  return (
    <div>
      <h1>UnControlled </h1>
      <input ref={title} type='text' />
      <button
        onClick={() => {
          alert(title.current.value);
        }}
      >
        click
      </button>
    </div>
  );
};

export default UnControlled;
