'use client';

import { useState } from 'react';
import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return '...';
    return fullName.split(' ')[0];
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page after logout
      window.location.href = '/auth/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-3">
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">{getGreeting()}, {getFirstName(user?.name)}!</span>
          <span className="text-slate-400 text-xs">{user?.email || ''}</span>
        </div>
        <button
          onClick={toggleMenu}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
          title="User menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg border border-slate-700 z-20">
            <div className="py-1">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}