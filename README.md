# Ciphera UI

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-green.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue.svg?logo=react&logoColor=white)](https://react.dev/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

The shared UI component library for the **Ciphera** privacy platform ecosystem. This package provides standardized, accessible, and theme-aware components used across Drop, Auth, and other Ciphera applications.

## Features

- **Brand Consistency**: Unified Header, Footer, and Navigation components.
- **Theme Aware**: Built-in support for Light and Dark modes via `next-themes`.
- **Accessible**: Built on top of Radix UI primitives and icons.
- **Framework Agnostic**: Designed to work with Next.js App Router, Pages Router, or standard React apps (via injectable Link components).
- **Type-Safe**: Written in TypeScript with full type definitions.

## Installation

```bash
npm install @ciphera-net/ui
```

*Note: Currently consumed as a Git submodule or local workspace package.*

## Usage

### 1. Configure Tailwind

Add the library to your `tailwind.config.ts` content path to ensure styles are generated:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // ... your app paths
    './node_modules/@ciphera/ui/dist/**/*.{js,mjs}', // If installed via npm
    '../ciphera-ui/src/**/*.{js,ts,jsx,tsx}',      // If using local workspace
  ],
  // ...
}
```

### 2. Import Components

```tsx
import { Header, Footer, ThemeToggle } from '@ciphera-net/ui'
import Link from 'next/link' // Or 'react-router-dom' Link

export default function Layout({ children }) {
  // Mock Auth State (replace with your real auth context)
  const auth = { user: null, loading: false, logout: () => {} }

  return (
    <>
      <Header 
        auth={auth} 
        LinkComponent={Link} 
        appName="Drop" 
      />
      <main>{children}</main>
      <Footer LinkComponent={Link} />
    </>
  )
}
```

## Development

### Prerequisites

- Node.js 18+
- npm/pnpm

### Build

This project uses `tsup` for bundling.

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch for changes
npm run dev
```

## Project Structure

```text
ciphera-ui/
├── src/
│   ├── components/    # Reusable UI components
│   ├── types.ts       # Shared type definitions
│   └── index.ts       # Public API exports
├── dist/              # Generated build artifacts
└── docs/              # Documentation
```

## License

AGPL-3.0
