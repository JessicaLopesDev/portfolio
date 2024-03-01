import * as S from './styles';
import { SectionTitleProps } from './types';

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <S.Heading>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Title>{title}</S.Title>
    </S.Heading>
  );
};
