import { ReactElement } from 'react';

export interface SideBarProps {
  children?: ReactElement;
  isopen: boolean;
  onClose: (value: boolean) => void;
}
