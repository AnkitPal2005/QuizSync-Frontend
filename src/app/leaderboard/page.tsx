'use client';

import Sidebar from '@/components/layout/Sidebar';
import LiveLeaderboard from '@/components/leaderboard/LiveLeaderboard';

export default function LeaderboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <LiveLeaderboard />
        </div>
      </main>
    </div>
  );
}
