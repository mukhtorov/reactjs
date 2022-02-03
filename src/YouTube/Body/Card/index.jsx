import React, { Component } from 'react';
import { Container, Title, User, Video, Wrapper } from './style';

export default class YouTube extends Component {
  render() {
    const { user, video, name, view, time, title, id } = this.props.value;
    const { onDelete } = this.props;
    return (
      <Container>
        <Video src={video} alt='video content' />
        <Wrapper>
          <User src={user.img} />
          <div>
            <Title>{title}</Title>
            <Title desc>
              {id} | {name}
            </Title>
            <div style={{ display: 'flex' }}>
              <Title desc>
                {view} {time}{' '}
                <button onClick={() => onDelete(id)}>delete</button>
              </Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
