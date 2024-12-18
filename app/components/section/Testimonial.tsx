import TestimonialSlide from "../slide/TestimonialSlide";
import SectionHeading from "./SectionHeading";

const Testimonial = () => {
  return (
    <section className="mx-auto max-w-screen-lg py-12 px-7">
      <SectionHeading headName="Testimonials" headTitle="Our customers say" />
      <TestimonialSlide />
    </section>
  );
};

export default Testimonial;
