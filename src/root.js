import React from 'react';
import Navbar from './Class';
import Body from './Hooks';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default Root;
