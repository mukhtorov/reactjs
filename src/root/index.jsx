import React from 'react';
import Navbar from '../components/Class';
import Body from '../components/Hooks';

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
