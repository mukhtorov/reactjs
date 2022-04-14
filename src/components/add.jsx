import React, { useState, useEffect } from 'react';

export const Fetch = () => {
  const [uy, setUser] = useState({
    address: 'Webbrain Academy',
    attachments: [
      {
        imgPath: 'string',
      },
    ],
    categoryId: 2,
    city: 'Toshkent',
    country: 'Uzbekistan',
    description: 'zor uy villa',
    favorite: true,
    houseDetails: {
      area: 1000,
      bath: 20,
      beds: 20,
      garage: 20,
      room: 20,
      yearBuilt: 1190,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: 'string',
    price: 0,
    region: 'string',
    salePrice: 0,
    status: true,
    zipCode: '160900',
  });

  const addUser = (id) => {
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(uy),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <hr />
      <h1>ADD FORM</h1>
      <span>
        address <input type='text' />
      </span>
      <span>
        name <input type='text' />
      </span>
      <button onClick={addUser}>add</button>
    </div>
  );
};

export default Fetch;
