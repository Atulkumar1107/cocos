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

export default function AdminBookings() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login?redirect=/admin/bookings');
    }
    if (!isLoading && isLoggedIn && user?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [isLoggedIn, isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isLoggedIn || !user || user.role !== 'admin') {
    return null;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Bookings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
              <select className="px-4 py-2 border rounded-lg">
                <option>All Bookings</option>
                <option>Upcoming</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-sm font-semibold">#BOOK{1000 + i}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          i % 3 === 0 ? 'bg-green-100 text-green-700' :
                          i % 3 === 1 ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {i % 3 === 0 ? 'Confirmed' :
                           i % 3 === 1 ? 'Pending' :
                           'Cancelled'}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">Tour Booking {i}</h3>
                      <p className="text-sm text-gray-600 mb-2">Customer: customer{i}@example.com</p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>📅 Dec {10 + i}, 2024</span>
                        <span>⏰ 10:00 AM</span>
                        <span>👥 {i + 1} guests</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">${(Math.random() * 200 + 50).toFixed(2)}</p>
                      <div className="flex gap-2 mt-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}