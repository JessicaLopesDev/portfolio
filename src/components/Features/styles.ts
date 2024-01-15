import styled from 'styled-components';

export const Container = styled.section`
  height: 10vh;
  line-height: 10vh;
`;

export const Content = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div``;

export const List = styled.ul`
  display: flex;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding-top: 30px;
    position: absolute;
    display: block;
    list-style: none;
    box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    width: 60%;
    height: 100vh;
    background-color: white;
    z-index: 888;
  }
`;

export const ListItem = styled.li`
  margin-left: 30px;
  list-style: none;
  @media (max-width: 768px) {
    width: 100%;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    line-height: 70px;
  }
`;

export const ItemLink = styled.a`
  transition: 0.5s;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
  &:hover {
    color: #ff014f;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: none;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  height: fit-content;
  color: #ff014f;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
`;

export const HomeButton = styled.button`
  display: none;
  padding: 18px 25px;
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
`;
