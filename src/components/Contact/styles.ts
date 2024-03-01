import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.div`
  text-align: center;

  > h1 {
    font-size: 50px;
  }
  h4 {
    color: #ff014f;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;

export const ContentContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const Left = styled.div``;

export const BoxContent = styled.div`
  padding: 30px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
  img {
    max-width: 275px;
  }
`;

export const Details = styled.div`
  > h1 {
    margin: 20px 0 20px 0;
    font-size: 25px;
  }
  > p {
    font-size: 14.5px;
  }
`;

export const ContactButtons = styled.div`
  margin-top: 20px;
  display: flex;
  > button {
    padding: 18px 25px;
    margin-right: 20px;
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
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 35px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
  span {
    font-size: 13px;
  }
`;

export const NamePhoneContainer = styled.div`
  display: flex;
  gap: 16px;
  > input {
    width: 50%;
  }
`;

export const SendButton = styled.button`
  width: 100%;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  transition: 0.5s;
  color: #ff014f;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;
