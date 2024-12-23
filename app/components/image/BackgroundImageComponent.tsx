"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BackgroundImageComponent = () => {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <div className="absolute top-0 right-0 -z-10">
      <Image
        src="/assets/hero.jpg"
        alt="food and taste image"
        width={800}
        height={1050}
        className="object-center object-cover w-full h-[550px] lg:h-[550px] lg:w-[700px] xl:w-[800px] sm:rounded-bl-4xl"
      />
    </div>
  );
};

export default BackgroundImageComponent;
