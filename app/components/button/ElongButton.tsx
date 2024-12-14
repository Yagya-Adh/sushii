import { RoundedArrow } from "@/app/icons";
import { IIPropsButton } from "@/app/interface";

const ElongButton = ({ text, onClick, buttonType }: IIPropsButton) => {
  return (
    <button
      onClick={onClick}
      type={buttonType}
      className="
      group 
      flex items-center
      bg-sushii-coral-10
      rounded-full 
      text-xs 
      md:text-base 
      xl:text-xl
      font-poppins 
      font-medium
      text-white
      text-center      
      p-2.5
      py-1.5 pl-5
      hover:pr-3      
      transition-all ease-in-out duration-300     
      "
    >
      <span>{text}</span>
      <RoundedArrow className="ml-1.5 h-7 w-7 rotate-45 fill-white hidden group-hover:block transition-all ease-in-out duration-300" />
    </button>
  );
};

export default ElongButton;
