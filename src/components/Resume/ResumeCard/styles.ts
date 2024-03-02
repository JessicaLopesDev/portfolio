import styled from 'styled-components';

export const Container = styled.div`
  min-height: 380px;
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  color: #000;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  p {
    font-size: 18px;
    transition: 0.5s;
  }
  hr {
    margin: 10px 0 20px 0;
    border: 1px solid #e3e9ed;
    background-color: #e3e9ed;
  }
  &:hover {
    background: #ff014f;
    color: white;
    box-shadow: none;
    transform: translate(0);
    p {
      color: white;
    }
    button {
      background: #ff3a75;
      box-shadow: none;
      color: white;
    }
    &::before {
      background: #ff3a75;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 13%;
    left: -50px;
    height: 5px;
    width: 50px;
    background: #d9dee2;
  }
  &::before {
    content: '';
    position: absolute;
    top: 11%;
    left: -62px;
    height: 10px;
    width: 10px;
    background: #fff;
    border: 5px solid #d9dee2;
    border-radius: 50%;
    z-index: 5;
    transition: 0.5s;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Rate = styled.div`
  > button {
    color: #ff014f;
    padding: 15px 30px;
    font-weight: bold;
    transition: 0.5s;
    margin-bottom: 40px;
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  }
`;
