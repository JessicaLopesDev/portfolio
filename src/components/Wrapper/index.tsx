import * as S from './styles';
import { WrapperProps } from './types';

export const Wrapper = ({ children, id, hasScreenHeight }: WrapperProps) => {
  return (
    <S.Container id={id} hasScreenHeight={hasScreenHeight}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
