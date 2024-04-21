import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import Image from "next/image";

import MainHeader from "@/components/main/mainheader";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <MainHeader userId={""}/>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
                <Image
                alt="Profile Picture"
                className="rounded-full"
                height={128}
                src="https://via.placeholder.com/128"
                style={{
                    aspectRatio: "1",
                    objectFit: "cover",
                }}
                width={128}
                />
              <button className="absolute bottom-0 right-0 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <CameraIcon className="h-5 w-5" />
                <span className="sr-only">Change profile picture</span>
              </button>
            </div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input defaultValue="John Doe" id="name" type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="johndoe@example.com" id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input defaultValue="+1 (555) 555-5555" id="phone" type="tel" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input defaultValue="New York, NY" id="location" type="text" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Password</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Notifications</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <BellIcon className="h-6 w-6 text-gray-500" />
                  <span>Email Notifications</span>
                </div>
                <Switch defaultChecked id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <SmartphoneIcon className="h-6 w-6 text-gray-500" />
                  <span>Push Notifications</span>
                </div>
                <Switch id="push-notifications" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function SmartphoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}