"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "@src/components/Reusables/Carousel";
import { TopCategoryCard } from "../TopCategoryCard";
import { useCategories } from "@src/components/lib/woocommerce";
import { convertToSlug } from "@constants";

export const TopCategorySection = ({ className = "" }) => {
  const [displayMore, setDisplayMore] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
  const [maxScrollTotal, setMaxScrollTotal] = useState(0);

  const { data: categories, isLoading } = useCategories("");
  const Categories = categories || [];

 const visibleCategories = displayMore
   ? Categories?.filter(
       (category: any) =>
         category?.count > 0 && category?.name !== "Uncategorized"
     )
   : Categories?.filter(
       (category: any) =>
         category?.count > 0 && category?.name !== "Uncategorized"
     )?.slice(0, 5);

  const handleNext = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.offsetWidth / getItemsPerView();
      slider.scrollLeft += cardWidth * getItemsPerView();
      setScrollLeftTotal(slider.scrollLeft);
      setMaxScrollTotal(slider.scrollWidth - slider.clientWidth);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.offsetWidth / getItemsPerView();
      slider.scrollLeft -= cardWidth * getItemsPerView();
      setScrollLeftTotal(slider.scrollLeft);
      setMaxScrollTotal(slider.scrollWidth - slider.clientWidth);
    }
  };

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 6;
    if (window.innerWidth < 640) return 2; // xs
    if (window.innerWidth < 768) return 3; // sm
    if (window.innerWidth < 1024) return 4; // md
    if (window.innerWidth < 1280) return 5; // lg
    return 6; // xl and up
  };

  if (isLoading || Categories.length === 0) {
    return <div className="text-center py-10">Loading Top categories...</div>;
  }

  return (
    <section
      className={`bg-discovery-gradient pt-4 pb-12 relative overflow-hidden ${className}`}
    >
      <div className="px-4">
        <span className="relative text-gray-500 border-b-2 border-[#7fc561] py-1 font-medium uppercase text-[18px] lg:text-[20px] tracking-wide z-10">
          Shop From <span className="text-[#7fc561]">Top Categories</span>
        </span>
      </div>

      <div className="relative mt-10">
        <Carousel
          totalDataNumber={visibleCategories.length}
          maxScrollTotal={maxScrollTotal}
          scrollLeftTotal={scrollLeftTotal}
          handleNext={handleNext}
          handlePrev={handlePrev}
        >
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-[2px] overflow-x-auto scroll-smooth xs:snap-x scrollbar-hide"
          >
            {visibleCategories.map((category: any, i: any) => (
              <div
                key={i}
                className="shrink-0 xs:min-w-[50%] sm:min-w-[33.33%] md:min-w-[25%] lg:min-w-[20%] xl:min-w-[16.66%]"
              >
                <TopCategoryCard
                  category={category?.name}
                  imgPath={category?.images?.src}
                  link={`${convertToSlug(category?.name)}-${category?.id}`}
                />
              </div>
            ))}
          </div>
        </Carousel>

        {/* <div
          className="mt-2 text-xs text-right cursor-pointer text-[#7fc561] hover:underline pr-6"
          onClick={() => setDisplayMore(!displayMore)}
        >
          {displayMore ? "Show Less" : "Show More"}
        </div> */}
      </div>
    </section>
  );
};

export default TopCategorySection;
