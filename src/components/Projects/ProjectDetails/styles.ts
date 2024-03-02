import { styled } from 'styled-components';

export const Left = styled.div`
  width: 50%;

  > img {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  padding: 0 100px 0 50px;
`;

export const Title = styled.h1`
  margin: 10px 0 20px 0;
  font-size: 30px;
`;

export const Description = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
  line-height: 25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Button = styled.button`
  margin-right: 20px;
  color: #ff014f;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Icon = styled.i`
  margin-left: 10px;
`;
