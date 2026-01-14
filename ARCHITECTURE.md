# Architecture Overview

## Folder Structure

```
portfolio_janu/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── layout/         # Layout-specific components
│   │       ├── Navbar.tsx  # Site navigation header
│   │       ├── Footer.tsx  # Site footer
│   │       └── MainLayout.tsx # Wrapper component for consistent page structure
│   │
│   ├── pages/              # Route-level page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About page
│   │   ├── Projects.tsx    # Projects showcase page
│   │   └── Contact.tsx     # Contact page
│   │
│   ├── config/             # Application configuration
│   │   └── routes.ts       # Centralized route path definitions
│   │
│   ├── App.tsx             # Root component with routing setup
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles with Tailwind directives
│
├── public/                 # Static assets served as-is
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies (generated)
│
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration for Tailwind
├── vite.config.ts          # Vite build tool configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## Design Decisions

### Component Organization
- **Layout Components** (`components/layout/`): Shared UI structure that appears on multiple pages
  - Separated for reusability and maintainability
  - MainLayout uses React Router's `<Outlet />` to render nested routes

### Page Components
- **Pages** (`pages/`): One component per route
  - Clear separation: each route has its own file
  - Easy to locate and modify page-specific code
  - All pages wrapped by MainLayout for consistency

### Configuration
- **Routes** (`config/routes.ts`): Centralized route paths
  - Single source of truth for route definitions
  - Prevents typos and makes refactoring easier
  - Type-safe route constants

### Routing Strategy
- Uses React Router DOM v7 with nested routes
- MainLayout wraps all routes, providing Navbar and Footer on every page
- Nested routes render via `<Outlet />` component

## Best Practices Implemented

1. **Separation of Concerns**: Each component has a single responsibility
2. **DRY Principle**: Layout code not repeated in each page
3. **Type Safety**: Full TypeScript support with proper type imports
4. **Scalability**: Structure supports easy addition of new pages/components
5. **Maintainability**: Clear folder structure with documented purpose
6. **Reusability**: Components designed to be reusable across the app

## Next Steps for Development

1. Add UI design and styling to components
2. Implement actual content for each page
3. Create reusable UI components (buttons, cards, etc.)
4. Add animations and transitions
5. Implement form handling for contact page
6. Add project data structure and showcase components
7. Set up state management if needed (Context API, Zustand, etc.)

