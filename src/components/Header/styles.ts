import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  background-color: #ecf0f3;
  line-height: 10vh;
  position: fixed;
  top: 0;
  padding: 0 64px;
  z-index: 20;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div``;

export const ListBox = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;

export const WelcomePhrase = styled.h3`
  font-weight: 100;
  letter-spacing: 2px;
  /* margin-top: 10px; */
`;

export const RightContent = styled.div``;

export const HomeButton = styled.button`
  display: none;
  @media (max-width: 950px) {
    display: block;
    padding: 18px 25px;
    margin-top: 16px;
    border-radius: 6px;
    transition: 0.3s all ease;
    cursor: pointer;
    height: fit-content;
    color: #ff014f;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
    &:hover {
      background: #ff014f;
      color: white;
    }
  }
`;
