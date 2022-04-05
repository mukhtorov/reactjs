import React, { Component } from 'react';

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      count: 1,
    };
    this.plus = this.plus.bind(this);
  }
  plus() {
    this.setState({ count: this.state.count + 1 });
    console.log(this);
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <h1>ReactJS LifeCycle</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.plus()}>click me</button>
        <button onClick={this.plus.bind(this)}>click me</button>
        <button onClick={plus}>click me</button>
      </div>
    );
  }
}
