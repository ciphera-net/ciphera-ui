# Contributing to Ciphera UI

Thank you for contributing to the Ciphera Design System! This library ensures a consistent look and feel across all our applications.

## Development Workflow

1.  **Fork & Clone**: Clone the repository (or the parent Monorepo).
2.  **Install**: Run `npm install` in the `ciphera-ui` directory.
3.  **Develop**:
    *   Add new components in `src/components/`.
    *   Export them in `src/index.ts`.
    *   Use `npm run build` to compile (using `tsup`).
    *   Use `npm run dev` to watch for changes.

## Guidelines

### "Dumb" Components
Components in this library should generally be stateless (controlled) or self-contained UI logic only. Avoid baking in business logic, API calls, or specific auth providers. Pass data via **props**.

### Framework Agnostic
Do not import framework-specific globals (like `next/navigation` or `next/router`).
*   **Navigation**: Accept a `LinkComponent` prop.
*   **Images**: Use standard `<img>` tags or accept an `ImageComponent` prop if optimization is critical.
*   **Icons**: Import from `@ciphera/ui` (e.g. `import { CheckIcon } from '@ciphera/ui'`).

### Styling
*   Use **Tailwind CSS**.
*   Support **Dark Mode** (`dark:` modifiers) for all components.
*   Use the `neutral` color palette for structure and `brand-orange` for accents.

### Commit Messages

Follow the Conventional Commits specification:

*   `feat: Add Button component`
*   `fix: Adjust Header padding on mobile`
*   `docs: Update API reference`
