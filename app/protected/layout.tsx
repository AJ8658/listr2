import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Search, 
  Bookmark, 
  PlusCircle, 
  List, 
  Settings, 
  Table 
} from "lucide-react";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarProvider>
        <Sidebar className="border-r" side="left">
          <SidebarContent>
            <div className="flex flex-col gap-4 py-4">
              <div className="px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-semibold text-xl">Listr</span>
                </Link>
                <SidebarTrigger />
              </div>
              <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/protected" className="w-full">
                <SidebarMenuButton tooltip="Dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </Link>
                </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/protected/search" className="w-full">
                <SidebarMenuButton tooltip="Search">
                  <Search />
                  <span>Search</span>
                </SidebarMenuButton>
              </Link>
                </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/protected/saved" className="w-full">
                <SidebarMenuButton tooltip="Saved">
                  <Bookmark />
                  <span>Saved</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/protected/create" className="w-full">
                <SidebarMenuButton tooltip="Create">
                  <PlusCircle />
                  <span>Create Listing</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/protected/manage" className="w-full">
                <SidebarMenuButton tooltip="Manage">
                  <List />
                  <span>Manage Listings</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/protected/settings" className="w-full">
                <SidebarMenuButton tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
        </Sidebar>
        {children}
      </SidebarProvider>
    </div>
  );
}
