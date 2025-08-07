"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "@src/components/Reusables/Carousel";
import showerhead1 from "@public/images/topCategory/showerhead1.png";
import showerhead2 from "@public/images/topCategory/showerhead2.png";
import showerhead3 from "@public/images/topCategory/showerhead3.png";
import showerhead4 from "@public/images/topCategory/showerhead4.png";
import showerhead5 from "@public/images/topCategory/showerhead5.png";
import showerhead6 from "@public/images/topCategory/showerhead6.png";
import showerhead7 from "@public/images/topCategory/showerhead7.png";

import { TopCategoryCard } from "../TopCategoryCard";
import { StaticImageData } from "next/image";
import { useCategories } from "@src/components/lib/woocommerce";
import { convertToSlug } from "@constants";

interface TopCategoryCardProps {
  category: string;
  link: string;
  imgPath: StaticImageData | string;
}

interface TopCategorySectionProps {
  className?: string;
}

// const categories: TopCategoryCardProps[] = [
//   { category: "Shower head", link: "", imgPath: showerhead1 },
//   { category: "Shower head", link: "", imgPath: showerhead2 },
//   { category: "Shower head", link: "", imgPath: showerhead3 },
//   { category: "Shower head", link: "", imgPath: showerhead4 },
//   { category: "Shower head", link: "", imgPath: showerhead5 },
//   { category: "Shower head", link: "", imgPath: showerhead6 },
//   { category: "Shower head", link: "", imgPath: showerhead7 },
// ];

// const {
//     data: categories,
//     isLoading: categoryWpIsLoading,
//     isError: categoryIsError,
//   } = useCategories("");

//   const Categories: CategoryType[] = categories;

export const TopCategorySection = ({
  className = "",
}: TopCategorySectionProps) => {
  const [displayMore, setDisplayMore] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxScrollTotal, setMaxScrollTotal] = useState(0);
  const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: categories, isLoading } = useCategories("");
  console.log(categories);
  const Categories = categories || [];
  const visibleCategories = displayMore
    ? categories
    : categories
        ?.filter(
          (category: CategoryType) =>
            category?.count > 0 || category?.name === "Uncategorized"
        )
        ?.slice(0, 5);

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);

      sliderRef.current.scrollLeft += 600; // Adjust the scroll distance as needed
      setCurrentIndex((prevIndex) =>
        prevIndex < visibleCategories?.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollLeftTotal(scrollLeft);
      setMaxScrollTotal(maxScroll);
      // console.log(scrollLeft);
      if (scrollLeft > 0) {
        sliderRef.current.scrollLeft -= 600; // Adjust the scroll distance as needed
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    }
  };

  // If categories are still loading or empty, show a loading state
  if (isLoading || Categories.length === 0) {
    return <div className="text-center py-10">Loading Top categories...</div>;
  }

  return (
    <section
      className={`xs:flex xs:flex-col xs:items-center xs:justify-center lg:block bg-discovery-gradient relative overflow-hidden pt-4 pb-12 ${className}`}
    >
      <div className="w-full px-3">
        <span className=" xs:text-center md:text-left relative text-gray-500 border-b-2 border-[#7fc561] py-1 font-medium uppercase text-[18px] lg:text-[20px] tracking-wide z-10">
          Shop From <span className="text-[#7fc561]">Top Categories</span>
        </span>
      </div>

      <div className="w-full container-v2 mt-12 z-10 mx-8">
        <Carousel
          totalDataNumber={visibleCategories?.length}
          maxScrollTotal={maxScrollTotal}
          scrollLeftTotal={scrollLeftTotal}
          handleNext={handleNext}
          handlePrev={handlePrev}
        >
          <div
            ref={sliderRef}
            className="w-full flex space-x-6 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar px-4 sm:px-8"
          >
            {isLoading || Categories.length === 0 ? (
              <div className="text-center py-10">Loading Top categories...</div>
            ) : (
              visibleCategories?.map((category: any, i: number) => (
                <TopCategoryCard
                  key={i}
                  category={category?.name}
                  imgPath={category?.images?.src}
                  link={`${convertToSlug(category?.name)}-${category?.id}`}
                />
              ))
            )}
          </div>
        </Carousel>
      </div>

      {/* <div className="container-v2 mt-12 z-10 mx-8">
        <Carousel
          totalDataNumber={visibleCategories?.length}
          maxScrollTotal={maxScrollTotal}
          scrollLeftTotal={scrollLeftTotal}
          handleNext={handleNext}
          handlePrev={handlePrev}
        >
          <div className="flex space-x-6 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar max-w-[1256px]">
            {visibleCategories?.map((category: any, i: any) => (
              <TopCategoryCard
                key={i}
                category={category?.name}
                imgPath={category?.image?.src}
                link={convertToSlug(category?.name) + "-" + category?.id}
              />
            ))}
          </div>
        </Carousel>
        <div
          className="mt-2 text-xs text-right cursor-pointer text-[#7fc561] hover:underline md:mr-6"
          onClick={() => setDisplayMore(!displayMore)}
        >
          {displayMore ? "Show Less" : "Show More"}
        </div>
      </div> */}
    </section>
  );
};

export default TopCategorySection;
