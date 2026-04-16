# QuizSync - Routing & Navigation Guide

## 🗺️ Application Flow

### 1️⃣ Landing Page Flow (Public)

```
┌─────────────────┐
│   / (Home)      │  ← Landing page with features, pricing
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────┐
│ /login │ │/signup │
└────┬───┘ └───┬────┘
     │         │
     └────┬────┘
          ▼
    ┌──────────────┐
    │ /onboarding  │  ← Complete profile (first time)
    └──────┬───────┘
           ▼
    ┌──────────────┐
    │  /dashboard  │  ← Admin dashboard
    └──────────────┘
```

---

## 2️⃣ Admin Flow (Protected Routes)

### A. Dashboard → Create Assessment

```
/dashboard
    │
    ├─→ /assessments (List all assessments)
    │       │
    │       ├─→ /assessments/new (Create new)
    │       │       │
    │       │       └─→ /question-bank (Add questions)
    │       │
    │       └─→ /assessments/[id] (Edit existing)
    │
    ├─→ /question-bank (Manage questions)
    │
    ├─→ /candidates (View candidates)
    │
    ├─→ /reports (View reports)
    │
    └─→ /settings (App settings)
```

### B. Assessment Management Flow

```
/assessments
    │
    ├─→ Click "New Assessment"
    │       │
    │       ├─→ /assessments/new
    │       │       │
    │       │       ├─ Add details (name, role, duration)
    │       │       ├─ Add sections
    │       │       ├─ Add questions
    │       │       └─ Publish
    │       │
    │       └─→ Back to /assessments
    │
    └─→ Click existing assessment
            │
            └─→ /assessments/[id]
                    │
                    ├─ Edit questions
                    ├─ View candidates
                    ├─ View results
                    └─ Publish/Unpublish
```

---

## 3️⃣ Candidate Assessment Flow (Public)

### Complete Assessment Journey

```
/assessment (Join Assessment)
    │
    ├─ Enter assessment code
    ├─ Enter name & email
    │
    ▼
/assessment/identity (Identity Verification)
    │
    ├─ Upload photo
    ├─ Verify identity
    │
    ▼
/assessment/system-check (System Check)
    │
    ├─ Check camera
    ├─ Check microphone
    ├─ Check internet speed
    ├─ Check browser compatibility
    │
    ▼
/assessment/instructions (Instructions)
    │
    ├─ Read assessment rules
    ├─ Understand scoring
    ├─ Review time limits
    │
    ▼
/assessment/ready (Ready Screen)
    │
    ├─ Final confirmation
    ├─ Start timer countdown
    │
    ▼
/assessment/coding (Coding Interface)
    │
    ├─ Answer questions
    ├─ Write code
    ├─ Run tests
    ├─ Submit answers
    │
    ▼
/assessment/submitted (Submission Confirmation)
    │
    └─ Show success message
       └─ Redirect to results (future)
```

---

## 📋 Route Definitions

### Public Routes (No Authentication Required)

| Route | Purpose | Next Step |
|-------|---------|-----------|
| `/` | Landing page | `/login` or `/signup` |
| `/login` | User login | `/dashboard` (admin) |
| `/signup` | User registration | `/onboarding` |
| `/forgot-password` | Password reset | `/login` |
| `/assessment` | Join assessment | `/assessment/identity` |

### Protected Routes (Authentication Required)

| Route | Purpose | Access |
|-------|---------|--------|
| `/dashboard` | Admin dashboard | Admin only |
| `/assessments` | Assessment list | Admin only |
| `/assessments/[id]` | Assessment detail | Admin only |
| `/question-bank` | Question management | Admin only |
| `/candidates` | Candidate management | Admin only |
| `/reports` | Analytics & reports | Admin only |
| `/settings` | App settings | Admin only |
| `/onboarding` | Complete profile | Authenticated users |

### Assessment Routes (Candidate Flow)

| Route | Purpose | Previous | Next |
|-------|---------|----------|------|
| `/assessment` | Join assessment | - | `/assessment/identity` |
| `/assessment/identity` | Verify identity | `/assessment` | `/assessment/system-check` |
| `/assessment/system-check` | System check | `/assessment/identity` | `/assessment/instructions` |
| `/assessment/instructions` | Read instructions | `/assessment/system-check` | `/assessment/ready` |
| `/assessment/ready` | Ready screen | `/assessment/instructions` | `/assessment/coding` |
| `/assessment/coding` | Take assessment | `/assessment/ready` | `/assessment/submitted` |
| `/assessment/submitted` | Confirmation | `/assessment/coding` | - |

---

## 🔐 Authentication & Authorization

### Middleware Protection

```typescript
// Public routes - accessible to everyone
const publicRoutes = ['/', '/login', '/signup', '/forgot-password'];

// Protected routes - require authentication
const protectedRoutes = ['/dashboard', '/assessments', '/question-bank'];

// Assessment routes - accessible without login
const assessmentRoutes = ['/assessment'];
```

