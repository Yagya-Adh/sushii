import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="mx-auto max-w-screen-lg py-12 px-7">
      <div className="bg-sushii-coral-10 rounded-br-4xl rounded-tl-4xl grid grid-rows-2 lg:grid-rows-none  lg:grid-cols-2 items-center shadow-lg">
        <div className="flex flex-col justify-center items-center lg:items-start p-12">
          <h2 className="text-[40px] xl:text-5xl xl:max-w-72 mb-2.5 font-poppins font-bold min-w-64 max-w-64 text-white text-center lg:text-start">
            A simple way to order your food.
          </h2>

          <p className="text-base xl:text-xl font-poppins font-normal text-white max-w-80 mb-5 text-center lg:text-start">
            Order directly in our app, collect points and offers are avaibile in
            app too.
          </p>
          <div className="inset-0 flex justify-center lg:justify-start">
            <Image
              src="/assets/google.png"
              alt="google play image"
              width={150}
              height={40}
              className="object-center object-cover w-[150px] h-10 lg:h-[50px] lg:w-[170px] mb-2.5"
            />
          </div>
          <div className="inset-0 flex justify-center lg:justify-start">
            <Image
              src="/assets/apple.png"
              alt="apple play image"
              width={100}
              height={100}
              className="object-center object-cover w-[150px] h-10 lg:h-[50px] lg:w-[170px]"
            />
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <Image
            src="/assets/banner1.svg"
            alt="apple play image"
            width={190}
            height={370}
            className="object-center object-cover h-52 w-28 md:h-[370px] md:w-[190px] rounded-2xl translate-x-10 translate-y-14 lg:-translate-y-16 shadow-2xl"
          />
          <Image
            src="/assets/banner2.svg"
            alt="apple play image"
            width={190}
            height={370}
            className="object-center object-cover h-52 w-28 md:h-[370px] md:w-[190px] rounded-2xl lg:translate-y-4 lg:-translate-x-20 shadow-2xl"
          />
          <Image
            src="/assets/banner3.svg"
            alt="apple play image"
            width={190}
            height={370}
            className="object-center object-cover h-52 w-28 md:h-[370px] md:w-[190px] rounded-2xl -translate-x-10 -translate-y-14 lg:translate-y-14 lg:-translate-x-32 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
