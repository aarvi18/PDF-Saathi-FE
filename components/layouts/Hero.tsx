// components/features/Hero.tsx

import { FilePlus } from "lucide-react";
import Button from "../ui/Button";
import InfoBox from "../ui/InfoBox";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Title and Description */}
      <div className="text-center mb-12 max-w-4xl m-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Every tool you need to work with PDFs in one place
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </p>
      </div>

      {/* InfoBox Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoBox
          title="Merge PDFs"
          description="Combine multiple PDF files into a single, organized document quickly and easily."
          icon={<FilePlus className="w-10 h-10 text-blue-500" />}
        />
      </div>
    </section>
  );
}
