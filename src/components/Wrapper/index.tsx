import * as S from './styles';
import { WrapperProps } from './types';

export const Wrapper = ({
  children,
  id,
  hasScreenHeight,
  title,
  subtitle,
}: WrapperProps) => {
  return (
    <S.Container id={id} hasScreenHeight={hasScreenHeight}>
      <S.Content>
        <S.Heading>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Heading>
        {children}
      </S.Content>
    </S.Container>
  );
};
