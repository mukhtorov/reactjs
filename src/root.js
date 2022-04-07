import React from 'react';
import Class from './Class';
import Hooks from './Hooks';

class Root extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {/* <Class /> */}
        <Hooks />
      </div>
    );
  }
}

export default Root;
