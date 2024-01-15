import styled from 'styled-components';

export const Container = styled.header`
  padding: 50px;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  color: #000;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;

export const Title = styled.h2`
  margin: 20px 0 20px 0;
`;

export const Description = styled.p`
  word-spacing: 2px;
  transition: 0.5s;
  &:hover {
    color: white;
  }
`;

export const ArrowIcon = styled.i`
  font-size: 30px;
  margin-top: 20px;
  transition: 0.5s;
  opacity: 0;
  &:hover {
    color: white;
    opacity: 1;
  }
`;
