import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const LeftContent = styled.div`
  margin-right: 10%;
  width: 50%;
`;

export const RightContent = styled.div`
  width: 40%;
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

export const ButtonsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonsTitle = styled.h4`
  font-weight: 500;
  letter-spacing: 2px;
  color: #43474b;
  font-size: 15px;
  margin: 30px 0 30px 0;
`;

export const ButtonsContent = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContactIcon = styled.i`
  font-size: 20px;
`;

export const ShadowButton = styled.button`
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

export const SkillImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const JessicaImgContainer = styled.div`
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 10px;
  height: 580px;
  width: 516px;
  margin-top: 20%;
`;

export const JessicaImg = styled.img`
  position: absolute;
  top: -15px;
  right: 10%;
  width: 510px;
`;
