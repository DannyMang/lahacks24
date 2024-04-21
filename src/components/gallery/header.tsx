import Link from "next/link";

const Header = ({ userId }: { userId: string }) => {
  return (
    <header className="px-6 py-6 w-full flex items-center justify-between text-black fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="flex items-center">
        <Link href="/landingpage" className="text-4xl font-bold">
          Nature Deck
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={{
            pathname: "/feed",
            query: { userId: userId },
          }}
          className="px-4 py-2 text-black hover:text-gray-500"
        >
          Deck
        </Link>

        <Link
          href="/profile    "
          className="px-4 py-2 text-black hover:text-gray-500"
        >
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;
