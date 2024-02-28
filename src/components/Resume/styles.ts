import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 80px;
`;

export const Heading = styled.div`
  margin: 40px 0 28px 0;
  text-align: center;

  > h1 {
    font-size: 50px;
  }
  > h2 {
    font-size: 40px;
  }
  h4 {
    color: #ff014f;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  position: relative;
`;

export const Side = styled.div`
  width: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 128px;
    left: 0;
    height: 157vh;
    width: 5px;
    background: #d9dee2;
    z-index: -2;
  }
  /* background-color: aqua; */
`;

export const Content = styled.div`
  /* max-width: 85%; */
  margin: auto;
  padding-left: 50px;
`;
