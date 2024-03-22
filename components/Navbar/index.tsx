import Image from "next/image";
import Link from "next/link";
import UserNav from "../UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src="/images/airbnb-desktop.png"
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
            width={128}
            height={40}
          />

          <Image
            src="/images/airbnb-mobile.webp"
            alt="Mobile Logo"
            className="block lg:hidden w-12"
            width={48}
            height={50}
          />
        </Link>

        <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
          Search
        </div>

        <UserNav />

        {/* <SearchModalCompnent /> */}

        {/* <UserNav /> */}
      </div>
    </nav>
  );
}
