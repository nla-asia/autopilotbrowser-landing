import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import TopNav from './TopNav';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}


export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');
 
  if (!token || !token.value || token.value.trim() === '') {
    redirect('/auth/login');
  }


  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <TopNav />
      <main className="ml-64 pt-16">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
