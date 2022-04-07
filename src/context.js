import React, { createContext, useState } from 'react';

import Body from './Hooks';

export const StudentContext = createContext();

const StudentsList = ({ children }) => {
  const [students, setStudent] = useState([
    { id: 1, name: 'Eshmat', surname: 'Eshmatov' },
    { id: 2, name: 'Toshmat', surname: 'Eshmatov' },
    { id: 3, name: 'Gulmat', surname: 'Eshmatov' },
    { id: 4, name: 'Holmat', surname: 'Eshmatov' },
    { id: 5, name: 'Bekmat', surname: 'Eshmatov' },
    { id: 6, name: 'Oshmat', surname: 'Eshmatov' },
    { id: 7, name: 'Toshmat', surname: 'Eshmatov' },
  ]);
  return (
    <StudentContext.Provider value={[students, setStudent]}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentsList;
