import { SushiiLogo } from "@/app/icons";
import PillButton from "../button/PillButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 bg-white/40 backdrop:3xl rounded-br-3xl shadow-lg lg:shadow-none">
      <div className="mx-auto max-w-screen-lg pb-2.5 px-[1.8rem] relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SushiiLogo className="h-16 w-14 mr-1" />
            <h2 className="text-black font-poppins text-xl xl:text-2xl md:text-2xl mt-5 font-noraml">
              Sushii
            </h2>
          </div>
          <div className="group">
            <PillButton text="order now" />
          </div>
        </div>
        <div className="hidden group-hover:flex flex-col">lorem lorem</div>
      </div>
    </nav>
  );
};

export default Navbar;
