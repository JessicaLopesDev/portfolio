import styled from 'styled-components';

export const Container = styled.header`
  height: 10vh;
  line-height: 10vh;
  max-width: 95%;
  margin: auto;
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
`;

export const ListItem = styled.li`
  margin-left: 30px;
  list-style: none;
`;

export const ItemLink = styled.a`
  transition: 0.5s;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  color: black;
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
