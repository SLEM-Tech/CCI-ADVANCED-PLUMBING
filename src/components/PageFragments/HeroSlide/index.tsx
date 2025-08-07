import Image, { StaticImageData } from "next/image";
import React from "react";
import { montserrat } from "@src/config";

interface HeroSlideProps {
  featureMessage: string;
  imgPath: StaticImageData | string;
}

export const HeroSlide = ({ featureMessage, imgPath }: HeroSlideProps) => {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[calc(100vh-130px)] max-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      {typeof imgPath === "string" ? (
        <Image
          src={imgPath}
          alt="hero image"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover z-0"
        />
      ) : (
        <Image
          src={imgPath}
          alt="hero image"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover z-0 xs:h-[50%] md:h-[60%] lg:[full]"
        />
      )}

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="pl-10 sm:pl-16 md:pl-24 lg:pl-32 text-white max-w-[800px]">
          {featureMessage && (
            <p
              className={`text-4xl sm:text-5xl text-left lg:text-[64px] font-normal leading-tight ${montserrat.className}`}
            >
              {featureMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
