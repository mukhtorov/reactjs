import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  background: black;
  justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
  color: ${({ active }) => (active ? 'red' : 'white')};
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
`;
