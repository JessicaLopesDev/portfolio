import * as S from './styles';
import { WrapperProps } from './types';

export const Wrapper = ({
  children,
  id,
  hasscreenHeight,
  title,
  subtitle,
}: WrapperProps) => {
  return (
    <S.Container id={id} hasscreenHeight={hasscreenHeight}>
      <S.Heading>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Heading>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
