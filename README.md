# QuizSync Frontend

Modern Next.js application for QuizSync quiz platform.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── layout/           # Layout components (Navbar, Footer, etc.)
│       ├── Navbar.tsx
│       ├── MobileMenu.tsx
│       └── index.ts
├── lib/                   # Utility functions
│   └── utils.ts
├── types/                 # TypeScript type definitions
│   └── index.ts
└── constants/            # Application constants
    └── index.ts
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Folder Structure Guidelines

- `app/` - Pages and routing (Next.js App Router)
- `components/` - Reusable React components organized by feature
- `lib/` - Utility functions and helpers
- `types/` - TypeScript interfaces and types
- `constants/` - Application-wide constants
- `hooks/` - Custom React hooks (to be added)
- `services/` - API calls and external services (to be added)
- `store/` - State management (to be added if needed)
