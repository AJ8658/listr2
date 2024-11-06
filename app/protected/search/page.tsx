export default function SearchPage() {
  return (
    <div className="flex-1 flex flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Search</h1>
        <p className="text-gray-500">
          Find what you're looking for
        </p>
      </div>
      <div className="grid gap-6">
        <div className="rounded-lg border p-4">
          <input 
            type="search" 
            placeholder="Search listings..."
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid gap-4">
          {/* Search results will appear here */}
          <p className="text-gray-500 text-center">Enter a search term to begin</p>
        </div>
      </div>
    </div>
  );
}
