// Application configuration
export const config = {
  app: {
    name: 'QuizSync',
    description: 'Technical Assessment Platform',
    version: '1.0.0',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 30000,
  },
  features: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableNotifications: true,
  },
} as const;
