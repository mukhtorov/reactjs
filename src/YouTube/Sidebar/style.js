import styled from 'styled-components';

export const Container = styled.div`
  background: #212121;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 143% */
  height: 40px;
  margin-left: 24px;
  color: ${({ title }) => (title ? 'rgba(255, 255, 255, 0.6)' : '#ffffff')};
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
