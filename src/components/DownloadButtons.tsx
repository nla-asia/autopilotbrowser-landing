"use client";

import { useState } from 'react';

interface DownloadButtonsProps {
  showStoreButtons?: boolean;
  className?: string;
}

export default function DownloadButtons({ 
  showStoreButtons = false, 
  className = "flex flex-col sm:flex-row gap-4 justify-center" 
}: DownloadButtonsProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEarlyAccessClick = () => {
    setShowDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add your API call here to save email and city
    console.log('Early access signup:', { email, city });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowDialog(false);
    setEmail('');
    setCity('');
    
    // Show success message (you can customize this)
    alert('Thank you! We\'ll notify you when early access is available.');
  };

  const closeDialog = () => {
    setShowDialog(false);
    setEmail('');
    setCity('');
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
        </>      ) : (
        <button 
          onClick={handleEarlyAccessClick}
          className="group bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-gray-700/50 font-orbitron"
        >
          <span className="flex items-center justify-center">
            Get Early Access
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      )}

      {/* Early Access Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Get Early Access</h3>
              <p className="text-gray-400 font-orbitron">Be the first to experience the future of browsing</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron">
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
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2 font-orbitron">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-orbitron"
                  placeholder="Enter your city"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200 font-orbitron"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-[#00D4FF] via-[#9333EA] to-[#FF0080] hover:opacity-90 text-white rounded-lg font-semibold transition-opacity duration-200 font-orbitron disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
