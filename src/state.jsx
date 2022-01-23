import React from 'react';
import { Box, Container, Desc, Title } from './stateStyle';

class Student extends React.Component {
  render() {
    return (
      <Container>
        <Box bg='black' type='large'>
          Large
        </Box>
        <Box bg='yellow' type='medium'>
          Medium
        </Box>
        <Box bg='red' type='small'>
          Small
        </Box>
        <Title>Hey Title</Title>
        <Desc left>Description 1</Desc>
        <Desc>Description 2</Desc>
      </Container>
    );
  }
}

export default Student;

// class Student extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <h1>Styled Components</h1>
//       </div>
//     );
//   }
// }

// export default Student;
