import { useState } from 'react';
import logo from '../../assets/logo.png';
import * as S from './styles';
import { SideBar } from '../SideBar';
import { LinksList } from './LinksList';

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.LeftContent>
            <img src={logo} alt="" />
          </S.LeftContent>

          <S.RightContent>
            <S.ListBox>
              <LinksList />
            </S.ListBox>
            <S.HomeButton onClick={() => setisOpen(true)}>
              <i className="fas fa-bars open"></i>
            </S.HomeButton>
          </S.RightContent>
        </S.Content>
        <SideBar isOpen={isOpen} onClose={() => setisOpen(false)} />
      </S.Container>
    </>
  );
};
