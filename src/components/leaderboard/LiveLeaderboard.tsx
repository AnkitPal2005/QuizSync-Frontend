'use client';

import { useState, useEffect } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus, Clock, CheckCircle, XCircle, Zap } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  rank: number;
  previousRank: number;
  name: string;
  avatar: string;
  score: number;
  questionsAttempted: number;
  totalQuestions: number;
  accuracy: number;
  timeSpent: string;
  status: 'active' | 'completed' | 'idle';
  lastSubmission: string;
  trend: 'up' | 'down' | 'same';
}

export default function LiveLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([
    {
      id: '1',
      rank: 1,
      previousRank: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      score: 285,
      questionsAttempted: 3,
      totalQuestions: 3,
      accuracy: 95,
      timeSpent: '45:23',
      status: 'active',
      lastSubmission: 'Just now',
      trend: 'same'
    },
    {
      id: '2',
      rank: 2,
      previousRank: 3,
      name: 'Michael Chen',
      avatar: 'MC',
      score: 270,
      questionsAttempted: 3,
      totalQuestions: 3,
      accuracy: 90,
      timeSpent: '52:15',
      status: 'active',
      lastSubmission: '2 mins ago',
      trend: 'up'
    },
    {
      id: '3',
      rank: 3,
      previousRank: 2,
      name: 'Emily Rodriguez',
      avatar: 'ER',
      score: 265,
      questionsAttempted: 3,
      totalQuestions: 3,
      accuracy: 88,
      timeSpent: '48:30',
      status: 'completed',
      lastSubmission: '5 mins ago',
      trend: 'down'
    },
    {
      id: '4',
      rank: 4,
      previousRank: 4,
      name: 'David Kim',
      avatar: 'DK',
      score: 245,
      questionsAttempted: 2,
      totalQuestions: 3,
      accuracy: 82,
      timeSpent: '38:45',
      status: 'active',
      lastSubmission: '1 min ago',
      trend: 'same'
    },
    {
      id: '5',
      rank: 5,
      previousRank: 6,
      name: 'Priya Sharma',
      avatar: 'PS',
      score: 230,
      questionsAttempted: 2,
      totalQuestions: 3,
      accuracy: 77,
      timeSpent: '42:10',
      status: 'active',
      lastSubmission: '3 mins ago',
      trend: 'up'
    },
    {
      id: '6',
      rank: 6,
      previousRank: 5,
      name: 'James Wilson',
      avatar: 'JW',
      score: 220,
      questionsAttempted: 2,
      totalQuestions: 3,
      accuracy: 73,
      timeSpent: '55:20',
      status: 'idle',
      lastSubmission: '8 mins ago',
      trend: 'down'
    },
    {
      id: '7',
      rank: 7,
      previousRank: 7,
      name: 'Lisa Anderson',
      avatar: 'LA',
      score: 195,
      questionsAttempted: 2,
      totalQuestions: 3,
      accuracy: 65,
      timeSpent: '50:05',
      status: 'active',
      lastSubmission: '4 mins ago',
      trend: 'same'
    },
    {
      id: '8',
      rank: 8,
      previousRank: 8,
      name: 'Alex Martinez',
      avatar: 'AM',
      score: 180,
      questionsAttempted: 1,
      totalQuestions: 3,
      accuracy: 60,
      timeSpent: '35:40',
      status: 'active',
      lastSubmission: '6 mins ago',
      trend: 'same'
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEntries(prev => {
        const updated = [...prev];
        const randomIndex = Math.floor(Math.random() * updated.length);
        const entry = updated[randomIndex];
        
        // Simulate score update
        const scoreIncrease = Math.floor(Math.random() * 20) + 5;
        entry.score += scoreIncrease;
        entry.lastSubmission = 'Just now';
        entry.status = 'active';
        
        // Update rank based on score
        updated.sort((a, b) => b.score - a.score);
        updated.forEach((e, idx) => {
          e.previousRank = e.rank;
          e.rank = idx + 1;
          e.trend = e.rank < e.previousRank ? 'up' : e.rank > e.previousRank ? 'down' : 'same';
        });

        setHighlightedId(entry.id);
        setTimeout(() => setHighlightedId(null), 2000);
        
        return updated;
      });
      setLastUpdate(new Date());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 to-yellow-600';
    if (rank === 2) return 'from-gray-300 to-gray-500';
    if (rank === 3) return 'from-orange-400 to-orange-600';
    return 'from-indigo-400 to-indigo-600';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className="w-5 h-5 text-white" />;
    }
    return <span className="text-white font-bold">{rank}</span>;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'completed': return 'bg-blue-500';
      case 'idle': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'completed': return 'Completed';
      case 'idle': return 'Idle';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Live Leaderboard</h2>
              <p className="text-indigo-100 text-sm">Real-time rankings • Updates automatically</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">LIVE</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-indigo-100 mb-1">Total Participants</div>
            <div className="text-2xl font-bold">{entries.length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-indigo-100 mb-1">Active Now</div>
            <div className="text-2xl font-bold">{entries.filter(e => e.status === 'active').length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-indigo-100 mb-1">Completed</div>
            <div className="text-2xl font-bold">{entries.filter(e => e.status === 'completed').length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xs text-indigo-100 mb-1">Avg Score</div>
            <div className="text-2xl font-bold">
              {Math.round(entries.reduce((sum, e) => sum + e.score, 0) / entries.length)}
            </div>
          </div>
        </div>
      </div>

      {/* Last Update */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs">Active</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xs">Completed</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-xs">Idle</span>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {entries.map((entry, index) => (
                <tr
                  key={entry.id}
                  className={`transition-all duration-500 ${
                    highlightedId === entry.id
                      ? 'bg-green-50 scale-[1.02] shadow-lg'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Rank */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getRankColor(entry.rank)} flex items-center justify-center shadow-md`}>
                        {getRankIcon(entry.rank)}
                      </div>
                      {entry.trend === 'up' && (
                        <TrendingUp className="w-4 h-4 text-green-500 animate-bounce" />
                      )}
                      {entry.trend === 'down' && (
                        <TrendingDown className="w-4 h-4 text-red-500 animate-bounce" />
                      )}
                      {entry.trend === 'same' && (
                        <Minus className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </td>

                  {/* Candidate */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {entry.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{entry.name}</div>
                        <div className="text-xs text-gray-500">ID: {entry.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Score */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-indigo-600">{entry.score}</span>
                      {highlightedId === entry.id && (
                        <span className="text-xs font-semibold text-green-600 animate-pulse">
                          +pts
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Progress */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">
                          {entry.questionsAttempted}/{entry.totalQuestions}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {Math.round((entry.questionsAttempted / entry.totalQuestions) * 100)}%
                        </span>
                      </div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${(entry.questionsAttempted / entry.totalQuestions) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  {/* Accuracy */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {entry.accuracy >= 80 ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-orange-500" />
                      )}
                      <span className={`font-semibold ${
                        entry.accuracy >= 80 ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {entry.accuracy}%
                      </span>
                    </div>
                  </td>

                  {/* Time */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono text-sm">{entry.timeSpent}</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(entry.status)} ${
                        entry.status === 'active' ? 'animate-pulse' : ''
                      }`}></div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        entry.status === 'active' ? 'bg-green-100 text-green-700' :
                        entry.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {getStatusLabel(entry.status)}
                      </span>
                    </div>
                  </td>

                  {/* Last Activity */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{entry.lastSubmission}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Real-Time Updates</h4>
            <p className="text-sm text-blue-700">
              This leaderboard updates automatically as candidates submit their answers. Rankings change in real-time based on scores and accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
