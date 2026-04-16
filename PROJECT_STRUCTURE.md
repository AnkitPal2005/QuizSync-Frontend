# QuizSync Frontend - Project Structure

## 📂 Complete Folder Structure

```
quizsync-frontend/
│
├── 📁 public/                          # Static assets
│   └── 📁 images/                      # Image files
│       └── Screenshot 2026-04-15 152253.png
│
├── 📁 src/                             # Source code
│   │
│   ├── 📁 app/                         # Next.js App Router (Pages)
│   │   ├── 📁 assessment/              # Assessment flow
│   │   │   ├── page.tsx                # Join assessment page
│   │   │   ├── 📁 identity/            # Identity verification
│   │   │   ├── 📁 system-check/        # System requirements check
│   │   │   ├── 📁 instructions/        # Assessment instructions
│   │   │   ├── 📁 ready/               # Ready to start
│   │   │   ├── 📁 coding/              # Coding interface
│   │   │   └── 📁 submitted/           # Submission confirmation
│   │   │
│   │   ├── 📁 assessments/             # Assessment management
│   │   │   ├── page.tsx                # Assessments list
│   │   │   └── 📁 [id]/                # Assessment detail/edit
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 dashboard/               # Admin dashboard
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 question-bank/           # Question management
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 login/                   # Login page
│   │   ├── 📁 signup/                  # Signup page
│   │   ├── 📁 forgot-password/         # Password reset
│   │   ├── 📁 onboarding/              # User onboarding
│   │   │
│   │   ├── layout.tsx                  # Root layout
│   │   ├── page.tsx                    # Landing page
│   │   ├── globals.css                 # Global styles
│   │   └── favicon.ico                 # Favicon
│   │
│   ├── 📁 components/                  # React Components
│   │   │
│   │   ├── 📁 animations/              # Animation components
│   │   │   └── Threads.tsx             # WebGL thread animation
│   │   │
│   │   ├── 📁 home/                    # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DashboardPreview.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 layout/                  # Layout components
│   │   │   ├── Navbar.tsx              # Top navigation
│   │   │   ├── Footer.tsx              # Footer
│   │   │   ├── Sidebar.tsx             # Sidebar navigation
│   │   │   ├── MobileMenu.tsx          # Mobile menu
│   │   │   └── index.ts
│   │   │
│   │   └── 📁 shared/                  # Reusable components
│   │       ├── FeatureCard.tsx
│   │       ├── PricingCard.tsx
│   │       ├── SectionHeader.tsx
│   │       └── index.ts
│   │
│   ├── 📁 config/                      # Configuration
│   │   └── index.ts                    # App config
│   │
│   ├── 📁 constants/                   # Constants
│   │   ├── home.ts                     # Home page constants
│   │   ├── navigation.ts               # Navigation items
│   │   └── index.ts
│   │
│   ├── 📁 hooks/                       # Custom React Hooks
│   │   └── index.ts                    # Hook exports
│   │
│   ├── 📁 lib/                         # Utility functions
│   │   ├── utils.ts                    # General utilities
│   │   └── validations.ts              # Validation helpers
│   │
│   ├── 📁 modules/                     # Feature modules
│   │   ├── 📁 home/
│   │   │   ├── 📁 config/
│   │   │   ├── 📁 schemas/
│   │   │   └── index.ts
│   │   ├── 📁 layout/
│   │   │   ├── 📁 config/
│   │   │   └── index.ts
│   │   └── 📁 shared/
│   │       ├── 📁 config/
│   │       └── index.ts
│   │
│   ├── 📁 schemas/                     # Data schemas
│   │   ├── home.ts
│   │   └── index.ts
│   │
│   ├── 📁 services/                    # API services
│   │   ├── api.ts                      # API client
│   │   └── index.ts
│   │
│   ├── 📁 styles/                      # Additional styles
│   │
│   └── 📁 types/                       # TypeScript types
│       └── index.ts
│
├── 📄 .env.example                     # Environment variables template
├── 📄 .env.local                       # Local environment variables (gitignored)
├── 📄 .gitignore                       # Git ignore rules
├── 📄 DEPLOYMENT.md                    # Deployment guide
├── 📄 eslint.config.mjs                # ESLint configuration
├── 📄 next.config.ts                   # Next.js configuration
├── 📄 next-env.d.ts                    # Next.js TypeScript declarations
├── 📄 package.json                     # Dependencies and scripts
├── 📄 package-lock.json                # Dependency lock file
├── 📄 postcss.config.mjs               # PostCSS configuration
├── 📄 PROJECT_STRUCTURE.md             # This file
├── 📄 README.md                        # Project documentation
├── 📄 tailwind.config.ts               # Tailwind CSS configuration
└── 📄 tsconfig.json                    # TypeScript configuration
```

