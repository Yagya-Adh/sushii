import Link from "next/link";
import Image from "next/image";
import ElongButton from "../button/ElongButton";

const HealthAndTaste = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-7 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex inset-0">
          <Image
            src="/assets/healthandtaste.jpeg"
            alt="food and taste .jepg"
            width={560}
            height={420}
            className="object-center object-cover h-full w-full rounded-bl-3xl mb-5"
          />
        </div>
        <div className="flex flex-col md:ml-14">
          <h5 className="text-sm xl:text-xl font-poppins font-extrabold text-sushii-coral-10 mb-2.5 md:text-start text-center">
            Healthy and tasty
          </h5>
          <h2 className="text-black font-poppins font-bold text-3xl xl:text-4xl text-center md:text-start lg:text-4xl lg:my-5 max-w-72">
            Sushi is an important part of a balanced diet.
          </h2>
          <p className="text-sm xl:text-xl font-poppins font-normal text-black max-w-72 mb-2.5 md:text-start text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Link
            href="https://www.just-eat.co.uk/takeaway/nearme/sushi"
            target="_blank"
            className="mt-10 lg:mt-5 md:justify-start flex justify-center"
          >
            <ElongButton text="Make an order" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthAndTaste;
