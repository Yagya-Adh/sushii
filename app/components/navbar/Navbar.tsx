import { SushiiLogo } from "@/app/icons";
import PillButton from "../button/PillButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10">
      <div className="mx-auto max-w-screen-xl bg-white/40 backdrop:3xl rounded-br-3xl lg:rounded-none shadow-lg lg:shadow-none pb-2.5 px-[1.8rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SushiiLogo className="h-16 w-14 mr-1" />
            <h2 className="text-black font-poppins text-xl md:text-2xl mt-5 font-noraml">
              Sushii
            </h2>
          </div>
          <PillButton text="order now" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
