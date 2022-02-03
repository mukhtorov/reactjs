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
    const onFilter = (e) => {
      console.log(e.target.value);
      let res = data.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(res);
      this.setState({ data: res });
    };
    const onDelete = (id) => {
      let res = data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={logo} alt='Logo Img' />
          </Category>
          <Category>
            <Input placeholder='search' onChange={onFilter} />
            <Icons.Search />
          </Category>
          <Category end='true'>
            <Icons.Video />
            <Icons.Menu />
            <Icons.Bell />
            <User src={user} alt='user' />
          </Category>
        </Wrapper>

        <Container flex>
          <Sidebar />
          <Body onDelete={onDelete} data={this.state.data} />
        </Container>
      </Container>
    );
  }
}
