import * as S from './styles';
import { LinksListProps } from './types';

export const LinksList = ({ flexdirection = 'row' }: LinksListProps) => {
  const handleRedirectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.List flexdirection={flexdirection}>
      {/* <S.ListItem>
        <S.ItemLink href="#home">inicio</S.ItemLink>
      </S.ListItem> */}
      <S.ListItem>
        <S.ItemLink href="#features">tecnologias</S.ItemLink>
      </S.ListItem>
      <S.ListItem>
        <S.ItemLink href="#portfolio">projetos</S.ItemLink>
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
          <S.ContactIcon iconcolor="linkedin" className="fab fa-linkedin" />
        </S.ShadowButton>
      </S.ListItem>
    </S.List>
  );
};
