import { ComponentType, ReactNode, MouseEventHandler } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface User {
    email: string | null;
    id?: string;
    [key: string]: any;
}
interface LinkProps {
    href: any;
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<any>;
    [key: string]: any;
}
type LinkComponentType = ComponentType<LinkProps>;
interface AuthState {
    user: User | null;
    loading: boolean;
    logout: () => void;
}

interface HeaderProps {
    auth: AuthState;
    LinkComponent: LinkComponentType;
    logoSrc?: string;
    appName?: string;
}
declare function Header({ auth, LinkComponent: Link, logoSrc, appName }: HeaderProps): react_jsx_runtime.JSX.Element;

interface FooterProps {
    LinkComponent: LinkComponentType;
    onFeedbackClick?: () => void;
    appName?: string;
    year?: number;
}
declare function Footer({ LinkComponent: Link, onFeedbackClick, appName, year }: FooterProps): react_jsx_runtime.JSX.Element;

interface UserMenuProps {
    auth: AuthState;
    LinkComponent: LinkComponentType;
}
declare function UserMenu({ auth, LinkComponent: Link }: UserMenuProps): react_jsx_runtime.JSX.Element;

declare function ThemeToggle(): react_jsx_runtime.JSX.Element;

export { type AuthState, Footer, Header, type LinkComponentType, type LinkProps, ThemeToggle, type User, UserMenu };
