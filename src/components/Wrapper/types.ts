import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
  id: string;
  hasScreenHeight?: boolean;
  title?: string;
  subtitle?: string;
}