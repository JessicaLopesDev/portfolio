import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 80px;
`;

export const Heading = styled.div`
  margin: 50px 0 50px 0;
  text-align: center;

  > h1 {
    font-size: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 40px;
`;

export const Side = styled.div`
  width: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 18%;
    left: 0;
    height: 118vh;
    width: 5px;
    background: #d9dee2;
    z-index: -2;
  }
`;

export const Content = styled.div`
  max-width: 85%;
  margin: auto;
`;
