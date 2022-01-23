import React from 'react';
import {
  ActiveButton,
  Box,
  Button,
  Container,
  Desc,
  Rotate,
  Title,
} from './stateStyle';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
}
`;
class Student extends React.Component {
  state = {
    light: true,
  };
  render() {
    const theme = {
      bg: this.state.light ? 'white' : 'black',
      cl: this.state.light ? 'black' : 'white',
    };
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <h1>Theme Provider</h1>
        <Button>Click me</Button>
        <ActiveButton>Active button</ActiveButton>
        <Rotate>Rotate</Rotate>
        <button onClick={() => this.setState({ light: !this.state.light })}>
          change theme
        </button>
      </ThemeProvider>
    );
  }
}

export default Student;
