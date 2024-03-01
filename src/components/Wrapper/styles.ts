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

export const Content = styled.div`
  height: 100%;
  display: flex;
`;
