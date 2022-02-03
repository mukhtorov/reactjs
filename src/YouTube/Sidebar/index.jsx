import React, { Component } from 'react';
import { sidebar } from '../../utils/sidebar';
import { Container, ItemWrapper, Title, Wrapper } from './style';

export default class YouTube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ icon, id, title, data }, index) => (
          <Wrapper key={index}>
            {title && <Title title='true'>{title}</Title>}
            {data.map(({ icon: Icon, title: subTitle }, index) => (
              <ItemWrapper key={index}>
                <Icon />
                <Title>{subTitle}</Title>
              </ItemWrapper>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
