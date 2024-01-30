import * as S from './styles';
import { LinksListProps } from './types';

export const LinksList = ({ flexDirection = 'row' }: LinksListProps) => {
  return (
    <S.List flexDirection={flexDirection}>
      <S.ListItem>
        <S.ItemLink href="#home">home</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#features">features</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#portfolio">portfolio</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#resume">resume</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#contact">contact</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.Button>BUY NOW</S.Button>
      </S.ListItem>
    </S.List>
  );
};
