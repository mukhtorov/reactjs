import Updated from './withCounter';

export const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h1>Counter </h1>
      <button onClick={setCount}>clicked {count} times</button>
    </div>
  );
};

export default Updated(Counter);
