// components/ui/InfoBox.tsx
"use client";

import { FileText } from "lucide-react";

interface InfoBoxProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function InfoBox({ title, description, icon, onClick }: InfoBoxProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon ? (
          <div className="w-8 h-8 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
