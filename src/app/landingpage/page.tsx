import Link from "next/link";
import dynamic from "next/dynamic";
import LoginButton from "@/components/ui/loginbutton";
import { CustomCard } from "@/components/landingpage/CustomCard";
import { Button } from "@/components/ui/button";
export default function Component() {
  const GlobeComponent = dynamic(
    () => import("@/components/landingpage/GlobeComponent"),
    {
      ssr: false,
    }
  );
  const Login = dynamic(() => import("@/components/ui/loginbutton"), {});

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
            <LoginButton text="Login" />
            <LoginButton text="Sign up" />
          </div>
        </header>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center mt-24">
          {" "}
          {/* Adjusted margin top to push below the fixed header */}
          <h1 className="text-6xl md:text-4xl font-bold mb-4">Nature Deck</h1>
          <p className="text-2xl md:text-xl mb-4">
            Explore and engage with the natural world around you effortlessly
          </p>
        </div>
        <div className="justify-center flex flex-col text-center m-8">
          <p className=" text-xs">
            Drag the globe around to discover Nature Cards from around the
            world!
          </p>
          <GlobeComponent />
        </div>
      </div>

      {/* Subsequent content that follows the main viewport */}
      <div>
        <section
          className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-r from-green-100 to-green-300"
          id="about"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center font-bold text-3xl">
            <p className="text-lg md:text-xl mb-8">
              Discover and collect Nature Cards for your personal deck!
            </p>
          </div>
          <CustomCard />
          <p className="font-bold text-2xl">
            Upload Your First Nature Card Now!
          </p>
          <Button className="mt-6" size="lg">
            Get Started
          </Button>
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
