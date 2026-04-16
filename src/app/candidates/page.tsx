'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/layout';
import { Search, Filter, Download, MoreVertical, Mail } from 'lucide-react';
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components/shared';
import { buttonActions } from '@/lib/buttonActions';

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmails, setInviteEmails] = useState('');
  const { toasts, success, error, removeToast } = useToast();

  const stats = [
    { label: 'Total Candidates', value: '1,248', change: '↑ 12%', trend: 'up' },
    { label: 'In Progress', value: '142', change: '↑ 8%', trend: 'up' },
    { label: 'Completed', value: '896', change: '↓ 4%', trend: 'down' },
    { label: 'Avg Score', value: '76%', change: '↑ 2%', trend: 'up' },
  ];

  const candidates = [
    {
      id: 1,
      name: 'James Calzoni',
      email: 'jam_ca@gmail.com',
      phone: '+1 (555) 678-3434',
      location: 'San Francisco, CA',
      assessment: 'Senior Frontend Engineer',
      status: 'completed',
      score: 92,
      startedAt: 'Oct 24, 2023',
      completedAt: 'Oct 24, 2023 (45m)',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Lydia Rosser',
      email: 'lydia.ross@gmail.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
      assessment: 'Senior Frontend Engineer',
      status: 'in-progress',
      score: null,
      startedAt: 'Oct 26, 2023',
      completedAt: 'Pending',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Gretchen George',
      email: 'gret_ge@gmail.com',
      phone: '+1 (555) 876-5432',
      location: 'Austin, TX',
      assessment: 'Backend Java Senior',
      status: 'invited',
      score: null,
      startedAt: '-',
      completedAt: '-',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Marcus Chen',
      email: 'm.chen@gmail.com',
      phone: '+1 (555) 345-6789',
      location: 'Seattle, WA',
      assessment: 'Senior Frontend Engineer',
      status: 'completed',
      score: 48,
      startedAt: 'Oct 20, 2023',
      completedAt: 'Oct 20, 2023 (35m)',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || candidate.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-700',
      'in-progress': 'bg-yellow-100 text-yellow-700',
      invited: 'bg-gray-100 text-gray-700',
    };
    return styles[status as keyof typeof styles] || styles.invited;
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return 'bg-gray-200';
    if (score >= 75) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Button Handlers
  const handleExport = () => {
    const exportData = filteredCandidates.map(c => ({
      Name: c.name,
      Email: c.email,
      Assessment: c.assessment,
      Status: c.status,
      Score: c.score || 'Pending',
      Started: c.startedAt,
      Completed: c.completedAt,
    }));

    if (buttonActions.exportToCSV(exportData, 'candidates.csv')) {
      success(`Exported ${exportData.length} candidates successfully!`);
    } else {
      error('Failed to export candidates');
    }
  };

  const handleInvite = () => {
    const emails = inviteEmails.split(',').map(e => e.trim()).filter(Boolean);
    
    if (emails.length === 0) {
      error('Please enter at least one email address');
      return;
    }

    const invalidEmails = emails.filter(email => !buttonActions.isValidEmail(email));
    if (invalidEmails.length > 0) {
      error(`Invalid emails: ${invalidEmails.join(', ')}`);
      return;
    }

    setTimeout(() => {
      success(`Invited ${emails.length} candidate(s) successfully!`);
      setShowInviteModal(false);
      setInviteEmails('');
    }, 500);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCandidates(filteredCandidates.map(c => c.id));
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleSelectCandidate = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedCandidates([...selectedCandidates, id]);
    } else {
      setSelectedCandidates(selectedCandidates.filter(cid => cid !== id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedCandidates.length === 0) {
      error('Please select candidates to delete');
      return;
    }

    if (buttonActions.confirmAction(`Delete ${selectedCandidates.length} candidate(s)?`)) {
      success(`Deleted ${selectedCandidates.length} candidate(s)`);
      setSelectedCandidates([]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <ToastContainer toasts={toasts} onClose={removeToast} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
                <span>›</span>
                <span className="text-gray-900">Candidates</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Candidate Management</h1>
              <p className="text-xs text-gray-600 mt-0.5">Track and manage candidates across all assessments.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button 
                onClick={() => setShowInviteModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
              >
                <Mail className="w-4 h-4" />
                Invite Candidates
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">{stat.label}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <span className={`text-xs font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-gray-900">
              {filteredCandidates.length} Total Candidates
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                Sort
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Find candidate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Active filters:</span>
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                  filterStatus === 'all' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('completed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                  filterStatus === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilterStatus('in-progress')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                  filterStatus === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                }`}
              >
                In Progress
              </button>
              {filterStatus !== 'all' && (
                <button
                  onClick={() => {
                    setFilterStatus('all');
                    success('Filters cleared');
                  }}
                  className="text-xs text-gray-600 hover:text-gray-900"
                >
                  Clear all
                </button>
              )}
              {selectedCandidates.length > 0 && (
                <button
                  onClick={handleBulkDelete}
                  className="text-xs text-red-600 hover:text-red-700 font-medium"
                >
                  Delete Selected ({selectedCandidates.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">
                    <input 
                      type="checkbox" 
                      className="rounded"
                      checked={selectedCandidates.length === filteredCandidates.length && filteredCandidates.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Email Address</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Started / Completed</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Score</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={selectedCandidates.includes(candidate.id)}
                        onChange={(e) => handleSelectCandidate(candidate.id, e.target.checked)}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src={candidate.avatar} alt={candidate.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{candidate.name}</div>
                          <div className="text-xs text-gray-500">{candidate.assessment}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{candidate.email}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadge(candidate.status)}`}>
                        {candidate.status === 'in-progress' ? 'In Progress' : candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{candidate.startedAt}</div>
                      <div className="text-xs text-gray-500">{candidate.completedAt}</div>
                    </td>
                    <td className="py-4 px-4">
                      {candidate.score !== null ? (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                            <div 
                              className={`h-2 rounded-full ${getScoreColor(candidate.score)}`}
                              style={{ width: `${candidate.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{candidate.score}%</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">Pending</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/candidates/${candidate.id}`}>
                          <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                            View Profile
                          </button>
                        </Link>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Showing 1 to 10 of 1,248 entries
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Invite Candidates</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter email addresses separated by commas
            </p>
            <textarea
              value={inviteEmails}
              onChange={(e) => setInviteEmails(e.target.value)}
              placeholder="john@example.com, jane@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
              rows={4}
            />
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => {
                  setShowInviteModal(false);
                  setInviteEmails('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleInvite}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
              >
                Send Invites
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
