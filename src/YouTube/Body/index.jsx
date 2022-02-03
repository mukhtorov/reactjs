import React, { Component } from 'react';
import { Container } from './style';
import Card from './Card';

export default class YouTube extends Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <Container>
        {data.length ? (
          data.map((value) => (
            <Card key={value.id} onDelete={onDelete} value={value} />
          ))
        ) : (
          <h1 style={{ textAlign: 'center', width: '100%' }}>Not Found</h1>
        )}
      </Container>
    );
  }
}
