import categoryData from "@/lib/data/categoryData.json";
import { FastIcon, HealthIcon, QualityIcon } from "@/app/icons";
const data = categoryData;

const CategoryCard = () => {
  return (
    <div className="flex flex-col justify-center gap-5 md:grid md:grid-cols-3 items-center">
      {data.map((list) => (
        <div
          className="flex flex-col justify-center items-center border lg:h-72 lg:w-72 py-7 px-5 lg:p-10 rounded-br-2xl rounded-tl-2xl overflow-hidden"
          key={list.id}
        >
          <div className="bg-sushii-coral-10 h-[70px] w-[70px] px-2.5 flex items-center justify-center rounded-full">
            {list.category.image == "quality" ? (
              <QualityIcon className="h-10 w-10" />
            ) : list.category.image == "healthy" ? (
              <HealthIcon className="h-10 w-10" />
            ) : list.category.image == "fast" ? (
              <FastIcon className="h-10 w-10" />
            ) : null}
          </div>
          <h3 className="text-lg lg:text-[1.5rem] font-poppins font-medium lg:my-5">
            {list.category.title}
          </h3>
          <p className="font-poppins font-normal text-sm text-center">
            {list.category.describe}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
