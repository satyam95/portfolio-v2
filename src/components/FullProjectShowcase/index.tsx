import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FullProjectShowcasePropsType {
  title: string;
  description: string;
  image: string;
  slug: string;
  bgClass: string;
}

const FullProjectShowcase = ({
  title,
  description,
  image,
  slug,
  bgClass,
}: FullProjectShowcasePropsType) => {
  return (
    <div className="relative">
      <div className={`absolute w-full h-4/5 rounded-2xl ${bgClass !== "" ? bgClass : "bg-gray-300"}`}></div>
      <div className="p-5 md:p-8 xl:p-10 relative">
        <div className="flex justify-between items-start pb-6">
          <div className="sm:pl-24 lg:pl-32 xl:pl-12">
            <h3 className="text-lg sm:text-2xl font-semibold text-white">{title}</h3>
            <p className="text-base sm:text-lg font-light text-white max-w-lg">
              {description}
            </p>
          </div>
          <Link href={`/projects/${slug}`}>
            <div className="bg-white h-8 w-8 rounded-full flex justify-center items-center">
              <Image
                src="assets/right-arrow.svg"
                alt="right arrow"
                height={18}
                width={24}
              />
            </div>
          </Link>
        </div>
        <div className="md:p-4 lg:px-8 xl:px-10 pt-6 sm:pt-10">
          <div className="relative w-full h-[200px] md:h-[390px]  lg:h-[567px]">
            <Image
              fill
              src={image}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
              alt={`${title} screenshot`}
              className="rounded-2xl shadow-[4px_3px_10px_#00000029]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProjectShowcase;
