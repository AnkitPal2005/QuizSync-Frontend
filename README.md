# QuizSync Frontend

A modern technical assessment platform built with Next.js 15, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
quizsync-frontend/
├── public/                    # Static assets
│   └── images/               # Image files
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/          # Authentication routes
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   └── onboarding/
│   │   ├── assessment/      # Assessment flow pages
│   │   │   ├── page.tsx     # Join assessment
│   │   │   ├── identity/    # Identity verification
│   │   │   ├── system-check/
│   │   │   ├── instructions/
│   │   │   ├── ready/
│   │   │   ├── coding/      # Coding interface
│   │   │   └── submitted/
│   │   ├── assessments/     # Assessment management
│   │   │   ├── page.tsx     # List view
│   │   │   └── [id]/        # Detail/edit view
│   │   ├── dashboard/       # Admin dashboard
│   │   ├── question-bank/   # Question management
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Landing page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── animations/      # Animation components
│   │   ├── home/           # Landing page sections
│   │   ├── layout/         # Layout components (Navbar, Footer, Sidebar)
│   │   └── shared/         # Reusable components
│   ├── config/             # App configuration
│   ├── constants/          # Constants and enums
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   │   ├── utils.ts        # General utilities
│   │   └── validations.ts  # Validation helpers
│   ├── modules/            # Feature modules
│   │   ├── home/
│   │   ├── layout/
│   │   └── shared/
│   ├── schemas/            # Data schemas
│   ├── services/           # API services
│   │   ├── api.ts          # API client
│   │   └── index.ts
│   └── types/              # TypeScript types
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, OGL
- **Icons:** Lucide React
- **Fonts:** Inter, Poppins (Google Fonts)

## 📦 Key Features

- ✅ Landing page with animations
- ✅ Authentication (Login, Signup, Password Reset)
- ✅ Admin Dashboard with analytics
- ✅ Assessment Management (Create, Edit, List)
- ✅ Question Bank
- ✅ Assessment Flow (Join, System Check, Identity Verification)
- ✅ Coding Interface
- ✅ Responsive Design
- ✅ Reusable Components

## 🎨 Design System

- **Primary Color:** Indigo (#4F46E5)
- **Fonts:** 
  - Body: Inter
  - Headings: Poppins
- **Spacing:** Tailwind default scale
- **Breakpoints:** Mobile-first responsive design

## 📝 Code Organization

### Components
- **Layout Components:** Navbar, Footer, Sidebar (in `components/layout/`)
- **Feature Components:** Organized by feature (home, shared, animations)
- **Page Components:** Co-located with routes in `app/` directory

### Services
- API calls centralized in `services/api.ts`
- Easy to mock for testing
- Type-safe with TypeScript

### Utilities
- Common utilities in `lib/utils.ts`
- Validation helpers in `lib/validations.ts`
- Constants in `constants/`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

## 📄 License

MIT License

## 👥 Team

QuizSync Development Team
