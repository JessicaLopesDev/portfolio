import styled, { css } from 'styled-components';

type ContainerProps = {
  isopen: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ isopen }) => css`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    display: ${isopen ? 'flex' : 'none'};
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  line-height: 1.4;
  background: #f0f3f5;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 85%;
  min-width: 60%;
  z-index: 9999;
  /* box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff; */
  padding: 50px;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  color: #ff014f;
  padding: 18px 22px;
  border-radius: 6px;
  transition: 0.3s all ease;
  position: absolute;
  right: 32px;
  top: 22px;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    transform: translateY(-10px);
  }
`;
