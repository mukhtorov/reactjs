import React from 'react';
import './fruitsStyle.css';

class Card extends React.Component {
  render() {
    return (
      <div className='container'>
        <img className='img' src={this.props.src} alt='' />
        <h3 className='title'>{this.props?.title}</h3>
      </div>
    );
  }
}

export default Card;
