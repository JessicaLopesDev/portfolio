import { SideBarProps } from './types';

import * as S from './styles';
import { LinksList } from '../Header/LinksList';

export const SideBar = ({ isopen, onClose }: SideBarProps) => {
  return (
    <S.Container isopen={isopen} onClick={() => onClose(false)}>
      <S.Content onClick={(event) => event.stopPropagation()}>
        <S.CloseButton onClick={() => onClose(false)}>
          <i className="fas fa-times" />
        </S.CloseButton>

        <LinksList flexdirection="column" />
      </S.Content>
    </S.Container>
  );
};
