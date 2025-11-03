// components/NavigationBar.tsx
"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-gray-900">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/pdf-saathi-logo.png"
          alt="PDF Saathi Logo"
          width={50}
          height={50}
          className="w-15 h-15"
        />
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          PDF Saathi
        </span>
      </div>

      {/* Right: Icon */}
      <div className="flex items-center space-x-4">
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors" />
      </div>
    </nav>
  );
}
