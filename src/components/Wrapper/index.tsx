import * as S from './styles';
import { WrapperProps } from './types';

export const Wrapper = ({ children, id }: WrapperProps) => {
  return (
    <S.Container id={id}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
