import logo from '../../assets/logo.png';
import * as S from './styles';

const Header = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.LeftContent>
            <img src={logo} alt="" />
          </S.LeftContent>

          <S.RightContent className="navlink">
            <S.List>
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
                <S.ItemLink href="#blog">blog</S.ItemLink>
              </S.ListItem>
              <S.ListItem>
                <S.ItemLink href="#contact">contact</S.ItemLink>
              </S.ListItem>
              <S.ListItem>
                <S.Button>BUY NOW</S.Button>
              </S.ListItem>
            </S.List>
          </S.RightContent>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Header;
