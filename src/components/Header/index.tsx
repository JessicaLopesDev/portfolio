import { useState } from 'react';
// import logo from '../../assets/logo.png';
import * as S from './styles';
import { SideBar } from '../SideBar';
import { LinksList } from './LinksList';

export const Header = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.LeftContent>
            <S.WelcomePhrase>WELCOME TO MY WORLD</S.WelcomePhrase>
            {/* <img src={logo} alt="" /> */}
          </S.LeftContent>

          <S.RightContent>
            <S.ListBox>
              <LinksList />
            </S.ListBox>
            <S.HomeButton onClick={() => setisopen(true)}>
              <i className="fas fa-bars open"></i>
            </S.HomeButton>
          </S.RightContent>
        </S.Content>
        <SideBar isopen={isopen} onClose={() => setisopen(false)} />
      </S.Container>
    </>
  );
};
