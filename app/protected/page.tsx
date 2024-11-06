export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to your dashboard
        </p>
      </div>
      <div className="grid gap-6">
        {/* Add your protected content here */}
      </div>
    </div>
  );
}
