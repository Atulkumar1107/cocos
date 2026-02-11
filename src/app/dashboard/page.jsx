"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const { isLoggedIn, isLoading, logout, user } = useAuth();

  // 🔐 Protect dashboard
 useEffect(() => {
  if (!isLoading && !isLoggedIn) {
    router.push("/login?redirect=/dashboard");
  }

  if (!isLoading && isLoggedIn && user?.role === "admin") {
    router.push("/admin/dashboard");
  }
}, [isLoggedIn, isLoading, user, router]);


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (!isLoggedIn) return null;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="p-4 space-y-4">
          {/* Welcome */}
          <div className="bg-white rounded-xl shadow-lg p-6 border flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
              <p className="text-gray-600">
                You are logged in using dashboard password
              </p>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <Stat title="Total Orders" value="0" />
            <Stat title="Bookings" value="0" />
            <Stat title="Wishlist" value="0" />
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <QuickLink href="/tours" emoji="🛒" title="Explore Tours" />
              <QuickLink href="/events" emoji="📅" title="Browse Events" />
              <QuickLink href="/dining" emoji="🍽️" title="View Dining" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

/* Helper components */
const Stat = ({ title, value }) => (
  <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl p-6">
    <p className="text-sm opacity-80">{title}</p>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const QuickLink = ({ href, emoji, title }) => (
  <Link
    href={href}
    className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-center border"
  >
    <div className="text-3xl mb-2">{emoji}</div>
    <h3 className="font-semibold">{title}</h3>
  </Link>
);
