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

export const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  transition: 0.5s;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px 0;
  text-transform: uppercase;
`;

export const CategoryTitle = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px 0;
  text-transform: uppercase;
`;

export const HeartIcon = styled.i`
  font-size: 30px;
  margin-top: 20px;
  transition: 0.5s;
  opacity: 0;
  &:hover {
    color: white;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  transition: 0.5s;
  padding-bottom: 30px;
  &:hover {
    color: #ff014f;
  }
`;
