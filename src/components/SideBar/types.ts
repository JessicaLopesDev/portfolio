import { ReactElement } from 'react';

export interface SideBarProps {
  children?: ReactElement;
  isOpen: boolean;
  onClose: (value: boolean) => void;
}
