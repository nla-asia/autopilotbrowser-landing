import UserMenu from './UserMenu';

export default function TopNav() {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="flex items-center justify-between h-16 px-6 ml-64">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
        </div>
        <UserMenu />
      </div>
    </header>
  );
}
