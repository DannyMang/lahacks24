"use client";

import ImageComponent from "@/components/gallery/ImageContainer";
import { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";

import { uploadImage } from "../lib/firebaseAPI";
import { File } from "formidable";

export default function Component() {
  const searchParams = useSearchParams();
  const userId: string = searchParams?.get("userId")!;
  const [uploadStatus, setUploadStatus] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(false);
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      setUploadStatus("Uploading...");
      try {
        const uploadToBucket = await fetch("/api/uploadToBucket", {
          method: "POST",
          body: formData,
        });
        const response = await fetch("/api/analyze", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error("Failed to upload and analyze the image");
        }
        const result = await response.json();
        console.log(result);
        console.log(uploadToBucket);
        const dbData = new FormData();
        dbData.append("name", result.name);
        dbData.append("description", result.description);
        dbData.append("health", result.health);
        dbData.append("timestamp", Date.now().toString());
        dbData.append("imageURL", uploadToBucket.url);
        dbData.append("userID", userId);

        const uploadToDb = await fetch("/api/uploadToDb", {
          method: "POST",
          body: dbData,
        });
        if (!uploadToDb.ok) {
          throw new Error("Failed to upload to database");
        }
        setUploadStatus("Image uploaded and analyzed successfully");
      } catch (error) {
        setOpen(true);
        setUploadStatus(
          `Error: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    } else {
      setUploadStatus("No file selected");
    }
  };
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 ">Nature Deck</h1>
        <label
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
          htmlFor="upload"
        >
          <UploadIcon className="mr-2 h-5 w-5" />
          Upload
        </label>
        <input
          accept="image/*"
          className="sr-only"
          id="upload"
          type="file"
          onChange={handleFileUpload}
        />
      </div>
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
      <>
        <Dialog open={open} onOpenChange={handleOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-lg">
            <DialogHeader>
              <p>Error uploading or analyzing image</p>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
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