import { ComponentType, ReactNode, MouseEventHandler } from 'react';

export interface User {
  email: string | null;
  id?: string;
  [key: string]: any;
}

export interface LinkProps {
  href: any;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<any>;
  [key: string]: any; 
}

export type LinkComponentType = ComponentType<LinkProps>;

export interface AuthState {
  user: User | null;
  loading: boolean;
  logout: () => void;
}
