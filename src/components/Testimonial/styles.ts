import styled from 'styled-components';

export const Container = styled.div`
  max-width: 95%;
  margin: auto;
`;

export const Heading = styled.div`
  margin: 50px 0 50px 0;
  text-align: center;

  > h1 {
    font-size: 40px;
  }
  h4 {
    color: #ff014f;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;

export const SlideContainer = styled.div`
  max-width: 80%;
  margin: auto;
  height: 500px;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const ButtonsSlideContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
`;

export const PrevBtn = styled.button`
  padding: 18px 22px;
  border-radius: 6px;
  transition: 0.3s all ease;
  margin-right: 30px;
  color: #000;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;

export const NextBtn = styled.button`
  padding: 18px 22px;
  border-radius: 6px;
  transition: 0.3s all ease;
  color: #000;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;
