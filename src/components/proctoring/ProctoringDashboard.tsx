'use client';

import { useState } from 'react';
import { Camera, Monitor, AlertTriangle, Eye, Activity, Clock, User, TrendingUp, TrendingDown } from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  avatar: string;
  status: 'active' | 'flagged' | 'completed';
  violations: number;
  riskScore: number;
  timeElapsed: string;
  lastActivity: string;
}

export default function ProctoringDashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(1);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'flagged'>('all');

  const candidates: Candidate[] = [
    {
      id: 1,
      name: 'James Calzoni',
      avatar: 'https://i.pravatar.cc/150?img=1',
      status: 'active',
      violations: 3,
      riskScore: 45,
      timeElapsed: '32:15',
      lastActivity: 'Just now',
    },
    {
      id: 2,
      name: 'Lydia Rosser',
      avatar: 'https://i.pravatar.cc/150?img=2',
      status: 'flagged',
      violations: 8,
      riskScore: 85,
      timeElapsed: '28:42',
      lastActivity: '2 mins ago',
    },
    {
      id: 3,
      name: 'Marcus Chen',
      avatar: 'https://i.pravatar.cc/150?img=4',
      status: 'active',
      violations: 1,
      riskScore: 15,
      timeElapsed: '45:30',
      lastActivity: 'Just now',
    },
  ];

  const stats = [
    { label: 'Active Sessions', value: '12', change: '+3', trend: 'up', icon: Activity },
    { label: 'Flagged Candidates', value: '4', change: '+2', trend: 'up', icon: AlertTriangle },
    { label: 'Avg Risk Score', value: '32%', change: '-5%', trend: 'down', icon: TrendingDown },
    { label: 'Total Violations', value: '47', change: '+12', trend: 'up', icon: Eye },
  ];

  const recentViolations = [
    { candidate: 'Lydia Rosser', type: 'Multiple faces detected', time: '2 mins ago', severity: 'high' },
    { candidate: 'James Calzoni', type: 'Tab switch detected', time: '5 mins ago', severity: 'medium' },
    { candidate: 'Marcus Chen', type: 'Face not visible', time: '8 mins ago', severity: 'low' },
    { candidate: 'Lydia Rosser', type: 'Audio anomaly', time: '10 mins ago', severity: 'medium' },
  ];

  const filteredCandidates = candidates.filter(c => {
    if (filterStatus === 'all') return true;
    return c.status === filterStatus;
  });

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'text-red-600 bg-red-100';
    if (score >= 40) return 'text-orange-600 bg-orange-100';
    return 'text-green-600 bg-green-100';
  };

  const getStatusColor = (status: string) => {
    if (status === 'flagged') return 'bg-red-100 text-red-700 border-red-300';
    if (status === 'active') return 'bg-green-100 text-green-700 border-green-300';
    return 'bg-gray-100 text-gray-700 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Live Proctoring Dashboard</h1>
          <p className="text-gray-600">Real-time monitoring of all active assessment sessions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    stat.trend === 'up' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      stat.trend === 'up' ? 'text-red-600' : 'text-green-600'
                    }`} />
                  </div>
                  <span className={`text-xs font-semibold flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Candidates List */}
          <div className="col-span-1 bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Active Candidates</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    filterStatus === 'all'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({candidates.length})
                </button>
                <button
                  onClick={() => setFilterStatus('active')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    filterStatus === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilterStatus('flagged')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    filterStatus === 'flagged'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Flagged
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[600px]">
              {filteredCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => setSelectedCandidate(candidate.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                    selectedCandidate === candidate.id ? 'bg-indigo-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        candidate.status === 'active' ? 'bg-green-500' :
                        candidate.status === 'flagged' ? 'bg-red-500' :
                        'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900 truncate">{candidate.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(candidate.status)}`}>
                          {candidate.status}
                        </span>
                        <span className="text-xs text-gray-500">{candidate.timeElapsed}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-600">{candidate.violations} violations</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${getRiskColor(candidate.riskScore)}`}>
                          {candidate.riskScore}% risk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Feed & Details */}
          <div className="col-span-2 space-y-6">
            {/* Live Camera Feed */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Live Camera Feed</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600 font-medium">LIVE</span>
                </div>
              </div>

              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                {/* Simulated camera feed */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-600" />
                </div>

                {/* Face detection overlay */}
                <div className="absolute inset-0 border-2 border-green-500 m-12 rounded-lg">
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-green-500"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-green-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-green-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-green-500"></div>
                </div>

                {/* Info overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-3 py-2 text-white text-xs">
                    <div className="font-semibold">James Calzoni</div>
                    <div className="text-gray-300">Senior Frontend Engineer</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-green-500 text-white px-3 py-2 rounded text-xs font-semibold flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      ON
                    </div>
                    <div className="bg-green-500 text-white px-3 py-2 rounded text-xs font-semibold flex items-center gap-1">
                      <Monitor className="w-3 h-3" />
                      ON
                    </div>
                  </div>
                </div>

                {/* Detection status */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-4 py-3 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold">AI Detection Status</span>
                      <span className="text-xs text-green-400">✓ All Clear</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-[10px]">
                      <div>
                        <div className="text-gray-400">Face Detection</div>
                        <div className="text-green-400 font-semibold">98% Confidence</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Faces Count</div>
                        <div className="text-green-400 font-semibold">1 Detected</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Eye Tracking</div>
                        <div className="text-green-400 font-semibold">On Screen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Share Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1 text-white text-[10px]">
                      Screen Share - Active
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Time Elapsed</div>
                    <div className="text-lg font-bold text-gray-900">32:15 / 90:00</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs text-gray-600 mb-1">Risk Score</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-orange-600">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Violations */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Recent Violations</h3>
              <div className="space-y-3">
                {recentViolations.map((violation, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-l-4 ${
                      violation.severity === 'high'
                        ? 'bg-red-50 border-red-500'
                        : violation.severity === 'medium'
                        ? 'bg-orange-50 border-orange-500'
                        : 'bg-yellow-50 border-yellow-500'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className={`w-5 h-5 mt-0.5 ${
                          violation.severity === 'high'
                            ? 'text-red-600'
                            : violation.severity === 'medium'
                            ? 'text-orange-600'
                            : 'text-yellow-600'
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-gray-900">{violation.candidate}</span>
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                              violation.severity === 'high'
                                ? 'bg-red-200 text-red-800'
                                : violation.severity === 'medium'
                                ? 'bg-orange-200 text-orange-800'
                                : 'bg-yellow-200 text-yellow-800'
                            }`}
                          >
                            {violation.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700">{violation.type}</div>
                        <div className="text-xs text-gray-500 mt-1">{violation.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
