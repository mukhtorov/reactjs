import React, { useState, useEffect } from 'react';

export const Fetch = () => {
  const [uy, setUser] = useState({
    address: 'New Webbrain Academy',
  });

  const addUser = (id) => {
    return fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/${localStorage.getItem(
        'id'
      )}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(uy),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <hr />
      <h1>Update FORM</h1>
      <span>
        address <input type='text' />
      </span>
      <span>
        name <input type='text' />
      </span>
      <button onClick={addUser}>update</button>
    </div>
  );
};

export default Fetch;
