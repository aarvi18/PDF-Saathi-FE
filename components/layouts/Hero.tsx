// components/features/Hero.tsx
"use client";

import { FilePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import InfoBox from "../ui/InfoBox";

export default function Hero() {
  const router = useRouter();

  // List of tools (can add more)
  const tools = [
    {
      title: "JPG to PDF",
      description: "Convert JPG images to PDF easily.",
      icon: <FilePlus className="w-10 h-10 text-blue-500" />,
      path: "jpg-to-pdf",
    },
    {
      title: "PDF to Word",
      description: "Convert PDF files to Word documents.",
      icon: <FilePlus className="w-10 h-10 text-green-500" />,
      path: "pdf-to-word",
    },
    {
      title: "Compress PDF",
      description: "Reduce PDF file size quickly.",
      icon: <FilePlus className="w-10 h-10 text-red-500" />,
      path: "compress-pdf",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Top Title and Description */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
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
        {tools.map((tool) => (
          <InfoBox
            key={tool.title}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            onClick={() => router.push(`/file-converter/${tool.path}`)}
          />
        ))}
      </div>
    </section>
  );
}
