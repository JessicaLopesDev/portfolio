import styled from 'styled-components';
import { WrapperProps } from './types';

type ContainerProps = Pick<WrapperProps, 'hasScreenHeight'>;

export const Container = styled.header<ContainerProps>`
  max-width: 1200px;
  margin: auto;
  height: ${({ hasScreenHeight }) =>
    hasScreenHeight ? 'calc(100vh - 80px)' : '100%'};
  position: relative;
  padding: 64px 0;
`;

export const Heading = styled.div`
  padding-bottom: 32px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Subtitle = styled.h4`
  color: #ff014f;
  letter-spacing: 2px;
  font-weight: 400;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
`;
