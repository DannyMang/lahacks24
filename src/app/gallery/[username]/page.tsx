
"use client"
/*
 * This directive tells Next.js that this component should be treated as a Client Component,
 * allowing the use of useState and other React features that rely on the browser.
 */

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/E4M85SAMUdl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import ImageComponent from "@/components/gallery/ImageContainer";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

export default function Component() {
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      setUploadStatus('Uploading...');

      try {
        const upload = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const response = await fetch('/api/analyze', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload and analyze the image');
        }

        const result = await response.json();
        console.log(result)
        console.log(upload)
        setUploadStatus('Upload successful!');
      } catch (error) {
        setUploadStatus(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      setUploadStatus('No file selected');
    }
  };
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 ">Gallery</h1>
        <label
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
          htmlFor="upload"
        >
          <UploadIcon className="mr-2 h-5 w-5" />
          Upload
        </label>
        <input accept="image/*" className="sr-only" id="upload" type="file"  onChange={handleFileUpload} />
      </div>
      {uploadStatus && <p>{uploadStatus}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <ImageComponent
            alt="Image 1"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
            title="Image 1"
            description="Description of Image 1"
          />
        </div>
      </div>
    </div>
  );
}

function UploadIcon(props: any) {
  //fix type cast later
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
