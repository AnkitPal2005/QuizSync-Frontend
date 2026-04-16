// Application Routes Configuration

export const ROUTES = {
  // Public Routes
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Admin Routes (Protected)
  DASHBOARD: '/dashboard',
  ASSESSMENTS: '/assessments',
  ASSESSMENT_DETAIL: (id: string | number) => `/assessments/${id}`,
  QUESTION_BANK: '/question-bank',
  CANDIDATES: '/candidates',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  ONBOARDING: '/onboarding',
  
  // Assessment Flow (Candidate Routes)
  ASSESSMENT_JOIN: '/assessment',
  ASSESSMENT_IDENTITY: '/assessment/identity',
  ASSESSMENT_SYSTEM_CHECK: '/assessment/system-check',
  ASSESSMENT_INSTRUCTIONS: '/assessment/instructions',
  ASSESSMENT_READY: '/assessment/ready',
  ASSESSMENT_CODING: '/assessment/coding',
  ASSESSMENT_SUBMITTED: '/assessment/submitted',
} as const;

// Route Groups for easier management
export const ROUTE_GROUPS = {
  PUBLIC: [
    ROUTES.HOME,
    ROUTES.LOGIN,
    ROUTES.SIGNUP,
    ROUTES.FORGOT_PASSWORD,
  ],
  
  ADMIN: [
    ROUTES.DASHBOARD,
    ROUTES.ASSESSMENTS,
    ROUTES.QUESTION_BANK,
    ROUTES.CANDIDATES,
    ROUTES.REPORTS,
    ROUTES.SETTINGS,
    ROUTES.ONBOARDING,
  ],
  
  ASSESSMENT_FLOW: [
    ROUTES.ASSESSMENT_JOIN,
    ROUTES.ASSESSMENT_IDENTITY,
    ROUTES.ASSESSMENT_SYSTEM_CHECK,
    ROUTES.ASSESSMENT_INSTRUCTIONS,
    ROUTES.ASSESSMENT_READY,
    ROUTES.ASSESSMENT_CODING,
    ROUTES.ASSESSMENT_SUBMITTED,
  ],
} as const;

// User Flow Definitions
export const USER_FLOWS = {
  // New Admin User Flow
  ADMIN_ONBOARDING: [
    ROUTES.SIGNUP,           // 1. Create account
    ROUTES.ONBOARDING,       // 2. Complete profile
    ROUTES.DASHBOARD,        // 3. View dashboard
  ],
  
  // Existing Admin User Flow
  ADMIN_LOGIN: [
    ROUTES.LOGIN,            // 1. Login
    ROUTES.DASHBOARD,        // 2. Dashboard
  ],
  
  // Candidate Assessment Flow
  CANDIDATE_ASSESSMENT: [
    ROUTES.ASSESSMENT_JOIN,          // 1. Enter assessment code
    ROUTES.ASSESSMENT_IDENTITY,      // 2. Verify identity
    ROUTES.ASSESSMENT_SYSTEM_CHECK,  // 3. System check
    ROUTES.ASSESSMENT_INSTRUCTIONS,  // 4. Read instructions
    ROUTES.ASSESSMENT_READY,         // 5. Ready screen
    ROUTES.ASSESSMENT_CODING,        // 6. Take assessment
    ROUTES.ASSESSMENT_SUBMITTED,     // 7. Submission confirmation
  ],
  
  // Admin Creating Assessment Flow
  ADMIN_CREATE_ASSESSMENT: [
    ROUTES.DASHBOARD,                // 1. Start from dashboard
    ROUTES.ASSESSMENTS,              // 2. Go to assessments
    // ROUTES.ASSESSMENT_DETAIL('new'), // 3. Create new assessment
    ROUTES.QUESTION_BANK,            // 4. Add questions
  ],
} as const;

// Route Metadata
export const ROUTE_META = {
  [ROUTES.HOME]: {
    title: 'QuizSync - Technical Assessment Platform',
    description: 'Create and manage technical assessments',
    requiresAuth: false,
  },
  [ROUTES.LOGIN]: {
    title: 'Login - QuizSync',
    description: 'Login to your account',
    requiresAuth: false,
  },
  [ROUTES.SIGNUP]: {
    title: 'Sign Up - QuizSync',
    description: 'Create a new account',
    requiresAuth: false,
  },
  [ROUTES.DASHBOARD]: {
    title: 'Dashboard - QuizSync',
    description: 'Admin dashboard',
    requiresAuth: true,
    requiresAdmin: true,
  },
  [ROUTES.ASSESSMENTS]: {
    title: 'Assessments - QuizSync',
    description: 'Manage assessments',
    requiresAuth: true,
    requiresAdmin: true,
  },
  [ROUTES.ASSESSMENT_JOIN]: {
    title: 'Join Assessment - QuizSync',
    description: 'Enter assessment code',
    requiresAuth: false,
  },
} as const;

// Helper function to get next route in a flow
export function getNextRoute(currentRoute: string, flow: readonly string[]): string | null {
  const currentIndex = flow.indexOf(currentRoute);
  if (currentIndex === -1 || currentIndex === flow.length - 1) {
    return null;
  }
  return flow[currentIndex + 1];
}

// Helper function to get previous route in a flow
export function getPreviousRoute(currentRoute: string, flow: readonly string[]): string | null {
  const currentIndex = flow.indexOf(currentRoute);
  if (currentIndex <= 0) {
    return null;
  }
  return flow[currentIndex - 1];
}

// Helper to check if route requires authentication
export function requiresAuth(route: string): boolean {
  return ROUTE_GROUPS.ADMIN.some(adminRoute => route.startsWith(adminRoute));
}

// Helper to check if route is public
export function isPublicRoute(route: string): boolean {
  return ROUTE_GROUPS.PUBLIC.includes(route as any);
}
