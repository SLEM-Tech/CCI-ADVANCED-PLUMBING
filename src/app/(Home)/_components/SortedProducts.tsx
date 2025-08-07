"use client";
import { convertToSlug } from "@constants";
import ProductCard2 from "@src/components/Cards/ProductCard2";
import {
	useCategories,
	useProduct,
	useProductsByCategory,
	WooCommerce,
} from "@src/components/lib/woocommerce";
import Carousel from "@src/components/Reusables/Carousel";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


export const Loader = () => (
	<>
		{/* Add more loader divs if you want more placeholders */}
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
		<div className='sm:w-[300px] min-w-[150px] md:min-w-[180px] h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
	</>
);

export const MainLoader = () => (
	<>
		<div className=' w-full h-[180px] sm:h-[280px] bg-gray-200 animate-pulse rounded-md shrink-0' />
	</>
);

const SortedProducts = () => {
  const sliderRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  const [categoryProductsMap, setCategoryProductsMap] = useState<{
    [key: string]: ProductType[];
  }>({});

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true);
      try {
        const filteredCategories = categories
          ?.filter((category: CategoryType) => category?.count > 0)
          ?.slice(0, 5);

        if (filteredCategories) {
          const productsPromises = filteredCategories.map(
            async (category: CategoryType) => {
              const response = await WooCommerce.get(
                `products?category=${category?.id}`
              );
              return { [category?.id]: response?.data };
            }
          );
          const productsResults = await Promise.all(productsPromises);
          const productsMap = productsResults.reduce(
            (acc, result) => ({ ...acc, ...result }),
            {}
          );
          setCategoryProductsMap(productsMap);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categories?.length) fetchCategoryProducts();
  }, [categories]);

  const handleScroll = (categoryId: number, direction: "next" | "prev") => {
    const slider = sliderRefs.current[categoryId];
    if (slider) {
      const distance = 600;
      const scrollAmount = direction === "next" ? distance : -distance;
      slider.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="mb-8 lg:mb-16">
      {isLoading && <MainLoader />}
      {categories
        ?.filter((category: CategoryType) => category?.count > 0)
        ?.slice(0, 5)
        ?.map((category: CategoryType) => {
          const categoryId = category?.id;
          const products = categoryProductsMap[categoryId] || [];

          return (
            <div
              key={categoryId}
              className="flex flex-col gap-5 sm:gap-16 justify-center mb-10 sm:mb-12"
            >
              <div className="w-full items-center flex justify-between px-4 ">
                <span className="text-[18px] border-b-2 border-[#7fc561] ">
                  <span className="xs:hidden text-gray-500 text-[30px] font-normal mr-2">
                    Supersaver
                  </span>
                  <Link
                    href={`/category/${convertToSlug(
                      category?.name
                    )}-${categoryId}`}
                    dangerouslySetInnerHTML={{ __html: category?.name }}
                    className="text-[18px] text-left text-gray-500 py-1 sm:text-3xl font-normal tracking-tighttext-[#7fc561] capitalize"
                  />
                </span>
                <div className="xs:hidden md:block flex items-center justify-center ">
                  <Link
                    href={`/category/${convertToSlug(
                      category?.name
                    )}-${categoryId}`}
                    className="mt-2 text-sm font-medium cursor-pointer text-[#303030] hover:underline"
                  >
                    View all
                  </Link>
                </div>
              </div>

              <Carousel
                handleNext={() => handleScroll(categoryId, "next")}
                handlePrev={() => handleScroll(categoryId, "prev")}
                totalDataNumber={products.length}
              >
                <div
                  ref={(el) => (sliderRefs.current[categoryId] = el)}
                  className="flex space-x-6 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar max-w-[1256px]"
                >
                  {isLoading ? (
                    <Loader />
                  ) : (
                    products.map((product: ProductType) => (
                      <ProductCard2
                        key={product?.id}
                        id={product?.id}
                        image={product?.images[0]?.src}
                        oldAmount={product?.regular_price}
                        newAmount={product?.price}
                        description={product?.name}
                      />
                    ))
                  )}
                </div>
              </Carousel>
            </div>
          );
        })}
    </div>
  );
};

export default SortedProducts;
