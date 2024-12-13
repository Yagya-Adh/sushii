import Image from "next/image";
import {
  FaceBookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/icons";
import ElongButton from "../button/ElongButton";
import Link from "next/link";

const social = [
  {
    id: 1,
    icons: "facebook",
    linkPath: "https://www.facebook.com",
  },

  {
    id: 2,
    icons: "twitter",
    linkPath: "https://www.twitter.com",
  },
  {
    id: 3,
    icons: "youtube",
    linkPath: "https://www.youtube.com",
  },

  {
    id: 4,
    icons: "linkedin",
    linkPath: "https://www.linkedin.com",
  },
];

const HeroSection = () => {
  return (
    <section className="relative bg-black/40 text-white sm:bg-white sm:text-black">
      <div className="mx-auto max-w-screen-lg px-7 pb-12 pt-24">
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h1 className="mt-5 mb-2.5 text-3xl max-w-60 lg:text-5xl  font-poppins font-bold sm:text-start text-center">
            Authentic Japanese Sushi
          </h1>
          <p className="font-poppins font-normal text-sm max-w-72 text-center sm:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
          </p>
          <div className="mt-5">
            <ElongButton text="Make an order" buttonType="button" />
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
      </div>
      <div className="absolute top-0 right-0 -z-10">
        <Image
          src="/assets/hero.jpg"
          alt="food and taste image"
          width={800}
          height={1000}
          className="object-center object-cover w-full h-full  lg:h-auto lg:w-auto md:rounded-bl-4xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
