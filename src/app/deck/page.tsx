"use client";

import ImageComponent from "@/components/gallery/ImageContainer";
import { useState, ChangeEvent, useEffect} from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import Header from "@/components/gallery/header"
import { fetchAllImages } from "../lib/firebaseFetch";

export default function Component() {
  const searchParams = useSearchParams();
  const userId: string = searchParams!.get("userId")!;
  const [images, setImages] = useState<string[]>([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const handleOpen = () => setOpen(false);
 


  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await fetchAllImages(); // Fetch images from Firebase
        setImages(imageUrls); // Store image URLs in state
      } catch (error) {
        console.error("Failed to load images:", error);
        setOpen(true);
        setUploadStatus("Failed to load images");
      }
    };

    loadImages();
  }, []);



  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      setUploadStatus("Uploading...");

      try {
        const upload = await fetch("/api/upload", {
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
        
        setDescriptions(oldDescriptions => [...oldDescriptions, result.data]);
        console.log('Description added:', result.data);
        console.log(result);
        console.log(upload);
        setUploadStatus("Upload successful!");
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
    <div>
      <Header userId={userId as string} />
      <div className="container  mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-8">
          <label
            className="inline-flex items-center p-6 border border-black text-sm 
            font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer m-4"
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
      <div className="flex justify-center">
        <div className="flex gap-20">
          {images.map((url, index) => (

              <ImageComponent
                  key={index}
                  alt={`Uploaded image ${index}`}
                  className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
                  height={400}
                  src={url}
                  style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                  }}
                  width={400}
                  title={`Image ${index}`}
                  description={descriptions[index] || "Loading description..."}
              />
          ))}
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
      <>
      </> 
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
