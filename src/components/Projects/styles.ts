import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
  margin-top: 30px;
`;
