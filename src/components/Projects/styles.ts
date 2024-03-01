import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  text-align: center;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
  margin-top: 30px;
`;

export const Title = styled.h4`
  color: #ff014f;
  letter-spacing: 2px;
  font-weight: 400;
`;

export const Subtitle = styled.h1`
  font-size: 50px;
`;
