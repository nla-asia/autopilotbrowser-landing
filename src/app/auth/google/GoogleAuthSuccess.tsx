'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function AuthSuccess({ code, redirectUri }: { code: string; redirectUri: string }) {
  const router = useRouter();
  const { loginWithGoogle, user, login } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [initiator, setInitiator] = useState<string | null>('web');
  

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Check if this is a web initiator
    const ini = localStorage.getItem('oauth_initiator');
    setInitiator(ini);

    async function handleGoogleLogin() {
      setLoading(true);
      setError(null);
      const result = await loginWithGoogle(code, redirectUri);
      setLoading(false);
      if (!result.success) {
        setError(result.error || 'Google login failed');
        return;
      }
      // Store user data in localStorage
      if (user) {
        login(user);
      }

      if (initiator === 'web') {
        localStorage.removeItem('oauth_initiator');
        router.push('/dashboard');
        return;
      }
      // For desktop initiators, try to open the Electron app
      const electronAppURL = `autopilotbrowser://auth/callback?code=${code}`;
      timer = setTimeout(() => {
        window.location.href = electronAppURL;
      }, 1500);
    }
    handleGoogleLogin();
    return () => timer && clearTimeout(timer);
  }, [code, redirectUri]);


  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-slate-700">
        <div className="text-center">
          {/* Success or Error Icon */}
          <div className={`mx-auto w-16 h-16 ${error ? 'bg-red-500/20' : 'bg-green-500/20'} rounded-full flex items-center justify-center mb-6`}>
            <svg
              className={`w-8 h-8 ${error ? 'text-red-400' : 'text-green-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {error ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              )}
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            {error ? 'Authentication Failed' : 'Authentication Successful!'}
          </h1>

          <p className="text-slate-300 mb-6 leading-relaxed">
            {error
              ? `Error: ${error}`
              : loading
                ? 'Authenticating with Google. Please wait...'
                : 'You have been successfully authenticated. Redirecting...'}
          </p>

          {/* Loading Animation */}
          {loading && (
            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            </div>
          )}

          {/* Action Buttons: only show when not loading and initiator is not 'web' */}
          {!loading && initiator !== 'web' && (
            <div className="space-y-3">
              <button
                onClick={() => {
                  const electronAppURL = `autopilotbrowser://auth/callback?code=${code}`;
                  window.location.href = electronAppURL;
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                disabled={loading}
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
          )}
        </div>
      </div>
    </div>
  );
}
