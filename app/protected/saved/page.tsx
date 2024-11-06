import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SavedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 flex flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Saved Listings</h1>
        <p className="text-gray-500">
          View and manage your bookmarked listings
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example saved listing card */}
          <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
            <h3 className="font-medium mb-2">Example Listing</h3>
            <p className="text-sm text-gray-500 mb-4">This is a placeholder for a saved listing. Real listings will appear here when you bookmark them.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">$0.00</span>
              <button className="text-sm text-blue-500 hover:text-blue-600">Remove</button>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-center">You haven't saved any listings yet</p>
      </div>
    </div>
  );
}
