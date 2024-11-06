import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ManageListingsPage() {
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
        <h1 className="text-2xl font-semibold">Manage Listings</h1>
        <p className="text-gray-500">
          View and manage your created listings
        </p>
      </div>
      <div className="grid gap-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Views</th>
                <th className="text-left py-3 px-4">Created</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example listing row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded"></div>
                    <span className="font-medium">Example Listing</span>
                  </div>
                </td>
                <td className="py-3 px-4">$0.00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4">Just now</td>
                <td className="py-3 px-4">
                  <div className="flex justify-end gap-2">
                    <button className="text-sm text-blue-500 hover:text-blue-600">
                      Edit
                    </button>
                    <button className="text-sm text-red-500 hover:text-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-center">You haven't created any listings yet</p>
      </div>
    </div>
  );
}
