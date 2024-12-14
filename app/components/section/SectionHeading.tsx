import { IsectionHead } from "@/app/interface";

const SectionHeading = ({ headName, headTitle }: IsectionHead) => {
  return (
    <div className="flex flex-col justify-center items-center mb-4 lg:mb-12">
      <h5 className="text-sm xl:text-xl mb-2.5 lg:mb-2.5 text-center font-extrabold text-sushii-coral-10">
        {headName}
      </h5>
      <h3 className="mb-2.5 lg:mb-5 font-poppins font-bold text-2xl lg:text-4xl 2xl:text-5xl text-center text-black">
        {headTitle}
      </h3>
    </div>
  );
};

export default SectionHeading;
