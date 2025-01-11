"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Logout handler
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (response.ok) {
        // Redirect to login page
        window.location.href = "/login";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="container mx-auto pt-2">
      <nav className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          {/* Brand or Logo */}
          <div className="text-white text-xl font-bold">Admin Panel</div>

          {/* Hamburger Menu Button */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {[
              { href: "/admin", label: "Home" },
              { href: "/admin/about", label: "About" },
              { href: "/admin/service", label: "Service" },
              { href: "/admin/project", label: "Project" },
              { href: "/admin/exprience", label: "Exprience" },
              { href: "/admin/education", label: "Education" },
              { href: "/admin/skill", label: "Skill" },
              { href: "/admin/contact", label: "Contact" },
              { href: "#", label: "Logout", onClick: handleLogout },
            ].map((menu) => (
              menu.onClick ? (
                <button
                  key={menu.label}
                  onClick={menu.onClick}
                  className={`px-4 py-2 text-center border border-transparent rounded-lg transition-all duration-200 ${
                    pathname === menu.href
                      ? "bg-orange-600 text-black font-semibold"
                      : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                  }`}
                >
                  {menu.label}
                </button>
              ) : (
                <Link
                  key={menu.label}
                  href={menu.href}
                  className={`px-4 py-2 text-center border border-transparent rounded-lg transition-all duration-200 ${
                    pathname === menu.href
                      ? "bg-orange-600 text-black font-semibold"
                      : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                  }`}
                >
                  {menu.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-1 md:hidden flex flex-col space-y-1">
            {[
              { href: "/admin", label: "Home" },
              { href: "/admin/about", label: "About" },
              { href: "/admin/service", label: "Service" },
              { href: "/admin/project", label: "Project" },
              { href: "/admin/exprience", label: "Exprience" },
              { href: "/admin/education", label: "Education" },
              { href: "/admin/skill", label: "Skill" },
              { href: "/admin/contact", label: "Contact" },
              { href: "#", label: "Logout", onClick: handleLogout },
            ].map((menu) => (
              menu.onClick ? (
                <button
                  key={menu.label}
                  onClick={menu.onClick}
                  className={`px-4 py-2 text-center border border-transparent rounded-lg transition-all duration-300 ${
                    pathname === menu.href
                      ? "bg-orange-600 text-black font-semibold"
                      : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                  }`}
                >
                  {menu.label}
                </button>
              ) : (
                <Link
                  key={menu.label}
                  href={menu.href}
                  className={`px-4 py-2 text-center border border-transparent rounded-lg transition-all duration-300 ${
                    pathname === menu.href
                      ? "bg-orange-600 text-black font-semibold"
                      : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.label}
                </Link>
              )
            ))}
          </div>
        )}
      </nav>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default AdminLayout;
