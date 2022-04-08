import React from 'react';
import { Student } from '../context/Students';

const Body = () => {
  // const [students, setStudents] = useState();
  const [students, setStudent] = Student();

  const onDelete = (id) => {
    let res = students.filter((st) => {
      return st.id !== id;
    });
    setStudent(res);
  };

  return (
    <div style={{ background: 'coral' }}>
      <h1>Students List {students.length}</h1>
      {students.map((student) => {
        return (
          <h1 key={student.id}>
            Name: {student.name}{' '}
            <button onClick={() => onDelete(student.id)}>delete</button>{' '}
          </h1>
        );
      })}
    </div>
  );
};

export default Body;
