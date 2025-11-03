// app/file-converter/[tool]/page.tsx

import FileUploader from "@/components/ui/FileUploader";

interface FileConverterPageProps {
  params: Promise<{ tool: string }>;
}

export default async function FileConverterPage({ params }: FileConverterPageProps) {
  const { tool } = await params;
  const realTool = tool ?? "unknown-tool";

  const title = realTool
    .split("-")
    .map((word) => word.toUpperCase())
    .join(" TO ");

  const [first, second] = title.split(" TO ");

  const description = `Convert ${first} to ${second} in seconds. Easily adjust orientation and margins.`;

  const isImage = ["JPG", "PNG", "JPEG", "GIF"].includes(first);
  const buttonText = isImage ? "Select Your Image" : "Select Your File";

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">
          {title}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12">
          {description}
        </p>

        <FileUploader acceptImages={isImage} buttonText={buttonText} />
      </div>
    </div>
  );
}
