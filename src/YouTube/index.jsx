import React, { Component } from 'react';
import { Category, Container, Wrapper, Icons, Input, User } from './style';
import Sidebar from './Sidebar';
import Body from './Body';
import logo from '../assets/imgs/logo.png';
import user from '../assets/imgs/user.jpg';
import { data } from '../mock';

export default class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={logo} alt='Logo Img' />
          </Category>
          <Category>
            <Input placeholder='search' />
            <Icons.Search />
          </Category>
          <Category end>
            <Icons.Video />
            <Icons.Menu />
            <Icons.Bell />
            <User src={user} alt='user' />
          </Category>
        </Wrapper>

        <Container flex>
          <Sidebar />
          <Body data={this.state.data} />
        </Container>
      </Container>
    );
  }
}
