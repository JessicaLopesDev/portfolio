import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  color: #000;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    .title {
      color: #ff014f;
    }
    transform: translateY(-10px);
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const TitleContainer = styled.div`
  text-transform: uppercase;
`;

export const CategoryTitle = styled.span`
  color: #ff014f;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 18px;
  transition: 0.5s;
  padding-bottom: 30px;
  &:hover {
    color: #ff014f;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  color: #ff014f;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    transform: translateX(10px);
    background: #ff014f;
    color: white;
  }
`;

export const Icon = styled.i`
  margin-left: 10px;
`;
