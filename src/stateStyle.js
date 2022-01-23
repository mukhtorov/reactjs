import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
  margin: 20px;
`;

const common = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 10px;
  width: 200px;
  height: 40px;
  background: coral;
  border-radius: 8px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
export const Button = styled.div`
  ${common}
`;

export const ActiveButton = styled('div')`
  ${common}
  height: 50px;
`;

export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid coral;
  animation: ${rotate} 2s linear infinite;
`;
