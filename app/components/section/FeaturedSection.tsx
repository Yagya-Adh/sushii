import { CallIcon, ClockIcon, NavigationIcon } from "@/app/icons";
import featuredData from "@/lib/data/featureData.json";
import Link from "next/link";

const data = featuredData;
const FeaturedSection = () => {
  return (
    <section className="mx-auto max-w-screen-lg md:pt-24 md:px-7 px-7 p-12">
      <div className="bg-white rounded-br-3xl rounded-tl-3xl shadow-md py-7 px-5 sm:p-12 gap-5 grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3 h-full">
        {data.map((list) => (
          <div
            className={`flex flex-col justify-center items-center py-4 md:py-0 px-0 md:px-4 h-full
                 ${
                   list.hasBorder &&
                   "border-b md:border-b-0 border-r-0 md:border-r"
                 }`}
            key={list.id}
          >
            {list.icon == "clock" ? (
              <Link
                href="https://www.clocktab.com/"
                target="_blank"
                className="bg-sushii-coral-10 items-center flex p-2 rounded-full"
              >
                <ClockIcon className="h-[19px] w-[19px] xl:h-6 xl:w-6 fill-white" />
              </Link>
            ) : list.icon == "navigation" ? (
              <Link
                href="https://www.google.com/maps/"
                target="_blank"
                className="bg-sushii-coral-10 items-center flex p-2 rounded-full"
              >
                <NavigationIcon className="h-[19px] w-[19px] xl:h-6 xl:w-6 fill-white" />
              </Link>
            ) : list.icon == "call" ? (
              <Link
                href="tel:555-555-5555"
                className="bg-sushii-coral-10 items-center flex p-2 rounded-full"
              >
                <CallIcon className="h-[19px] w-[19px] xl:h-6 xl:w-6 fill-white" />
              </Link>
            ) : null}

            <h4 className="text-lg xl:text-xl my-2.5 font-poppins font-bold text-center">
              {list.title}
            </h4>
            <div className="font-poppins font-normal text-base xl:text-xl">
              {list.slug}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
