import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Autopilot Browser. All rights reserved.
            </p>            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200">
                About
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#60A5FA] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
