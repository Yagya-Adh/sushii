import CategoryCard from "../card/CategoryCard";
import SectionHeading from "./SectionHeading";

const CategorySection = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-7 py-12 lg:py-24 lg:px-8">
      <SectionHeading
        headName="A little about us"
        headTitle="Our ethos and service"
      />
      <CategoryCard />
    </section>
  );
};

export default CategorySection;
