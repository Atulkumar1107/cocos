"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/context/AuthContext";
import { AdminSidebar } from "@/components/admin-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading } = useAuth();

  // Protection: Redirect if not logged in or not admin
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login?redirect=/admin/dashboard');
    }
    if (!isLoading && isLoggedIn && user?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [isLoggedIn, isLoading, user, router]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not admin, return null (will redirect)
  if (!isLoggedIn || !user || user.role !== 'admin') {
    return null;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/admin/dashboard">
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Welcome Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-gray-600">Admin Dashboard Overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8" />
                <TrendingUp className="h-5 w-5" />
              </div>
              <p className="text-blue-100 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold mt-2">1,234</p>
              <p className="text-xs text-blue-100 mt-2">+12% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <ShoppingBag className="h-8 w-8" />
                <TrendingUp className="h-5 w-5" />
              </div>
              <p className="text-green-100 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold mt-2">5,678</p>
              <p className="text-xs text-green-100 mt-2">+8% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8" />
                <TrendingUp className="h-5 w-5" />
              </div>
              <p className="text-purple-100 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">$45,890</p>
              <p className="text-xs text-purple-100 mt-2">+15% from last month</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <ShoppingBag className="h-8 w-8" />
                <TrendingUp className="h-5 w-5" />
              </div>
              <p className="text-orange-100 text-sm font-medium">Pending Orders</p>
              <p className="text-3xl font-bold mt-2">23</p>
              <p className="text-xs text-orange-100 mt-2">Needs attention</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Users</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                      U{i}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">User {i}</p>
                      <p className="text-xs text-gray-600">user{i}@example.com</p>
                    </div>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Order #{1000 + i}</p>
                      <p className="text-xs text-gray-600">Customer {i}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">${(Math.random() * 500).toFixed(2)}</p>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}