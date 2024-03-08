import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
  id: string;
  hasscreenHeight?: boolean;
  title?: string;
  subtitle?: string;
}
