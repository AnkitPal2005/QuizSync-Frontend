'use client';

import { useState } from 'react';
import { Camera, Monitor, AlertTriangle, Eye, EyeOff, Volume2, VolumeX, Wifi, WifiOff } from 'lucide-react';

interface ProctoringPanelProps {
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

export default function ProctoringPanel({ isMinimized = false, onToggleMinimize }: ProctoringPanelProps) {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [screenShareEnabled, setScreenShareEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [connectionStatus] = useState<'connected' | 'disconnected' | 'weak'>('connected');
  const [violations] = useState<Array<{ type: string; time: string; severity: 'low' | 'medium' | 'high' }>>([
    { type: 'Face not detected', time: '2 mins ago', severity: 'medium' },
    { type: 'Multiple faces detected', time: '5 mins ago', severity: 'high' },
    { type: 'Tab switch detected', time: '8 mins ago', severity: 'medium' },
  ]);

  const [stats] = useState({
    tabSwitches: 3,
    faceDetections: 2,
    audioAnomalies: 0,
    totalViolations: 5,
  });

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={onToggleMinimize}
          className="bg-white rounded-lg shadow-xl border-2 border-indigo-600 p-4 hover:shadow-2xl transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Camera className="w-6 h-6 text-indigo-600" />
              {violations.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-gray-900">Proctoring Active</div>
              <div className="text-xs text-gray-600">{violations.length} alerts</div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-0 right-0 w-96 h-screen bg-white border-l-2 border-gray-200 shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">AI Proctoring</h3>
            <p className="text-xs text-indigo-100">Real-time monitoring</p>
          </div>
        </div>
        <button
          onClick={onToggleMinimize}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <EyeOff className="w-5 h-5" />
        </button>
      </div>

      {/* Connection Status */}
      <div className={`px-4 py-3 flex items-center justify-between border-b ${
        connectionStatus === 'connected' ? 'bg-green-50 border-green-200' :
        connectionStatus === 'weak' ? 'bg-yellow-50 border-yellow-200' :
        'bg-red-50 border-red-200'
      }`}>
        <div className="flex items-center gap-2">
          {connectionStatus === 'connected' ? (
            <Wifi className="w-4 h-4 text-green-600" />
          ) : (
            <WifiOff className="w-4 h-4 text-red-600" />
          )}
          <span className={`text-xs font-semibold ${
            connectionStatus === 'connected' ? 'text-green-700' :
            connectionStatus === 'weak' ? 'text-yellow-700' :
            'text-red-700'
          }`}>
            {connectionStatus === 'connected' ? 'Connected' :
             connectionStatus === 'weak' ? 'Weak Connection' :
             'Disconnected'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${
            connectionStatus === 'connected' ? 'bg-green-500 animate-pulse' :
            connectionStatus === 'weak' ? 'bg-yellow-500 animate-pulse' :
            'bg-red-500'
          }`}></div>
          <span className="text-xs text-gray-600">Live</span>
        </div>
      </div>

      {/* Camera Feed */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
          {/* Simulated camera feed */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-600" />
          </div>
          
          {/* Face detection overlay */}
          <div className="absolute inset-0 border-2 border-green-500 m-8 rounded-lg">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
          </div>

          {/* Status indicators */}
          <div className="absolute top-2 left-2 flex gap-2">
            <div className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 ${
              cameraEnabled ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              <Camera className="w-3 h-3" />
              {cameraEnabled ? 'ON' : 'OFF'}
            </div>
            <div className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 ${
              audioEnabled ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {audioEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
              {audioEnabled ? 'ON' : 'OFF'}
            </div>
          </div>

          {/* Face detection status */}
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-black/60 backdrop-blur-sm rounded px-3 py-2 text-white text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">Face Detection</span>
                <span className="text-green-400">✓ Active</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-300">
                <span>Confidence: 98%</span>
                <span>•</span>
                <span>1 Face Detected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setCameraEnabled(!cameraEnabled)}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
              cameraEnabled
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            <Camera className="w-4 h-4 mx-auto mb-1" />
            Camera
          </button>
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
              audioEnabled
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 mx-auto mb-1" /> : <VolumeX className="w-4 h-4 mx-auto mb-1" />}
            Audio
          </button>
          <button
            onClick={() => setScreenShareEnabled(!screenShareEnabled)}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
              screenShareEnabled
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            <Monitor className="w-4 h-4 mx-auto mb-1" />
            Screen
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h4 className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Monitoring Stats</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Tab Switches</div>
            <div className="text-2xl font-bold text-orange-600">{stats.tabSwitches}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Face Issues</div>
            <div className="text-2xl font-bold text-red-600">{stats.faceDetections}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Audio Alerts</div>
            <div className="text-2xl font-bold text-yellow-600">{stats.audioAnomalies}</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="text-xs text-gray-600 mb-1">Total Flags</div>
            <div className="text-2xl font-bold text-indigo-600">{stats.totalViolations}</div>
          </div>
        </div>
      </div>

      {/* Violations Log */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Activity Log</h4>
          <span className="text-xs text-gray-500">{violations.length} events</span>
        </div>
        
        <div className="space-y-2">
          {violations.map((violation, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border-l-4 ${
                violation.severity === 'high'
                  ? 'bg-red-50 border-red-500'
                  : violation.severity === 'medium'
                  ? 'bg-orange-50 border-orange-500'
                  : 'bg-yellow-50 border-yellow-500'
              }`}
            >
              <div className="flex items-start gap-2">
                <AlertTriangle
                  className={`w-4 h-4 mt-0.5 ${
                    violation.severity === 'high'
                      ? 'text-red-600'
                      : violation.severity === 'medium'
                      ? 'text-orange-600'
                      : 'text-yellow-600'
                  }`}
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">{violation.type}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{violation.time}</div>
                </div>
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
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>AI monitoring active</span>
        </div>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          Your session is being monitored for integrity. Any suspicious activity will be flagged and reviewed.
        </p>
      </div>
    </div>
  );
}
