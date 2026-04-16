'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

// Routes where Navbar and Footer should be shown (Public pages only)
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/forgot-password',
];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if current route should show Navbar/Footer
  const showNavbarFooter = publicRoutes.includes(pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {showNavbarFooter && <Footer />}
    </>
  );
}
