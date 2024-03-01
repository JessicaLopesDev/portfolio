import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  text-align: center;
`;

export const TechsDescription = styled.h4`
  font-weight: 500;
  letter-spacing: 2px;
  color: #43474b;
  font-size: 15px;
`;

export const GridContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 100px;
`;

export const Title = styled.h4`
  color: #ff014f;
  letter-spacing: 2px;
  font-weight: 400;
`;

export const Subtitle = styled.h1`
  font-size: 50px;
`;

export const SkillImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const ShadowButton = styled.button`
  width: 145px;
  height: 140px;
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
