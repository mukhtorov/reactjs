import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './Signin';

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    const getRes = (value) => {
      console.log(value);
      this.setState({ active: value });
    };
    return (
      <div className='container'>
        {this.state.active ? (
          <Signin getRes={getRes} />
        ) : (
          <Signup getRes={getRes} />
        )}
      </div>
    );
  }
}
