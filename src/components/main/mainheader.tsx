import Link from 'next/link';

const MainHeader = () => {
    return (
        <header className="px-6 py-4 w-full flex items-center justify-between text-black fixed top-0 left-0 right-0 bg-transparent z-50">
            <div className="flex items-center">
                <Link href="/landingpage" className="text-2xl font-bold">
                    Nature Deck
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/feed" className="px-4 py-2 text-black hover:text-gray-500">
                    Home
                </Link>
                <Link href="/gallery" className="px-4 py-2 text-black hover:text-gray-500">
                    Gallery
                </Link>
                <Link href="/gallery" className="px-4 py-2 text-black hover:text-gray-500">
                    Map
                </Link>
                <Link href="/profile    " className="px-4 py-2 text-black hover:text-gray-500">
                    Profile
                </Link>
            </div>
        </header>
    );
};

export default MainHeader;