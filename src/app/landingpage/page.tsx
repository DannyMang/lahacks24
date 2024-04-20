/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QFMnHFUrWTN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
        <div className="flex items-center gap-4">
          <Link className="text-2xl font-bold" href="#">
            Acme Inc.
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Features
            </Link>
            <Link className="hover:underline" href="#">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            href="#"
          >
            Login
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            href="#"
          >
            Sign Up
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Acme Inc.</h1>
            <p className="text-lg md:text-xl mb-8">Discover the best products and services for your business.</p>
            <Link
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </section>
        <section className="bg-white py-20 md:py-32" id="about">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg md:text-xl mb-8">
              Acme Inc. is a leading provider of innovative products and services for businesses of all sizes. Our team
              of experts is dedicated to helping you succeed.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm">© 2023 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link className="hover:underline" href="#">
              Privacy
            </Link>
            <Link className="hover:underline" href="#">
              Terms
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}