## 🎯 Key Directories Explained

### `/src/app` - Pages (Next.js App Router)
- **Purpose:** All application routes and pages
- **Pattern:** File-based routing
- **Key Features:**
  - Server Components by default
  - Nested layouts
  - Loading and error states
  - API routes (if needed)

### `/src/components` - UI Components
- **Purpose:** Reusable React components
- **Organization:**
  - `animations/` - Complex animation components
  - `home/` - Landing page specific components
  - `layout/` - Layout components (Navbar, Footer, Sidebar)
  - `shared/` - Generic reusable components

### `/src/services` - API Layer
- **Purpose:** Centralized API communication
- **Benefits:**
  - Single source of truth for API calls
  - Easy to mock for testing
  - Type-safe with TypeScript
  - Error handling in one place

### `/src/hooks` - Custom Hooks
- **Purpose:** Reusable React logic
- **Examples:**
  - `useAuth` - Authentication logic
  - `useLocalStorage` - Local storage management
  - `useDebounce` - Debounce functionality

### `/src/lib` - Utilities
- **Purpose:** Helper functions and utilities
- **Contents:**
  - `utils.ts` - General utilities (classNames, formatters)
  - `validations.ts` - Input validation helpers

### `/src/config` - Configuration
- **Purpose:** Application-wide configuration
- **Contents:**
  - API endpoints
  - Feature flags
  - App metadata

### `/src/constants` - Constants
- **Purpose:** Static data and enums
- **Benefits:**
  - Single source of truth
  - Easy to update
  - Type-safe

### `/src/types` - TypeScript Types
- **Purpose:** Shared TypeScript interfaces and types
- **Benefits:**
  - Type safety across the app
  - Better IDE autocomplete
  - Catch errors at compile time

## 🔄 Data Flow

```
User Action
    ↓
Component (UI)
    ↓
Hook (Logic) ← → Service (API)
    ↓              ↓
State Update    Backend
    ↓
Re-render
```

## 📝 Naming Conventions

### Files
- **Components:** PascalCase (e.g., `Navbar.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`)
- **Pages:** lowercase (e.g., `page.tsx`)
- **Constants:** camelCase (e.g., `navigation.ts`)

### Code
- **Components:** PascalCase (e.g., `function Navbar()`)
- **Functions:** camelCase (e.g., `function formatDate()`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `const API_URL`)
- **Types/Interfaces:** PascalCase (e.g., `interface User`)

## 🚀 Best Practices

### Component Organization
```tsx
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/shared';

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export default function MyComponent({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Functions
  const handleClick = () => {};
  
  // 6. Render
  return <div>{title}</div>;
}
```

### Import Order
1. React imports
2. Third-party libraries
3. Internal components
4. Utils and helpers
5. Types
6. Styles

### File Size
- Keep components under 300 lines
- Extract complex logic to hooks
- Split large components into smaller ones

## 🔧 Configuration Files

### `next.config.ts`
- Next.js configuration
- Image domains
- Redirects and rewrites
- Environment variables

### `tailwind.config.ts`
- Tailwind CSS customization
- Theme colors
- Custom utilities
- Plugins

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (@/)
- Strict mode settings

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety

### UI/Styling
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animations
- `lucide-react` - Icons
- `ogl` - WebGL library

### Development
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

## 🎨 Styling Strategy

1. **Tailwind CSS** for utility classes
2. **CSS Modules** for component-specific styles (if needed)
3. **Global styles** in `globals.css`
4. **Framer Motion** for animations

## 🔐 Environment Variables

### Client-side (NEXT_PUBLIC_*)
- Accessible in browser
- Use for public configuration
- Example: `NEXT_PUBLIC_API_URL`

### Server-side
- Only accessible on server
- Use for secrets
- Example: `DATABASE_URL`

## 📊 Performance Optimization

1. **Code Splitting:** Automatic with Next.js
2. **Image Optimization:** Use `next/image`
3. **Font Optimization:** Use `next/font`
4. **Dynamic Imports:** For heavy components
5. **Caching:** Leverage Next.js caching

## 🧪 Testing Strategy (Future)

```
src/
├── __tests__/          # Test files
├── __mocks__/          # Mock data
└── components/
    └── Button/
        ├── Button.tsx
        └── Button.test.tsx
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
