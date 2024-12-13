"use client";
import Image from "next/image";
import { IStars } from "@/app/interface";

const StarRating = ({ stars }: IStars) => {
  const starRating = [...Array(stars)].map((e, i) => (
    <div key={i}>
      <Image
        src="/assets/Star.svg"
        alt="starts_rating_"
        height={20}
        width={20}
        className="w-3.5 h-4  object-center object-cover"
      />
    </div>
  ));

  return <>{starRating}</>;
};

export default StarRating;
