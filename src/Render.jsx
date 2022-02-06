import React, { Component } from 'react';
import img1 from './assets/imgs/logo.png';
import img2 from './assets/imgs/user.jpg';

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['All Plants', 'New Arrivals', 'Sale', 'Contact'],
      active: 'All Plants',
    };
  }
  render() {
    return (
      <div className='container'>
        {this.state.list.map((value) => (
          <h1
            onClick={() => this.setState({ active: value })}
            className={`link ${this.state.active === value && 'active'}`}
          >
            {value}
          </h1>
        ))}
      </div>
    );
  }
}
