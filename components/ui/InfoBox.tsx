// components/InfoBox.tsx
"use client";

import { FileText } from "lucide-react";

interface InfoBoxProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function InfoBox({ title, description, icon }: InfoBoxProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 max-w-2xs mx-auto">
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Icon (below title) */}
      <div className="my-4 flex">
        {icon ? icon : <FileText className="w-10 h-10 text-red-500" />}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
}
