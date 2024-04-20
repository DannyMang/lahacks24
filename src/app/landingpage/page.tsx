import Link from "next/link";
import dynamic from "next/dynamic";

export default function Component() {
  const GlobeComponent = dynamic(
    () => import("@/components/landingpage/GlobeComponent"),
    {
      ssr: false,
    }
  );

  return (
    <div className="flex flex-col">
      {/* Fullscreen initial view with the title and Get Started button */}
      <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-r from-green-100 to-green-300">
        <header className="px-6 py-4 w-full flex items-center justify-between text-black fixed top-0 left-0 right-0">
          <div className="flex items-center gap-4">
            <Link className="text-2xl font-bold" href="#">
              Nature Deck
            </Link>
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center mt-24">
          {" "}
          {/* Adjusted margin top to push below the fixed header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nature Deck</h1>
          <p className="text-lg md:text-xl mb-8">
            Explore and engage with the natural world around you effortlessly
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            href="#"
          >
            Get Started
          </Link>
        </div>
        <GlobeComponent />
      </div>
      {/* Subsequent content that follows the main viewport */}
      <div>
        <section
          className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-r from-green-100 to-green-300"
          id="about"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg md:text-xl mb-8">
              Discover and collect Nature Cards for your personal deck!
            </p>
          </div>
        </section>
      </div>
      <footer className="text-black py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm">
            © 2024 Nature Deck Inc. All rights reserved.
          </p>
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
  );
}
