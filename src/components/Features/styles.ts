import styled from 'styled-components';

export const Container = styled.section`
  /* margin-top: 100px; */
  /* max-width: 95%; */
  margin: auto;
`;

export const Heading = styled.div`
  margin: 0 0 30px 0;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
`;

export const Title = styled.h4`
  color: #ff014f;
  letter-spacing: 2px;
  font-weight: 400;
`;

export const Subtitle = styled.h1`
  font-size: 45px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 48px;
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

export const SkillImg = styled.img`
  width: 100px;
  height: 100px;
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
