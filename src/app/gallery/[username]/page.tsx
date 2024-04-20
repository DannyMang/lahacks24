/**
 * v0 by Vercel.
 * @see https://v0.dev/t/E4M85SAMUdl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Gallery</h1>
        <label
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          htmlFor="upload"
        >
          <UploadIcon className="mr-2 h-5 w-5" />
          Upload
        </label>
        <input accept="image/*" className="sr-only" id="upload" type="file" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 1"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 1</h3>
            <p className="text-sm">Description of Image 1</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 2"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 2</h3>
            <p className="text-sm">Description of Image 2</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 3"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 3</h3>
            <p className="text-sm">Description of Image 3</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 4"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 4</h3>
            <p className="text-sm">Description of Image 4</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 5"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 5</h3>
            <p className="text-sm">Description of Image 5</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Image 6"
            className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">Image 6</h3>
            <p className="text-sm">Description of Image 6</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function UploadIcon(props: any) { //fix type cast later
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
  )
}