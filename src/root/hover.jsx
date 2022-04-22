import UpdatedWith from './withCounter';
export const Hover = ({ count, setCount }) => {
  return (
    <div>
      <h1>Hover </h1>
      <button onMouseOver={setCount}> Hover {count} times</button>
    </div>
  );
};

export default UpdatedWith(Hover);
