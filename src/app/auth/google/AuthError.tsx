'use client';

import Link from 'next/link';

export default function AuthError({ error }: { error: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-slate-700">
        <div className="text-center">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          {/* Error Title */}
          <h1 className="text-2xl font-bold text-white mb-4">
            Authentication Error
          </h1>

          {/* Error Message */}
          <p className="text-slate-300 mb-6 leading-relaxed">
            {decodeURIComponent(error)}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/auth/google"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Try Again
            </Link>

            <Link
              href="/auth"
              className="inline-block w-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Back to Login
            </Link>

            <Link
              href="/"
              className="inline-block w-full bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
