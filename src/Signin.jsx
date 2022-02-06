import React, { Component } from 'react';

export default class Signin extends Component {
  render() {
    return (
      <div className='form'>
        <h1>SignIn</h1>
        <button onClick={() => this.props.getRes(false)}>SignUp</button>
      </div>
    );
  }
}
