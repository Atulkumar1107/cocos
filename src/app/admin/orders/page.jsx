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

export default function AdminOrders() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login?redirect=/admin/orders');
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
                  <BreadcrumbPage>Orders</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Manage Orders</h1>
              <div className="flex gap-2">
                <select className="px-4 py-2 border rounded-lg">
                  <option>All Orders</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Order ID</th>
                    <th className="text-left p-3 font-semibold">Customer</th>
                    <th className="text-left p-3 font-semibold">Date</th>
                    <th className="text-left p-3 font-semibold">Total</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-mono text-sm">#ORD{1000 + i}</td>
                      <td className="p-3">
                        <div>
                          <p className="font-semibold">Customer {i}</p>
                          <p className="text-xs text-gray-600">customer{i}@example.com</p>
                        </div>
                      </td>
                      <td className="p-3 text-sm">Dec {i}, 2024</td>
                      <td className="p-3 font-semibold">${(Math.random() * 500 + 50).toFixed(2)}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          i % 4 === 0 ? 'bg-green-100 text-green-700' :
                          i % 4 === 1 ? 'bg-yellow-100 text-yellow-700' :
                          i % 4 === 2 ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {i % 4 === 0 ? 'Completed' :
                           i % 4 === 1 ? 'Pending' :
                           i % 4 === 2 ? 'Processing' :
                           'Cancelled'}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button className="text-gray-600 hover:text-gray-800">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}