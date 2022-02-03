import React, { Component } from 'react';
import { Container } from './style';
import Card from './Card';
import { data } from '../../mock';

export default class YouTube extends Component {
  render() {
    console.log(this.props.data, 'data');
    return (
      <Container>
        {data.map((value) => (
          <Card
            view='1M'
            time='10 minuts before'
            name={'Webbrain Academy'}
            user={
              'https://yt3.ggpht.com/ytc/AKedOLRMsjJQ7wRCoQqylzci_XTzHNuorRV7M3cMOW9RQA=s900-c-k-c0x00ffffff-no-rj'
            }
            video={
              'https://gemm.site/wp-content/uploads/2022/01/best-movies-netflix-jan-2022.jpg'
            }
          />
        ))}
      </Container>
    );
  }
}
