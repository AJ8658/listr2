import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { updateListing } from "@/app/actions/listings";

export default async function EditListingPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch the listing
  const { data: listing, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single();

  if (error || !listing) {
    return redirect("/protected/manage");
  }

  async function edit(formData: FormData) {
    'use server'
    await updateListing(params.id, formData);
    redirect('/protected/manage');
  }

  return (
    <div className="flex-1 flex flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Edit Listing</h1>
        <p className="text-gray-500">
          Update your listing information
        </p>
      </div>
      <div className="max-w-2xl">
        <form action={edit} className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={listing.title}
              placeholder="Enter listing title"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              defaultValue={listing.description}
              placeholder="Describe your listing"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                required
                defaultValue={listing.price}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="images" className="text-sm font-medium">
              Images
            </label>
            <div className="border-2 border-dashed rounded-md p-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </span>
              </div>
              <input
                id="images"
                name="images"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
            <a
              href="/protected/manage"
              className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
