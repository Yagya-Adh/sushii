import {
  FaceBookIcon,
  LinkedInIcon,
  SushiiLogo,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/icons";
import Link from "next/link";
import socialData from "@/lib/data/socialNav.json";
import openTimeData from "@/lib/data/openTimeData.json";
const social = socialData;
const opentTime = openTimeData;

const FooterTopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-20 place-items-start">
      <div className="flex flex-col justify-center items-center md:justify-normal md:items-start md:order-none order-2">
        <div className="flex items-end order-2 md:order-none">
          <SushiiLogo className="h-16 w-14 mr-1 bg-black/5 p-1 backdrop:3xl rounded-br-lg" />
          <h2 className="text-black font-poppins text-lg xl:text-2xl max-w-16  mt-5 font-noraml">
            Athenti Sushii
          </h2>
        </div>
        <div className="font-poppins font-normal text-base xl:text-xl mt-3.5 mb-5 text-center md:text-start order-1 md:order-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>
        <div className="flex items-center gap-1">
          {social.map((item) => (
            <Link
              className="flex items-center mt-12 rounded-full bg-sushii-coral-10 p-1.5"
              href={item.linkPath}
              target="_blank"
              key={item.id}
            >
              {item.icons == "facebook" ? (
                <FaceBookIcon className="fill-white h-3.5 w-3.5" />
              ) : item.icons == "youtube" ? (
                <YoutubeIcon className="fill-white h-3.5 w-3.5" />
              ) : item.icons == "twitter" ? (
                <TwitterIcon className="fill-white h-3.5 w-3.5" />
              ) : item.icons == "linkedin" ? (
                <LinkedInIcon className="fill-white h-3.5 w-3.5" />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:justify-normal md:items-start">
        <h3 className="font-poppins font-bold text-black text-2xl xl:text-3xl mb-10">
          Opening Times
        </h3>
        {opentTime.map((item) => (
          <div
            key={item.id}
            className="flex my-[0.4rem] w-full justify-between text-sm xl:text-base font-poppins"
          >
            <span className="text-sm xl:text-base font-poppins font-bold">
              {item.day.name}
            </span>
            {item.day.time}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center items-center md:justify-normal md:items-start order-2 md:order-none">
        <h3 className="font-poppins font-bold text-black xl:text-3xl text-2xl mb-10">
          Contact Us
        </h3>
        <div className="my-[7px] font-poppins font-normal text-sm xl:text-base text-center md:text-start">
          Sushii <br /> 1 Churchill Road, London N1
        </div>
        <Link
          href="tel:+440205678908"
          className="font-poppins font-normal hover:text-sushii-coral-10 xl:text-base text-sm my-[7px]"
        >
          +44 020 5678 908
        </Link>
        <Link
          href="https://www.jamstackers.com"
          className="font-poppins font-normaltext-sm xl:text-base my-[7px]"
        >
          Powered by{" "}
          <span className=" hover:text-sushii-coral-10 ">Jamstackers</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterTopSection;
