# API Documentation

## Components

### `<Header />`

The standard application header containing the logo, navigation links, theme toggle, and user menu.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `auth` | `AuthState` | Yes | Authentication state object (`{ user, loading, logout }`). |
| `LinkComponent` | `ComponentType<LinkProps>` | Yes | The Link component to use for navigation (e.g., `next/link`). |
| `logoSrc` | `string` | No | Path to the logo image. Defaults to `/drop_icon_no_margins.png`. |
| `appName` | `string` | No | Name of the application displayed next to the logo. Defaults to "Drop". |

### `<Footer />`

The standard application footer with copyright info and secondary navigation.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `LinkComponent` | `ComponentType<LinkProps>` | Yes | The Link component to use for navigation. |
| `onFeedbackClick` | `() => void` | No | Handler for the feedback button. If omitted, the button is hidden. |
| `appName` | `string` | No | Application name for copyright text. Defaults to "Ciphera Drop". |
| `year` | `number` | No | Copyright year. Defaults to current year. |

### `<ThemeToggle />`

A button that toggles between light and dark modes. Requires `next-themes` provider to be present in the app.

**Props:** None.

### `<UserMenu />`

The dropdown menu for authenticated users, showing profile info and actions.

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `auth` | `AuthState` | Yes | Authentication state object. |
| `LinkComponent` | `ComponentType<LinkProps>` | Yes | The Link component to use for navigation. |

## Types

### `AuthState`

```typescript
interface AuthState {
  user: {
    email: string | null;
    id?: string;
    [key: string]: any;
  } | null;
  loading: boolean;
  logout: () => void;
}
```

### `LinkProps`

Interface for the injected Link component, compatible with Next.js `Link` and standard HTML anchors.

```typescript
interface LinkProps {
  href: any; // String or UrlObject
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<any>;
  [key: string]: any;
}
```
