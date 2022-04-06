import React, { useState } from 'react';

// const Hooks = (props) => {
//   const [count, setCount] = useState(10);
//   const [name, setName] = useState('webbrain');

//   const [data, setData] = useState({
//     count: 0,
//     name: 'webbrain',
//   });

//   const [product, setProduct] = useState(0);
//   console.log(data);
//   return (
//     <div style={{ flex: 1 }}>
//       <h1>Hooks Components</h1>
//       <h1>Count: {data.count}</h1>
//       <h1>Name: {data.name}</h1>
//       <input
//         type='text'
//         value={data.name}
//         onChange={({ target }) => setData({ ...data, name: target.value })}
//       />
//       <button onClick={() => setData({ ...data, count: data.count - 1 })}>
//         -
//       </button>
//       <button onClick={() => setData({ ...data, count: data.count + 1 })}>
//         +
//       </button>
//     </div>
//   );
// };

// export default Hooks;

// import React, { useState, useEffect } from 'react';

// const Hooks = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [name, setName] = useState('webbrain');

//   // case 1
//   useEffect(() => {
//     console.log('case 1');
//   });

//   // case 2
//   useEffect(() => {
//     console.log('case 2');
//   }, []);

//   // case 3
//   useEffect(() => {
//     setCount(props.count);
//   }, [props.count]);

//   // case 4
//   useEffect(() => {
//     console.log('case 4');
//   }, [name, count]);

//   return (
//     <div style={{ flex: 1 }}>
//       <h1>Hooks Components</h1>
//       <h1>Count: {count}</h1>
//       <h1>Name: {name}</h1>
//       <input
//         type='text'
//         value={name}
//         onChange={({ target }) => setName(target.value)}
//       />
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };

// export default Hooks;
