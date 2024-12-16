import { Metadata } from "next";
import Link from "next/link";
import { SushiiLogo } from "./icons";

export const metadata: Metadata = {
  title: "Not Found - Sushii website template",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Not Found - Sushii Website Template",
    description: "Created by Jamstackers",
    images: ["/assets/dish1.png"],
  },
};
const NotFound = () => {
  return (
    <main className="mx-auto max-w-screen-lg">
      <div className="flex flex-col items-center h-full justify-center mb-2.5">
        <div className="flex inset-0">
          <SushiiLogo className="object-cover object-center h-full w-full" />
        </div>
        <h1 className="font-poppins font-extrabold text-8xl my-5">404</h1>
        <p className="font-poppins font-normal text-sm text-black">
          Eek! We&apos;ve lost this page. Sorry about that.{" "}
          <Link href="/" className="text-sushii-coral-10">
            Click here to return home.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
