import styled from 'styled-components';

export const Container = styled.header`
  height: 10vh;
  line-height: 10vh;
`;

export const Content = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div``;

export const ListBox = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
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
