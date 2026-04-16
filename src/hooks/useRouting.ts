import { useRouter, usePathname } from 'next/navigation';
import { ROUTES, USER_FLOWS, getNextRoute, getPreviousRoute } from '@/constants/routes';

/**
 * Custom hook for routing utilities
 */
export function useRouting() {
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Navigate to next step in assessment flow
   */
  const goToNextAssessmentStep = () => {
    const nextRoute = getNextRoute(pathname, USER_FLOWS.CANDIDATE_ASSESSMENT);
    if (nextRoute) {
      router.push(nextRoute);
    }
  };

  /**
   * Navigate to previous step in assessment flow
   */
  const goToPreviousAssessmentStep = () => {
    const prevRoute = getPreviousRoute(pathname, USER_FLOWS.CANDIDATE_ASSESSMENT);
    if (prevRoute) {
      router.push(prevRoute);
    }
  };

  /**
   * Check if current route is in assessment flow
   */
  const isInAssessmentFlow = () => {
    return USER_FLOWS.CANDIDATE_ASSESSMENT.includes(pathname);
  };

  /**
   * Get current step number in assessment flow
   */
  const getCurrentAssessmentStep = () => {
    return USER_FLOWS.CANDIDATE_ASSESSMENT.indexOf(pathname) + 1;
  };

  /**
   * Get total steps in assessment flow
   */
  const getTotalAssessmentSteps = () => {
    return USER_FLOWS.CANDIDATE_ASSESSMENT.length;
  };

  /**
   * Navigate to dashboard
   */
  const goToDashboard = () => {
    router.push(ROUTES.DASHBOARD);
  };

  /**
   * Navigate to login with optional redirect
   */
  const goToLogin = (redirectTo?: string) => {
    const url = redirectTo 
      ? `${ROUTES.LOGIN}?redirect=${encodeURIComponent(redirectTo)}`
      : ROUTES.LOGIN;
    router.push(url);
  };

  /**
   * Navigate to assessment detail
   */
  const goToAssessmentDetail = (id: string | number) => {
    router.push(ROUTES.ASSESSMENT_DETAIL(id));
  };

  return {
    // Navigation functions
    goToNextAssessmentStep,
    goToPreviousAssessmentStep,
    goToDashboard,
    goToLogin,
    goToAssessmentDetail,
    
    // State checks
    isInAssessmentFlow,
    getCurrentAssessmentStep,
    getTotalAssessmentSteps,
    
    // Current route
    currentPath: pathname,
    
    // Router instance
    router,
  };
}
