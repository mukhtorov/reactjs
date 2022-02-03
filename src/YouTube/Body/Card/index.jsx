import React, { Component } from 'react';
import { Container, Title, User, Video, Wrapper } from './style';

export default class YouTube extends Component {
  render() {
    const { user, video, name, view, time } = this.props;
    return (
      <Container>
        <Video src={video} alt='video content' />
        <Wrapper>
          <User src={user} />
          <div>
            <Title>Lorem Ipsum is simply dummy text of the printing</Title>
            <Title desc>{name}</Title>
            <div style={{ display: 'flex' }}>
              <Title desc>
                {view} {time}
              </Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
