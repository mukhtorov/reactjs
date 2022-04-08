import React, { createContext, useState, useContext } from 'react';

import Body from '../components/Hooks';

export const StudentContext = createContext();
export const Student = () => useContext(StudentContext);

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
