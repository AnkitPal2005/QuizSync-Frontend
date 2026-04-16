'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout';
import { Bell, Lock, Users, CreditCard, Globe, Mail, Zap } from 'lucide-react';
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components/shared';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });
  const [formData, setFormData] = useState({
    companyName: 'QuizSync Inc.',
    website: 'https://quizsync.com',
    timezone: 'Pacific Time (PT)',
    language: 'English (US)',
  });
  const [hasChanges, setHasChanges] = useState(false);
  const { toasts, success, error, info, removeToast } = useToast();

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Integrations', icon: Zap },
  ];

  // Button Handlers
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setHasChanges(true);
  };

  const handleSaveGeneral = () => {
    setTimeout(() => {
      success('Settings saved successfully!');
      setHasChanges(false);
    }, 300);
  };

  const handleCancelGeneral = () => {
    setFormData({
      companyName: 'QuizSync Inc.',
      website: 'https://quizsync.com',
      timezone: 'Pacific Time (PT)',
      language: 'English (US)',
    });
    setHasChanges(false);
    info('Changes discarded');
  };

  const handleToggleNotification = (key: keyof typeof notifications) => {
    const newValue = !notifications[key];
    setNotifications({ ...notifications, [key]: newValue });
    success(`${key.charAt(0).toUpperCase() + key.slice(1)} notifications ${newValue ? 'enabled' : 'disabled'}`);
  };

  const handleUpdatePassword = () => {
    success('Password updated successfully!');
  };

  const handleEnable2FA = () => {
    success('Two-factor authentication enabled!');
  };

  const handleInviteMember = () => {
    success('Invitation sent successfully!');
  };

  const handleRemoveMember = (name: string) => {
    if (confirm(`Remove ${name} from the team?`)) {
      success(`${name} removed from team`);
    }
  };

  const handleDownloadInvoice = (invoice: string) => {
    success(`Downloading ${invoice}...`);
  };

  const handleToggleIntegration = (name: string, connected: boolean) => {
    if (connected) {
      success(`${name} disconnected`);
    } else {
      success(`${name} connected successfully!`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <ToastContainer toasts={toasts} onClose={removeToast} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
            <p className="text-xs text-gray-600 mt-0.5">Manage your account settings and preferences.</p>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex">
          {/* Sidebar Tabs */}
          <div className="w-64 bg-white border-r border-gray-200 p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-3xl">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">General Settings</h2>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleChange('companyName', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      {/* Company Website */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Website
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleChange('website', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      {/* Time Zone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Zone
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          <option>Pacific Time (PT)</option>
                          <option>Eastern Time (ET)</option>
                          <option>Central Time (CT)</option>
                          <option>Mountain Time (MT)</option>
                        </select>
                      </div>

                      {/* Language */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          <option>English (US)</option>
                          <option>English (UK)</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <button 
                          onClick={handleCancelGeneral}
                          disabled={!hasChanges}
                          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSaveGeneral}
                          disabled={!hasChanges}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h2>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                      {/* Email Notifications */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Email Notifications</div>
                            <div className="text-xs text-gray-600">Receive email updates about your assessments</div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleToggleNotification('email')}
                          className={`relative w-11 h-6 rounded-full transition-colors ${
                            notifications.email ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              notifications.email ? 'translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Push Notifications */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Bell className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Push Notifications</div>
                            <div className="text-xs text-gray-600">Receive push notifications on your devices</div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleToggleNotification('push')}
                          className={`relative w-11 h-6 rounded-full transition-colors ${
                            notifications.push ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              notifications.push ? 'translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* SMS Notifications */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">SMS Notifications</div>
                            <div className="text-xs text-gray-600">Receive text messages for important updates</div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleToggleNotification('sms')}
                          className={`relative w-11 h-6 rounded-full transition-colors ${
                            notifications.sms ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              notifications.sms ? 'translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Notification Types</h3>
                    <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
                      {[
                        { label: 'Assessment Completed', description: 'When a candidate completes an assessment' },
                        { label: 'New Candidate Invited', description: 'When you invite a new candidate' },
                        { label: 'Plagiarism Detected', description: 'When potential plagiarism is detected' },
                        { label: 'Weekly Summary', description: 'Weekly report of your assessment activity' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.label}</div>
                            <div className="text-xs text-gray-600">{item.description}</div>
                          </div>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Security */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Security Settings</h2>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                      {/* Change Password */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Change Password</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              New Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Two-Factor Authentication */}
                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-xs text-gray-600 mt-1">Add an extra layer of security to your account</p>
                          </div>
                          <button 
                            onClick={handleEnable2FA}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
                          >
                            Enable 2FA
                          </button>
                        </div>
                      </div>

                      {/* Active Sessions */}
                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Active Sessions</h3>
                        <div className="space-y-3">
                          {[
                            { device: 'Chrome on Windows', location: 'San Francisco, CA', time: 'Current session' },
                            { device: 'Safari on iPhone', location: 'San Francisco, CA', time: '2 hours ago' },
                          ].map((session, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="text-sm font-medium text-gray-900">{session.device}</div>
                                <div className="text-xs text-gray-600">{session.location} • {session.time}</div>
                              </div>
                              {idx !== 0 && (
                                <button className="text-xs text-red-600 hover:text-red-700 font-medium">
                                  Revoke
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                          Cancel
                        </button>
                        <button 
                          onClick={handleUpdatePassword}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Team */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Team Members</h2>
                    <button 
                      onClick={handleInviteMember}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
                    >
                      Invite Member
                    </button>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Name</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Email</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Role</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Sarah Jenkins', email: 'sarah@quizsync.com', role: 'Admin', status: 'Active' },
                          { name: 'John Doe', email: 'john@quizsync.com', role: 'Member', status: 'Active' },
                          { name: 'Jane Smith', email: 'jane@quizsync.com', role: 'Member', status: 'Pending' },
                        ].map((member, idx) => (
                          <tr key={idx} className="border-b border-gray-100">
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={`https://i.pravatar.cc/150?img=${idx + 5}`} 
                                  alt={member.name}
                                  className="w-8 h-8 rounded-full"
                                />
                                <span className="text-sm font-medium text-gray-900">{member.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-sm text-gray-600">{member.email}</td>
                            <td className="py-4 px-4">
                              <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                                <option>{member.role}</option>
                                <option>Admin</option>
                                <option>Member</option>
                                <option>Viewer</option>
                              </select>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {member.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <button 
                                onClick={() => handleRemoveMember(member.name)}
                                className="text-sm text-red-600 hover:text-red-700 font-medium"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Billing */}
              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-bold text-gray-900">Billing & Subscription</h2>

                  {/* Current Plan */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">Current Plan</h3>
                        <p className="text-sm text-gray-600 mt-1">Professional Plan</p>
                      </div>
                      <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg text-sm font-semibold hover:bg-indigo-50">
                        Upgrade Plan
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Monthly Price</div>
                        <div className="text-lg font-bold text-gray-900">$99/mo</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Billing Cycle</div>
                        <div className="text-lg font-bold text-gray-900">Monthly</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Next Billing Date</div>
                        <div className="text-lg font-bold text-gray-900">Dec 1, 2023</div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-semibold text-gray-900">Payment Method</h3>
                      <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                        Update
                      </button>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                        VISA
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</div>
                        <div className="text-xs text-gray-600">Expires 12/2025</div>
                      </div>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Billing History</h3>
                    <div className="space-y-3">
                      {[
                        { date: 'Nov 1, 2023', amount: '$99.00', status: 'Paid', invoice: 'INV-001' },
                        { date: 'Oct 1, 2023', amount: '$99.00', status: 'Paid', invoice: 'INV-002' },
                        { date: 'Sep 1, 2023', amount: '$99.00', status: 'Paid', invoice: 'INV-003' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.date}</div>
                              <div className="text-xs text-gray-600">{item.invoice}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm font-semibold text-gray-900">{item.amount}</div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                              {item.status}
                            </span>
                            <button 
                              onClick={() => handleDownloadInvoice(item.invoice)}
                              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Integrations */}
              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-bold text-gray-900">Integrations</h2>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Slack', description: 'Get notifications in Slack', icon: '💬', connected: true },
                      { name: 'GitHub', description: 'Sync with GitHub repositories', icon: '🐙', connected: false },
                      { name: 'Google Calendar', description: 'Schedule assessments', icon: '📅', connected: true },
                      { name: 'Zapier', description: 'Connect with 1000+ apps', icon: '⚡', connected: false },
                    ].map((integration, idx) => (
                      <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                              {integration.icon}
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900">{integration.name}</h3>
                              <p className="text-xs text-gray-600 mt-0.5">{integration.description}</p>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleToggleIntegration(integration.name, integration.connected)}
                          className={`w-full px-4 py-2 rounded-lg text-sm font-semibold ${
                          integration.connected
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}>
                          {integration.connected ? 'Disconnect' : 'Connect'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
