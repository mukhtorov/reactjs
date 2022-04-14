import React from 'react';
import Fetch from '../components/fetch.jsx';
import Login from '../components/login';
import Add from '../components/add';
import Update from '../components/update';
// import Navbar from '../components/Class';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Fetch />
        <Add />
        <Update />
      </div>
    );
  }
}

export default Root;
