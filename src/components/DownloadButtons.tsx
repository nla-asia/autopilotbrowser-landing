"use client";

import { useState, useEffect } from 'react';

interface DownloadButtonsProps {
  showStoreButtons?: boolean;
  className?: string;
}

export default function DownloadButtons({ 
  showStoreButtons = false, 
  className = "flex flex-col sm:flex-row gap-4 justify-center" 
}: DownloadButtonsProps) {  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasEarlyAccess, setHasEarlyAccess] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  // Check localStorage on component mount
  useEffect(() => {
    const earlyAccessStatus = localStorage.getItem('earlyAccessStatus');
    if (earlyAccessStatus === 'registered') {
      setHasEarlyAccess(true);
    }    // Add global function for testing/debugging
    if (typeof window !== 'undefined') {
      (window as typeof window & { resetEarlyAccessStatus: () => void }).resetEarlyAccessStatus = () => {
        localStorage.removeItem('earlyAccessStatus');
        setHasEarlyAccess(false);
        console.log('Early access status reset');
      };
    }
  }, []);
  const handleEarlyAccessClick = () => {
    if (hasEarlyAccess) {
      setMessage({ type: 'success', text: 'You\'re already registered for early access! We\'ll notify you when it\'s available.' });
      setShowDialog(true);
      return;
    }
    setMessage(null); // Clear any previous messages
    setShowDialog(true);
  };
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null); // Clear any previous messages
    
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timezone
        })
      });      const data = await response.json();

      if (!response.ok) {
        const errorMessage = (data as { error?: string })?.error || 'Failed to submit early access request';
        throw new Error(errorMessage);
      }      setIsSubmitting(false);
      setShowDialog(false);
      setName('');
      setEmail('');
        // Store status in localStorage
      localStorage.setItem('earlyAccessStatus', 'registered');
      setHasEarlyAccess(true);
      
      // Show success message
      setMessage({ type: 'success', text: 'Thank you! We\'ll notify you when early access is available.' });
      
      // Auto-close dialog after 2 seconds
      setTimeout(() => {
        setShowDialog(false);
        setName('');
        setEmail('');
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.error('Error submitting early access request:', error);
      setIsSubmitting(false);
      
      // Show user-friendly error messages
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes('temporarily unavailable') || 
            error.message.includes('Unable to connect')) {
          errorMessage = 'Our service is temporarily unavailable. Please try again in a few minutes.';
        } else if (error.message.includes('already registered')) {
          errorMessage = 'This email is already registered for early access. Thank you for your interest!';
        } else if (error.message.includes('Invalid email')) {
          errorMessage = 'Please enter a valid email address.';
        } else if (error.message.includes('required')) {
          errorMessage = 'Please fill in all required fields.';
        } else {
          errorMessage = error.message;
        }      }
      
      setMessage({ type: 'error', text: errorMessage });
    }
  };  const closeDialog = () => {
    setShowDialog(false);
    setName('');
    setEmail('');
    setMessage(null); // Clear messages when closing
  };
  return (
    <div className={className}>
      {showStoreButtons ? (
        <>
          <button className="group bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-700/50 font-orbitron min-w-[180px]">
            <span className="flex items-center justify-start">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg leading-none">App Store</div>
              </div>
            </span>
          </button>
          <button className="group bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-700/50 font-orbitron min-w-[180px]">
            <span className="flex items-center justify-start">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-lg leading-none">Google Play</div>
              </div>
            </span>
          </button>
        </>      ) : (        <button 
          onClick={handleEarlyAccessClick}
          className={`group ${hasEarlyAccess 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-black hover:bg-gray-900'} text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-700/50 font-orbitron`}
        >
          <span className="flex items-center justify-center">
            {hasEarlyAccess ? (
              <>
                ✓ Early Access Registered
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </>
            ) : (
              <>
                Get Early Access
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </span>
        </button>
      )}

      {/* Early Access Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700/50 shadow-2xl">            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Get Early Access</h3>
              <p className="text-gray-400 font-orbitron">Be the first to experience the future of browsing</p>
            </div>
            
            {/* Message Display */}
            {message && (
              <div className={`mb-4 p-4 rounded-lg border font-orbitron ${
                message.type === 'success' 
                  ? 'bg-green-900/30 border-green-500/50 text-green-300' 
                  : 'bg-red-900/30 border-red-500/50 text-red-300'
              }`}>
                <div className="flex items-center">
                  {message.type === 'success' ? (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className="text-sm">{message.text}</span>
                </div>
              </div>
            )}              <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-orbitron"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-orbitron"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200 font-orbitron"
                >
                  Cancel
                </button>                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#00D4FF] via-[#9333EA] to-[#FF0080] hover:opacity-90 text-white rounded-lg font-semibold transition-opacity duration-200 font-orbitron disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
