import { SushiiLogo } from "@/app/icons";
import PillButton from "../button/PillButton";
import Link from "next/link";
import Image from "next/image";

const foodOrder = [
  {
    id: 1,
    image: "/assets/just.jpg",
    link: "https://www.just-eat.co.uk/",
    hasBackgroundColor: false,
  },
  {
    id: 2,
    image: "/assets/uber.jpeg",
    link: "https://www.ubereats.com/",
    hasBackgroundColor: false,
  },
  {
    id: 3,
    image: "/assets/deliveroo.png",
    link: "https://deliveroo.co.uk/",
    hasBackgroundColor: true,
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 bg-white/80 backdrop:3xl rounded-br-3xl shadow-lg lg:shadow-none">
      <div className="mx-auto max-w-screen-lg pb-2.5 px-[1.8rem] relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SushiiLogo className="h-16 w-14 mr-1" />
            <h2 className="text-black font-poppins text-xl xl:text-2xl md:text-2xl mt-5 font-noraml">
              Sushii
            </h2>
          </div>
          <div className="group block relative">
            <PillButton text="order now" />
            <div className="absolute -bottom-28 md:-bottom-32 xl:-bottom-[125px] left-0 hidden group-hover:block z-10">
              {foodOrder.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  className="w-full h-full rounded-xl overflow-hidden"
                  key={item.id}
                >
                  <Image
                    src={item.image}
                    alt={`order_${item.id} image`}
                    width={100}
                    height={30}
                    className={`                      
                      object-cover object-center w-auto h-auto py-1 px-1.5 mb-0.5 rounded-sm
                      ${
                        item.hasBackgroundColor === true
                          ? "bg-sushii-deliveroo-10"
                          : ""
                      }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
