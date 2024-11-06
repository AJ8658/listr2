import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Search, Bookmark, PlusCircle, List, Settings } from "lucide-react";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Dashboard">
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Search">
                <Search />
                <span>Search</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Saved">
                <Bookmark />
                <span>Saved</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Create">
                <PlusCircle />
                <span>Create Listing</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Manage">
                <List />
                <span>Manage Listings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 flex flex-col gap-6 px-4 py-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, {user.email}!
            </p>
          </div>
          <div className="grid gap-6">
            {/* Add your protected content here */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
