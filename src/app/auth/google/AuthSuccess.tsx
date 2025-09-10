'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function AuthSuccess({ token }: { token: string }) {
  
  useEffect(() => {
    const electronAppURL = `autopilotbrowser://auth/callback?code=${token}`;
    
    // Try to open the Electron app after a short delay
    const timer = setTimeout(() => {
      window.location.href = electronAppURL;
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [token]);


  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-slate-700">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Title */}
          <h1 className="text-2xl font-bold text-white mb-4">
            Authentication Successful!
          </h1>

          {/* Success Message */}
          <p className="text-slate-300 mb-6 leading-relaxed">
            You have been successfully authenticated. Opening Autopilot Browser...
          </p>

          {/* Loading Animation */}
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          </div>


          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {
                const electronAppURL = `autopilotbrowser://auth/callback?code=${token}`;
                window.location.href = electronAppURL;
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Try Opening App Again
            </button>

            <Link
              href="/"
              className="inline-block w-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
