import React, { useState, useReducer } from 'react';

const Hooks = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('webbrain');

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        return state - 1;
      case 'byamout':
        return state + action.payload;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ flex: 1 }}>
      <h1>Hooks Components</h1>
      <h1>Count: {count}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'plus' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
      <select name='' id=''>
        <option value=''>1</option>
        <option value=''>2</option>
        <option value=''>3</option>
        <option value=''>4</option>
        <option value=''>5</option>
      </select>
      <button onClick={() => dispatch({ type: 'byamout', payload: 5 })}>
        1
      </button>

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
