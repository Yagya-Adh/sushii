import Link from "next/link";
import {
  FaceBookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/icons";
import ElongButton from "../button/ElongButton";
import socialData from "@/lib/data/socialNav.json";
const social = socialData;

const HeroSection = () => {
  return (
    <section className="relative bg-black/40 text-white bg-tranparent sm:bg-black/0 lg:text-black">
      <div className="mx-auto max-w-screen-lg px-7 pb-12 pt-24">
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h1 className="mt-5 mb-2.5 text-3xl max-w-60 lg:text-5xl font-poppins font-bold sm:text-start text-center">
            Authentic Japanese Sushi
          </h1>
          <p className="font-poppins font-normal text-sm max-w-72 text-center sm:text-start xl:max-w-96 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
          </p>
          <Link
            href="https://www.just-eat.co.uk/takeaway/nearme/sushi"
            target="_blank"
            className="mt-5"
          >
            <ElongButton text="Make an order" buttonType="button" />
          </Link>
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
      </div>
    </section>
  );
};

export default HeroSection;
