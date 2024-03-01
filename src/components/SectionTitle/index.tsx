import * as S from './styles';
import { SectionTitleProps } from './types';

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <S.Heading>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Heading>
  );
};
