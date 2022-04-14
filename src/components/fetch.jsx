import React, { useState, useEffect } from 'react';

export const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});

  const getUsers = (id) => {
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses?page=1`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setStudents(res?.dataList[0]);
      });
  };

  const getData = () => {
    getUsers();
  };

  const getInfo = (id) => {
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
      method: 'Delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          getUsers();
        }
      });
  };
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <button onClick={getData}>get data</button>
      <div style={{ flex: 1 }}>
        {students.map((value) => (
          <h1 key={value.id}>
            {value.id} {value.address}{' '}
            <button onClick={() => getInfo(value.id)}>delete</button>
            <button onClick={() => localStorage.setItem('id', value.id)}>
              select
            </button>
            <hr />
          </h1>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {/* <div key={selected?.id}>
          <h1>Name: {selected?.name} </h1>
          <h2>Username: {selected?.username} </h2>
          <h3>Email: {selected?.email} </h3>
        </div> */}
      </div>
    </div>
  );
};

export default Fetch;
