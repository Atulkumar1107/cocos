"use client";

import * as React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Calendar,
  Map,
  Heart,
  MapPin,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Orders",
      url: "/dashboard",
      icon: ShoppingBag,
    },
    {
      title: "My Bookings",
      url: "/dashboard",
      icon: Calendar,
    },
    {
      title: "My Itineraries",
      url: "/dashboard",
      icon: Map,
    },
    {
      title: "Wishlist",
      url: "/dashboard",
      icon: Heart,
    },
    {
      title: "Addresses",
      url: "/dashboard",
      icon: MapPin,
    },
    {
      title: "Profile",
      url: "/dashboard",
      icon: User,
    },
  ];

  const getUserInitials = () => {
    if (!user) return "U";
    const firstInitial = user.firstName?.[0] || "";
    const lastInitial = user.lastName?.[0] || "";
    return (firstInitial + lastInitial).toUpperCase();
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            C
          </div>
          <div className="flex-1 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold">My Account</p>
            <p className="text-xs text-muted-foreground">Cocos Islands</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.url}
                tooltip={item.title}
              >
                <Link href={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
            {getUserInitials()}
          </div>
          <div className="flex-1 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="group-data-[collapsible=icon]:hidden text-muted-foreground hover:text-red-600 transition"
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}