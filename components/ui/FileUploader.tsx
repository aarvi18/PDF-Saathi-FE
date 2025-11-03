// components/ui/FileUploader.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

interface FileUploaderProps {
  acceptImages: boolean;
  buttonText: string;
}

export default function FileUploader({ acceptImages, buttonText }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    if (acceptImages && selectedFile.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) handleFileSelect(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) handleFileSelect(droppedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleInputChange}
        accept={acceptImages ? "image/*" : ".pdf,.doc,.docx,.txt"}
      />

      {/* Drag and drop area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl transition-all duration-300 ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        } ${!file ? "p-12" : "p-8"}`}
      >
        {!file ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            {/* Upload Icon */}
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Drag and drop your file here
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                or click the button below to browse
              </p>
            </div>

            {/* Button */}
            <Button onClick={handleButtonClick}>
              {buttonText}
            </Button>

            {/* Supported formats */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              Supported formats: {acceptImages ? "JPG, PNG, GIF, etc." : "PDF, DOC, DOCX, TXT"}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* File preview/info */}
            <div className="flex items-start gap-4">
              {/* Preview or icon */}
              <div className="shrink-0">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  />
                ) : (
                  <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* File details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate mb-1">
                  {file.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {formatFileSize(file.size)}
                </p>

                {/* Success indicator */}
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">File uploaded successfully</span>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={handleRemoveFile}
                className="shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Remove file"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Convert button */}
            <div className="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button onClick={() => {/* Add conversion logic */}}>
                Convert File
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
