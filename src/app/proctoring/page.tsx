'use client';

import Sidebar from '@/components/layout/Sidebar';
import ProctoringDashboard from '@/components/proctoring/ProctoringDashboard';

export default function ProctoringPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <ProctoringDashboard />
      </main>
    </div>
  );
}
