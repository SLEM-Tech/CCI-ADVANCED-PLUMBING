import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import { HeroSection } from "@src/components/PageFragments/HeroSection";
import { ShareYourSetup } from "@src/components/PageFragments/ShareYourSetup/ShareYourSetup";
import { TopCategorySection } from "@src/components/PageFragments/TopCategory";


const { description, title } = SEODATA.home;
export const metadata: Metadata = {
  title: {
    absolute: "CCI Advanced Plumbing Tech and Technical Company Ltd",
    default: "CCI Advanced Plumbing Tech and Technical Company Ltd",
    template: "",
  },
  description: description,
  icons: {
    icon: "/favicon.png", // or "/favicon."
  },
  openGraph: {
    images: [
      {
        url: SEODATA.defaultOGImage,
      },
    ],
  },
};

const page = () => {
	return (
    <AppLayout>
      <div className="xs:mt-[158px] md:mt-[100px] ">
        <HeroSection />
      </div>
      <div>
        <TopCategorySection />
      </div>
      <div>
        <SortedProducts />
      </div>
    </AppLayout>
  );
};

export default page;
