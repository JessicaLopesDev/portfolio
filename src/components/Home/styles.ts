import styled from 'styled-components';

export const LeftContent = styled.div`
  width: 60%;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const RightContent = styled.div`
  width: 40%;
  padding-top: 80px;
  position: relative;
`;

export const Greeting = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

export const Name = styled.span`
  color: #ff014f;
`;

export const ProfessionPhrase = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #ff014f;
`;

export const Profession = styled.span`
  color: black;
`;

export const Description = styled.p`
  color: #878e99;
  font-size: 18px;
  line-height: 30px;
  margin-top: 30px;
`;

export const ResumeContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;

export const ContactIcon = styled.i`
  font-size: 20px;
`;

export const ResumeButton = styled.button`
  display: flex;
  gap: 20px;
  color: #ff014f;
  font-size: 30px;
  font-weight: 600;
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
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

export const JessicaImgContainer = styled.div`
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const JessicaImg = styled.img`
  position: absolute;
  bottom: 0;
  height: 100%;
  /* top: -15px;
  right: 10%; */
  /* max-width: 400px; */
`;
