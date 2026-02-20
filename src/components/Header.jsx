"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "@/app/lib/redux/slices/cartSlice";
import { useAuth } from "@/app/lib/context/AuthContext";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Get current pathname
  const pathname = usePathname();

  // Get auth state
  const { isLoggedIn, logout, user } = useAuth();

  const getUserInitials = () => {
    if (!user) return "";
    return `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase();
  };

  const isSaltysPage = pathname?.startsWith(
    "/dining/saffron-shores-collective",
  );
  const isSurferPage = pathname?.startsWith("/dining/saffron-sunset-surf");

  // Get cart item count from Redux
  const cartItemCount = useSelector(selectCartItemCount);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    {
      title: "About Us",
      hasDropdown: true,
      href: "/about",
      items: [
        { title: "Wild Coconut Estate", href: "/about/wild-coconut-estate" },
          { title: "Group Educational Tours", href: "/about/group-educational-tours" },
      ],
    },
    {
      title: "Dining",
      hasDropdown: true,
      href: "/dining",
      items: [
        {
          title: "Saffron Shores Collective",
          href: "/dining/saffron-shores-collective",
        },
        {
          title: "Saffron Sunset Surf",
          href: "/dining/saffron-sunset-surf",
        },
        { title: "Private Catering", href: "/dining/private-catering" },
      ],
    },
    {
      title: "Tours & Experiences",
      hasDropdown: true,
      href: "/tours",
      items: [
        {
          title: "Wild Coconut Discovery Centre",
          href: "/tours/wild-coconut-discovery",
        },
        { title: "Home Island Cultural Tour", href: "/tours/cultural-tour" },
        { title: "Plan Your Itinerary", href: "/tours/plan-your-itinerary" },
        {
          title: "Workshops",
          href: "/tours/eco-workshops",
          subItems: [
            {
              title: "Sourdough bread making",
              href: "/tours/eco-workshops/sourdough-bread-making",
            },
            {
              title: "Coconut oil making",
              href: "/tours/eco-workshops/coconut-oil-making",
            },
            {
              title: "Coconut chip making",
              href: "/tours/eco-workshops/coconut-chip-making",
            },
            {
              title: "Coconut cream making",
              href: "/tours/eco-workshops/coconut-cream-making",
            },
          ],
        },
      ],
    },
    {
      title: "Fresh Produce",
      hasDropdown: false,
      href: "/fresh-produce",
    },
    {
      title: "Blogs",
      hasDropdown: false,
      href: "/blogs",
    },
    {
      title: "Events",
      hasDropdown: false,
      href: "/events",
    },
    {
      title: "Contact Us",
      hasDropdown: false,
      href: "/contact-us",
    },
  ];

  // Text color changes based on scroll
  const textColorClass = isFixed ? "text-gray-900" : "text-white";
  const borderColorClass = isFixed ? "border-gray-900" : "border-white";

  const toggleMobileItem = (index) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroHeight - 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  return (
    <>
      <nav
        className={`${
          isFixed
            ? "fixed top-0 left-0 right-0 bg-[#f2edea] shadow-lg py-2"
            : "absolute top-0 left-0 right-0 bg-transparent py-5"
        } z-50 px-8 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={
                isSaltysPage
                  ? "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520722/ChatGPT_Image_Feb_19_2026_10_35_03_PM_kb4vok.png"
                  : isSurferPage
                    ? "https://res.cloudinary.com/dwau5poqz/image/upload/v1771521170/ChatGPT_Image_Feb_19_2026_10_42_39_PM_ncmy16.png"
                    : "https://res.cloudinary.com/dwau5poqz/image/upload/v1771520475/ChatGPT_Image_Feb_19_2026_10_31_01_PM_dn7luk.png"
              }
              alt={
                isSaltysPage
                  ? "Saffron Shores Collective"
                  : isSurferPage
                    ? "Saffron Sunset Surf"
                    : "Saffron Sands Collective"
              }
              width={80}
              height={80}
              quality={100}
              unoptimized
              className="rounded-full"
            />
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={`${textColorClass} flex items-center gap-1 hover:opacity-75 transition-opacity duration-300`}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.items?.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                          {subItem.subItems && (
                            <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                              {subItem.subItems.map(
                                (nestedItem, nestedIndex) => (
                                  <Link
                                    key={nestedIndex}
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {nestedItem.title}
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${textColorClass} hover:opacity-75 transition-opacity duration-300`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Profile & Cart Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Profile Icon/Avatar */}
            {isLoggedIn ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className={`flex items-center gap-2 ${textColorClass}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 ${isProfileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className={`${textColorClass} hover:opacity-75 transition-opacity`}
              >
                <User className="h-6 cursor-pointer w-6" />
              </Link>
            )}

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`${textColorClass} hover:opacity-75 transition-opacity relative`}
            >
              <ShoppingCart className="h-6 cursor-pointer w-6" />
              {isClient && cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile - Profile, Cart & Menu Buttons */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Profile Icon/Avatar */}
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className={`${textColorClass}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              </Link>
            ) : (
              <Link href="/login" className={`${textColorClass}`}>
                <User className="h-6 cursor-pointer w-6" />
              </Link>
            )}

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`${textColorClass} relative`}
            >
              <ShoppingCart className="h-6 cursor-pointer w-6" />
              {isClient && cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Menu Button */}
            <button
              className={`${textColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 cursor-pointer w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-y-0 right-0 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        >
          <div className="p-6 space-y-2">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-gray-600"
              >
                <X className="h-6 cursor-pointer w-6" />
              </button>
            </div>

            {/* User Info (Mobile) */}
            {isLoggedIn && user ? (
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                    {getUserInitials()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Mobile Navigation Items */}
            {navItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <div className="w-full flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        className="flex-1 text-gray-800 hover:text-gray-600 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={() => toggleMobileItem(index)}
                        className="p-2 text-gray-800 hover:text-gray-600"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedMobileItems[index] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {expandedMobileItems[index] && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items?.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            {subItem.subItems ? (
                              <div>
                                <button
                                  onClick={() =>
                                    toggleMobileItem(`${index}-${subIndex}`)
                                  }
                                  className="w-full flex items-center justify-between text-gray-600 hover:text-gray-800 py-1 text-sm"
                                >
                                  <span>{subItem.title}</span>
                                  <ChevronDown
                                    className={`h-3 w-3 transition-transform duration-200 ${
                                      expandedMobileItems[
                                        `${index}-${subIndex}`
                                      ]
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {expandedMobileItems[
                                  `${index}-${subIndex}`
                                ] && (
                                  <div className="ml-4 mt-2 space-y-2">
                                    {subItem.subItems.map(
                                      (nestedItem, nestedIndex) => (
                                        <Link
                                          key={nestedIndex}
                                          href={nestedItem.href}
                                          className="block text-gray-500 hover:text-gray-700 py-1 text-sm"
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                        >
                                          {nestedItem.title}
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block text-gray-600 hover:text-gray-800 py-1 text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-800 hover:text-gray-600 py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Right Side Items */}
            <div className="pt-4 border-t border-gray-200 space-y-4 mt-4">
              {/* Dashboard & Logout (if logged in) */}
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 w-full"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center text-gray-800 hover:text-gray-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 cursor-pointer w-5 mr-2" />
                  Login
                </Link>
              )}

              {/* Cart */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex items-center text-gray-800 hover:text-gray-600"
              >
                <ShoppingCart className="h-5 cursor-pointer w-5 mr-2" />
                Cart {isClient && cartItemCount > 0 && `(${cartItemCount})`}
              </button>

              <Link
                href="/contact-us"
                className="block text-gray-800 hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/book"
                className="block w-full text-center px-6 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK YOUR STAY
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
