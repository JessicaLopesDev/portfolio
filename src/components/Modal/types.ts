import { ReactElement } from 'react';

export interface ModalProps {
  children: ReactElement;
  isOpen: boolean;
  onClose: (value: boolean) => void;
}
