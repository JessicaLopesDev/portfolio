import styled from 'styled-components';

export const Container = styled.button`
  width: 145px;
  height: 140px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  color: #000;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;

export const SkillImg = styled.img`
  width: 100px;
  height: 100px;
`;
