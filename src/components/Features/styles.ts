import styled from 'styled-components';

export const Container = styled.section`
  /* margin-top: 100px; */
  /* max-width: 95%; */
  margin: auto;
`;

export const Heading = styled.div`
  margin: 80px 0 30px 0;
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
  font-size: 50px;
`;
