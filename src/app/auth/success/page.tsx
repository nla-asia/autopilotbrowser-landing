import { Suspense } from 'react';
import Link from 'next/link';

function AuthSuccessContent() {
  // This will only run on the client side
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const token = searchParams.get('token');

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
            You have been successfully authenticated. Token received.
          </p>

          {isDevelopment && (
            <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-slate-200 mb-2">Development Mode</h3>
              <p className="text-xs text-slate-400 mb-2">
                Copy this authentication token and paste it in your running Electron app:
              </p>
              <div className="bg-slate-900 rounded p-2 text-xs font-mono text-slate-300 break-all">
                {token && `Token: ${token}`}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go to Home
            </Link>

            {isDevelopment && (
              <p className="text-xs text-slate-400">
                Make sure your Electron app is running and registered as the protocol handler.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <AuthSuccessContent />
    </Suspense>
  );
}
