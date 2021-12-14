import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      title: 'WebBrian Academy',
    };
  }
  render() {
    console.log('render');
    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };

    const onChange = (event) => {
      console.log(event.target.value);
      this.setState({ title: event.target.value });
    };

    const onSelect = (e) => {
      console.log(e.target.value);
    };
    const onCheck = (e) => {
      console.log(e.target.checked);
    };
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>State {this.state.count}</h1>
        <input onChange={onChange} type='text' placeholder='name' />
        <select onChange={onSelect} name='' id=''>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>
        <input onChange={onCheck} type='checkbox' />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default Student;
