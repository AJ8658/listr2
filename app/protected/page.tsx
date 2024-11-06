import { SearchIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gradient">Dashboard</h1>
        <p className="text-slate-400">
          Welcome back to your dashboard
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards */}
        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <SearchIcon className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Total Views</p>
              <h3 className="text-2xl font-bold text-slate-200">2,834</h3>
            </div>
          </div>
        </div>
        {/* Add more stat cards... */}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Content sections */}
        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          {/* Add content */}
        </div>
        
        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          {/* Add content */}
        </div>
      </div>
    </div>
  );
}
