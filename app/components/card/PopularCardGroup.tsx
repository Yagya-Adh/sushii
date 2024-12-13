import Image from "next/image";
import StarRating from "../star/StarRating";
import popularDish from "@/lib/data/popularDish.json";
const data = popularDish;

const PopularCardGroup = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-11 lg:gap-10">
      {data.map((list) => (
        <div
          className="relative h-48 w-36 md:w-52 md:h-52 lg:w-64 lg:h-56 rounded-br-2xl rounded-tl-2xl overflow-hidden"
          key={list.id}
        >
          <Image
            src={list.dish.image}
            alt={`${list.dish.name}_image`}
            width={250}
            height={230}
            className="object-center object-cover h-full w-full"
          />
          <div className="absolute bottom-0 left-0 w-full px-2.5 py-3.5 lg:px-5 lg:py-3 bg-white/60 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <h3 className="text-base lg:text-xl font-poppins font-medium lg:mb-0.5 ">
                {list.dish.name}
              </h3>
              <div>
                <span className="text-black font-poppins font-bold text-xs lg:text-lg">
                  {list.dish.price}
                </span>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <StarRating stars={1} />
              <span className="ml-1 font-poppins font-extrabold text-xs lg:text-sm">
                {list.dish.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCardGroup;
