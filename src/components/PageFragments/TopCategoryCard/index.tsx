"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import fallbackImage from "@public/images/topCategory/showerhead1.png"

interface TopCategoryCardProps {
  category: string;
  link: string;
  imgPath: StaticImageData | string;
}

export const TopCategoryCard = ({
  category,
  imgPath,
  link,
}: TopCategoryCardProps) => {

  const imageSrc = imgPath && imgPath !== "" ? imgPath : fallbackImage;
  return (
    <Link
      href={`${"/category/" + link }`}
      className="flex flex-col items-center space-y-2"
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100px, 128px"
        />
      </div>
      <p className="text-xs sm:text-base font-semibold text-neutral-800 text-center">
        {category}
      </p>
    </Link>
  );
};

export default TopCategoryCard;
