import * as S from './styles';
import { LinksListProps } from './types';

export const LinksList = ({ flexDirection = 'row' }: LinksListProps) => {
  const handleRedirectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.List flexDirection={flexDirection}>
      <S.ListItem>
        <S.ItemLink href="#home">home</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#features">features</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#portfolio">portifólio</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#resume">currículo</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#contact">contato</S.ItemLink>
      </S.ListItem>

      <S.ListItem>
        <S.ShadowButton
          onClick={() =>
            handleRedirectClick('https://github.com/JessicaLopesDev')
          }
        >
          <S.ContactIcon className="fa-brands fa-github" />
        </S.ShadowButton>
      </S.ListItem>
      <S.ListItem>
        <S.ShadowButton
          onClick={() =>
            handleRedirectClick(
              'https://www.linkedin.com/in/jessica-lopes-dev-frontend/',
            )
          }
        >
          <S.ContactIcon iconColor="linkedin" className="fab fa-linkedin" />
        </S.ShadowButton>
      </S.ListItem>
    </S.List>
  );
};
