import React from 'react';
import Hooks from './Hooks';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Class Components</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <Hooks />
      </div>
    );
  }
}

export default Class;
