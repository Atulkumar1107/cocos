"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "./lib/redux/ReduxProvider";
import { AuthProvider } from "./lib/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const romie = localFont({
  src: "../../public/romie-regular.woff2",
  variable: "--font-romie",
  display: "swap",
});

const manrope = localFont({
  src: "../../public/manrope-medium.woff2",
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // List of pages without header/footer
  const authPages = ['/login', '/register', '/forgot-password', '/verify-otp', '/reset-password'];
  const isAuthPage = authPages.includes(pathname);
  const isDashboardPage = pathname?.startsWith('/dashboard');
  const isAdminPage = pathname?.startsWith('/admin');
  
  // Hide header/footer for auth pages, customer dashboard, AND admin dashboard
  const hideHeaderFooter = isAuthPage || isDashboardPage || isAdminPage;

  return (
    <html lang="en">
      <body className={`${romie.variable} ${manrope.variable} antialiased`}>
        <AuthProvider>
          <ReduxProvider>
            {!hideHeaderFooter && <Header />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
            <Toaster position="top-right" />
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}