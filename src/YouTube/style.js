import styled from 'styled-components';

import { ReactComponent as burger } from '../assets/icons/burger.svg';
import { ReactComponent as search } from '../assets/icons/search.svg';
import { ReactComponent as bell } from '../assets/icons/bell.svg';
import { ReactComponent as menu } from '../assets/icons/menu.svg';
import { ReactComponent as video } from '../assets/icons/video.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && 'column'};
  background: #212121;
  color: #ffffff;
  padding: ${({ flex }) => !flex && '0 30px'};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #212121;
`;

export const Category = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ end }) => end && 'flex-end'};
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
`;
Icons.Bell = styled(bell)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 20px;
`;
Icons.Video = styled(video)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;
Icons.Menu = styled(menu)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 20px;
`;

Icons.Logo = styled.img``;
Icons.Search = styled(search)`
  width: 65px;
  height: 40px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 40px;
  background: #000000;
  width: 100%;
  max-width: 500px;
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px 0px 0px 2px;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

export const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 20px;
`;
