import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const data = [
  { id: 1, Name: 'Eshmat', description: 'EShmat IT guy' },
  { id: 2, Name: 'Toshmat', description: 'EShmat IT guy' },
  { id: 3, Name: 'Gulmat', description: 'EShmat IT guy' },
  { id: 4, Name: 'Holmat', description: 'EShmat IT guy' },
  { id: 5, Name: 'Oshmat', description: 'EShmat IT guy' },
  { id: 6, Name: 'Nemat', description: 'EShmat IT guy' },
];

export const Home = () => {
  const [selected, setSelected] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let res = data.filter((value) => value.id == params.id.replace(':', ''));
    setSelected(...res);
  }, [params?.id]);

  console.log(selected);
  return (
    <div style={{ display: 'flex' }}>
      <h1>Name;{selected?.Name}</h1>
    </div>
  );
};

export default Home;
