"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import testimonialData from "@/lib/data/testimonialData.json";
import { ArrowLeftIcon, ArrowRightIcon } from "@/app/icons";

const TestimonialSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = testimonialData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [data.length]);

  const handleright = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleleft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <div className="relative flex overflow-hidden w-full h-full">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((list) => (
          <div
            key={list.id}
            className="flex-shrink-0 w-full flex items-center justify-center h-full"
          >
            <div className="flex flex-col items-center text-center px-4 md:p-4">
              <p className="text-black text-lg 2xl:text-xl max-w-sm font-poppins font-normal mb-2.5">
                {list.author.message}
              </p>
              <div className="flex flex-col justify-center md:flex-row items-center mt-4">
                <Image
                  src={list.author.image}
                  alt="author"
                  width={50}
                  height={50}
                  className="rounded-full md:mr-4 object-cover object-center h-12 w-12"
                />
                <div>
                  <h6 className="text-black font-bold text-lg 2xl:text-xl">
                    {list.author.name}
                  </h6>
                  <p className="text-gray-500 text-base 2xl:text-xl font-poppins font-normal">
                    {list.author.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-8 hidden md:block">
              <Image
                src={list.dish.image}
                alt={list.dish.name}
                width={470}
                height={350}
                className="rounded-tl-3xl h-[350px] w-[470px] object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center rounded-br-lg rounded-tl-lg absolute bottom-10 right-10">
        <button
          type="button"
          onClick={handleright}
          className="bg-white  h-10 w-10 rounded-tl-lg items-center flex justify-center"
        >
          <ArrowRightIcon className="h-7 w-7 fill-sushii-coral-10" />
        </button>
        <button
          type="button"
          onClick={handleleft}
          className="bg-sushii-coral-10 rounded-br-lg h-10 w-10 items-center flex justify-center"
        >
          <ArrowLeftIcon className="fill-white h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlide;
