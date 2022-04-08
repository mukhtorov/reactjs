import React from 'react';
// import Navbar from '../components/Class';
import Controlled from '../components/Controlled';
import UnControlled from '../components/UnControlled';
class Root extends React.Component {
  render() {
    return (
      <div>
        <Controlled />
        <UnControlled />
      </div>
    );
  }
}

export default Root;
