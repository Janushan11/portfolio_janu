# Portfolio Project

A modern, production-ready React portfolio built with TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/         # Layout components (Navbar, Footer, MainLayout)
├── pages/              # Route-level page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── config/             # Application configuration
│   └── routes.ts       # Centralized route definitions
├── App.tsx             # Root component with routing setup
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind directives
```

## Architecture Decisions

### Folder Structure
- **components/** - Reusable components organized by feature/type
- **pages/** - Route-level components (one per route)
- **config/** - Configuration files (routes, constants, etc.)
- **layout/** - Components that provide page structure

### Component Organization
- **Layout Components** - Shared UI structure (Navbar, Footer, MainLayout)
- **Page Components** - Full-page components for each route
- **Separation of Concerns** - Each component has a single responsibility

### Routing
- Uses React Router DOM v7 with nested routes
- MainLayout wraps all pages for consistent structure
- Routes defined in `config/routes.ts` for maintainability

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Next Steps

- Add UI design and styling
- Implement page content
- Add animations and transitions
- Set up state management if needed
- Add form handling for contact page
- Implement project showcase components
