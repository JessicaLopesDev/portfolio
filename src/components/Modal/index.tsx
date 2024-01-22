import { ModalProps } from './types';

import * as S from './styles';

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <S.Container isOpen={isOpen} onClick={() => onClose(false)}>
      <S.Content onClick={(event) => event.stopPropagation()}>
        <S.CloseButton
          className="close-modal btn_shadow"
          onClick={() => onClose(false)}
        >
          <i className="fas fa-times" />
        </S.CloseButton>

        {children}
      </S.Content>
    </S.Container>
  );
};

export default Modal;
