import DownloadButtons from './DownloadButtons';
import Link from 'next/link';

export default function Footer() {
  // Control which buttons to show
  const showStoreButtons = false; // Set to true when app is uploaded to stores

  return (
    <footer className="text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-20">
          {/* Company Info */}          
          <div className="text-center">            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent font-orbitron tracking-wider uppercase">
              Autopilot Browser
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-orbitron">
              The future is here. 
              Get ready for AI assistants surf the web on your behalf.
            </p>
            
            {/* Download Buttons */}
            <div className="mb-8">
              <DownloadButtons 
                showStoreButtons={showStoreButtons}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-orbitron">
              © 2025 Autopilot Browser. All rights reserved.
            </p>            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200 font-orbitron">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200 font-orbitron">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
