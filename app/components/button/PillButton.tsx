import { IIPropsButton } from "@/app/interface";

const PillButton = ({ text, onClick }: IIPropsButton) => {
  return (
    <button
      onClick={onClick}
      className="uppercase px-5 py-2.5 bg-sushii-coral-10 rounded-full text-xs md:text-base font-poppins font-bold text-white text-center"
    >
      {text}
    </button>
  );
};

export default PillButton;
