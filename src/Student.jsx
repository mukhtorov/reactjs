import React from 'react';

class Student extends React.Component {
  render() {
    // console.log(this.props);
    const { data } = this.props;
    return (
      <div>
        <h1>
          {data.id} {data.name}
        </h1>
      </div>
    );
  }
}

export default Student;
