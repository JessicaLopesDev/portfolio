import { useState } from 'react';
import logo from '../../assets/logo.png';
import * as S from './styles';

export const Header = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.LeftContent>
            <img src={logo} alt="" />
          </S.LeftContent>
          <S.RightContent>
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
                <S.ItemLink href="#contact">contact</S.ItemLink>
              </S.ListItem>
              <S.ListItem>
                <S.Button>BUY NOW</S.Button>
              </S.ListItem>
            </S.List>
            <S.HomeButton onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </S.HomeButton>
          </S.RightContent>
        </S.Content>
      </S.Container>
    </>
  );
};
