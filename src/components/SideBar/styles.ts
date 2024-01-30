import styled, { css } from 'styled-components';
import { LinksList } from '../Header/LinksList';

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ isOpen }) => css`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.7);
    display: ${isOpen ? 'flex' : 'none'};
  `}
`;

export const Content = styled.div`
  top: 0;
  bottom: 0;
  justify-content: space-between;
  position: fixed;
  line-height: 1.4;
  background: #f0f3f5;
  padding: 14px 28px;
  min-width: 75%;
  z-index: 9999;
  padding: 50px;
`;

export const Navigation = styled(LinksList)`
  flex-direction: column;
  background-color: aqua;
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
