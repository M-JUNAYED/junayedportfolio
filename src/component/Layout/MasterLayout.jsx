"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDarkMode } from "../contaxt/DarkModeContext";
import React, { useState } from "react";
import Image from "next/image";

const MasterLayout = ({ children }) => {
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode state and toggle function
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/project", label: "Project" },
    { href: "/exprience", label: "Experience" },
    { href: "/skill", label: "Skill" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-200 dark:bg-gray-800 shadow-lg">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            {/* Brand or Logo */}
            <div>
              <Image width={48} height={48}
                src="/junu.webp"
                alt="Junu Logo"
                className="h-12 rounded p-0 w-auto"
              />
            </div>

            {/* Dark Mode Toggle */}
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
                }`}
              onClick={toggleDarkMode}
            >
              {darkMode ? "🌙" : "🌞"}
            </button>

            {/* Hamburger Menu Button */}
            <button
              className={`md:hidden focus:outline-none ${darkMode ? "text-gray-300" : "text-black"
                }`}
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
              {menuItems.map((menu) => (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className={`px-4 py-2 text-center border border-transparent rounded-lg transition-all duration-200 ${pathname === menu.href
                      ? "bg-orange-600 text-black font-semibold"
                      : darkMode
                        ? "bg-gray-700 text-white hover:bg-orange-600 hover:text-black"
                        : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                    }`}
                >
                  {menu.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`${menuOpen ? "block" : "hidden"
            } md:hidden top-20 left-0 w-full bg-gray-800 dark:bg-gray-900 p-4 space-y-4`}
        >
          {menuItems.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`block px-4 py-2 text-center rounded-lg transition-all duration-200 ${pathname === menu.href
                  ? "bg-orange-600 text-black font-semibold"
                  : darkMode
                    ? "bg-gray-700 text-white hover:bg-orange-600 hover:text-black"
                    : "bg-gray-500 text-white hover:bg-orange-600 hover:text-black"
                }`}
              onClick={() => setMenuOpen(false)} // Close menu after clicking
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-20 container mx-auto p-4 ">{children}</div>
      <footer className="text-center p-4 text-1xl bg-gray-800 text-white">
        © 2025 Md Junayed. All Rights Reserved.
      </footer>
    </div>
  );
};

export default MasterLayout;
