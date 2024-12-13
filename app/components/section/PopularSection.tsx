import PopularCardGroup from "../card/PopularCardGroup";
import SectionHeading from "./SectionHeading";

const PopularSection = () => {
  return (
    <section className="mx-auto max-w-screen-lg px-[1.9rem] py-[3.1rem]">
      <SectionHeading headName="The food" headTitle="Most popular dishes" />
      <PopularCardGroup />
    </section>
  );
};

export default PopularSection;
