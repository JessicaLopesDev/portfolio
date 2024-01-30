import { SideBarProps } from './types';

import * as S from './styles';
import { LinksList } from '../Header/LinksList';

export const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <S.Container isOpen={isOpen} onClick={() => onClose(false)}>
      <S.Content onClick={(event) => event.stopPropagation()}>
        <S.CloseButton onClick={() => onClose(false)}>
          <i className="fas fa-times" />
        </S.CloseButton>

        <LinksList flexDirection="column" />
      </S.Content>
    </S.Container>
  );
};
