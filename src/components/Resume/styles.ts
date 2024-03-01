import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 80px;
`;

export const TopicTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 12px;
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
    height: 160vh;
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