### Route Guards

1. **Public Routes**
   - Accessible to everyone
   - If authenticated user visits `/login`, redirect to `/dashboard`

2. **Protected Routes**
   - Require authentication
   - If not authenticated, redirect to `/login?redirect=/original-path`
   - Admin-only routes check user role

3. **Assessment Routes**
   - Accessible without authentication
   - Session-based tracking
   - Can't go back after submission

---

## 🎯 User Journeys

### Journey 1: New Admin User

```
1. Visit / (Landing page)
2. Click "Sign Up"
3. Fill signup form → /signup
4. Complete profile → /onboarding
5. View dashboard → /dashboard
6. Create assessment → /assessments
7. Add questions → /question-bank
8. Publish assessment
```

### Journey 2: Returning Admin User

```
1. Visit / (Landing page)
2. Click "Login"
3. Enter credentials → /login
4. View dashboard → /dashboard
5. Manage assessments → /assessments
6. View reports → /reports
```

### Journey 3: Candidate Taking Assessment

```
1. Receive assessment link
2. Enter code → /assessment
3. Verify identity → /assessment/identity
4. System check → /assessment/system-check
5. Read instructions → /assessment/instructions
6. Ready screen → /assessment/ready
7. Take assessment → /assessment/coding
8. Submit → /assessment/submitted
```

---

## 🔄 Navigation Patterns

### Admin Navigation

```typescript
// Sidebar navigation (always visible in admin routes)
const adminNav = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Assessments', path: '/assessments' },
  { label: 'Question Bank', path: '/question-bank' },
  { label: 'Candidates', path: '/candidates' },
  { label: 'Reports', path: '/reports' },
  { label: 'Settings', path: '/settings' },
];
```

### Assessment Navigation

```typescript
// Linear flow - can't skip steps
const assessmentFlow = [
  '/assessment',
  '/assessment/identity',
  '/assessment/system-check',
  '/assessment/instructions',
  '/assessment/ready',
  '/assessment/coding',
  '/assessment/submitted',
];

// Navigation buttons
- "Back" button: Goes to previous step (disabled on first step)
- "Next" button: Goes to next step (validation required)
- "Submit" button: Only on coding page
```

---

## 🚀 Quick Start Routes

### For Development

```bash
# Landing page
http://localhost:3000/

# Admin login
http://localhost:3000/login

# Admin dashboard
http://localhost:3000/dashboard

# Join assessment
http://localhost:3000/assessment

# Create assessment
http://localhost:3000/assessments
```

### For Testing Flows

```bash
# Test admin flow
1. /signup → /onboarding → /dashboard

# Test assessment flow
1. /assessment → /assessment/identity → ... → /assessment/submitted

# Test assessment creation
1. /dashboard → /assessments → /assessments/new → /question-bank
```

---

## 📱 Mobile Navigation

### Responsive Behavior

- **Desktop:** Sidebar always visible
- **Tablet:** Collapsible sidebar
- **Mobile:** Hamburger menu

### Mobile-Specific Routes

- Same routes work on mobile
- Optimized layouts for small screens
- Touch-friendly navigation

---

## 🔧 Route Configuration

### Next.js App Router Structure

```
src/app/
├── page.tsx                    # / (Landing)
├── login/page.tsx              # /login
├── signup/page.tsx             # /signup
├── forgot-password/page.tsx    # /forgot-password
├── onboarding/page.tsx         # /onboarding
├── dashboard/page.tsx          # /dashboard
├── assessments/
│   ├── page.tsx                # /assessments
│   └── [id]/page.tsx           # /assessments/[id]
├── question-bank/page.tsx      # /question-bank
└── assessment/
    ├── page.tsx                # /assessment
    ├── identity/page.tsx       # /assessment/identity
    ├── system-check/page.tsx   # /assessment/system-check
    ├── instructions/page.tsx   # /assessment/instructions
    ├── ready/page.tsx          # /assessment/ready
    ├── coding/page.tsx         # /assessment/coding
    └── submitted/page.tsx      # /assessment/submitted
```

---

## 🎨 Route Transitions

### Page Transitions

```typescript
// Smooth transitions between routes
- Fade in/out
- Slide animations for assessment flow
- Loading states
```

### Loading States

```typescript
// Each route has loading.tsx
src/app/dashboard/loading.tsx
src/app/assessments/loading.tsx
```

---

## 📊 Analytics & Tracking

### Route Tracking

```typescript
// Track page views
- Landing page visits
- Assessment starts
- Assessment completions
- Admin actions
```

---

## 🐛 Error Handling

### Error Routes

```typescript
// 404 - Not Found
src/app/not-found.tsx

// 500 - Server Error
src/app/error.tsx

// Assessment-specific errors
src/app/assessment/error.tsx
```

---

## 📚 Related Documentation

- [Project Structure](./PROJECT_STRUCTURE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [README](./README.md)
