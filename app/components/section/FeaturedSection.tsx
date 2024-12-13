import { CallIcon, ClockIcon, NavigationIcon } from "@/app/icons";
import featuredData from "@/lib/data/featureData.json";

const data = featuredData;
const FeaturedSection = () => {
  return (
    <section className="mx-auto max-w-screen-lg md:pt-24 md:px-7 px-7 p-12">
      <div className="bg-white rounded-br-3xl rounded-tl-3xl shadow-md py-7 px-5 sm:p-12 gap-5 grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3">
        {data.map((list) => (
          <div
            className={`flex flex-col justify-center items-center 
                 ${
                   list.hasBorder &&
                   "border-b md:border-b-0 border-r-0 md:border-r"
                 }`}
            key={list.id}
          >
            {list.icon == "clock" ? (
              <div className="bg-sushii-coral-10 items-center flex p-2 rounded-full">
                <ClockIcon className="h-[19px] w-[19px] fill-white" />
              </div>
            ) : list.icon == "navigation" ? (
              <div className="bg-sushii-coral-10 items-center flex p-2 rounded-full">
                <NavigationIcon className="h-[19px] w-[19px] fill-white" />
              </div>
            ) : list.icon == "call" ? (
              <div className="bg-sushii-coral-10 items-center flex p-2 rounded-full">
                <CallIcon className="h-[19px] w-[19px] fill-white" />
              </div>
            ) : null}

            <h4 className="text-lg my-2.5 font-poppins font-bold text-center">
              {list.title}
            </h4>
            <div className="font-poppins font-normal text-base">
              {list.slug}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
