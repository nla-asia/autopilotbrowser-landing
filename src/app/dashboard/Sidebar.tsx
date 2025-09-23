"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { name: 'Browsers', href: '/dashboard/browsers', icon: '🌐' },
  { name: 'Workflows', href: '/dashboard/workflows', icon: '⚡' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-52 bg-slate-900 border-r border-slate-700">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-3 border-b border-slate-700">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" width={36} height={36} alt="Autopilot Browser Logo" />
            </div>
            <span className="text-white font-semibold">Autopilot Browser</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* API Key Menu */}
        <div className="p-2 border-t border-slate-700">
          <Link
            href="/dashboard/api-key"
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              pathname === '/dashboard/api-key'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="mr-2 text-lg">🔑</span>
            API Key
          </Link>
        </div>
      </div>
    </div>
  );
}