import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  transition: all 0.3s linear;
`;

export const Left = styled.div`
  width: 35%;
  padding: 35px;
  margin: 20px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
`;

export const PersonInfo = styled.div`
  margin-top: 40px;
  > span {
    color: #ff014f;
  }

  > h2 {
    margin: 15px 0 0 0;
  }
`;

export const Right = styled.div`
  width: 65%;
  padding: 0 0 0 50px;
  margin: 0 20px 0 0;
`;

export const RightContent = styled.div`
  margin-top: 40px;
  padding: 50px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;

  > h1 {
    font-weight: 500;
  }

  > h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

export const Icon = styled.i`
  font-size: 150px;
  opacity: 0.1;
`;
