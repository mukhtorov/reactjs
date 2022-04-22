import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [students] = useState([
    { id: 1, Name: 'Eshmat', description: 'EShmat IT guy' },
    { id: 2, Name: 'Toshmat', description: 'EShmat IT guy' },
    { id: 3, Name: 'Gulmat', description: 'EShmat IT guy' },
    { id: 4, Name: 'Holmat', description: 'EShmat IT guy' },
    { id: 5, Name: 'Oshmat', description: 'EShmat IT guy' },
    { id: 6, Name: 'Nemat', description: 'EShmat IT guy' },
  ]);
  const [selected, setSelected] = useState({});

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>React Router dom Home</h1>
        {students.map((value) => {
          return (
            <h1>
              {value.id} {value.Name}{' '}
              <button
                onClick={() => {
                  navigate(`/home/:${value.id}`);
                  setSelected(value);
                }}
              >
                select
              </button>
            </h1>
          );
        })}
      </div>
      <div style={{ flex: 1 }}>
        <h1>Selected</h1>
        <h1>
          {selected?.id} {selected?.Name}
        </h1>
      </div>
    </div>
  );
};

export default Home;
