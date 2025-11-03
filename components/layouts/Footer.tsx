// components/Footer.tsx
"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              PDF Saathi
            </h2>
            <p className="mt-3 text-sm">
              Your trusted online companion for all your PDF needs — merge,
              split, compress, and convert with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-red-500">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Popular Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Merge PDF</li>
              <li>Compress PDF</li>
              <li>Convert PDF</li>
              <li>Split PDF</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mt-2">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-red-500" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-red-500" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-red-500" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} PDF Saathi. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
