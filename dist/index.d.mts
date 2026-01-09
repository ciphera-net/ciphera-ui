import React, { ComponentType, ReactNode, MouseEventHandler } from 'react';
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

declare function ThemeProviders({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    isLoading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    icon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface PasswordInputProps extends Omit<InputProps, 'type' | 'icon'> {
    label?: string;
    required?: boolean;
}
declare const PasswordInput: React.ForwardRefExoticComponent<PasswordInputProps & React.RefAttributes<HTMLInputElement>>;

export { type AuthState, Button, type ButtonProps, Footer, Header, Input, type InputProps, type LinkComponentType, type LinkProps, PasswordInput, type PasswordInputProps, ThemeProviders, ThemeToggle, type User, UserMenu };
