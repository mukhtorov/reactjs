import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className='form'>
        <h1>Signup</h1>
        <button onClick={() => this.props.getRes(true)}>SignIn</button>
      </div>
    );
  }
}
