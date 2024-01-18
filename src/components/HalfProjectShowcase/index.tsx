import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HalfProjectShowcasePropsType {
  image: string;
  title: string;
  slug?: string;
  bgClass: string;
  descp?: string;
  link?: string;
}

const HalfProjectShowcase = ({
  image,
  title,
  slug,
  bgClass,
  descp,
  link,
}: HalfProjectShowcasePropsType) => {
  return (
    <div className="relative">
      <div className={`${bgClass} absolute w-full h-4/5 rounded-2xl`}></div>
      <div className="relative p-6">
        <div className="flex justify-between items-start">
          <h3
            className={`${
              bgClass === "black-bg" ? "text-white" : "text-black"
            } text-lg font-semibold`}
          >
            {title}
          </h3>
          {slug !== undefined ? (
            <Link href={`/projects/${slug}`}>
              <Image
                src={`assets/${
                  bgClass === "black-bg" ? "right-arrow-white" : "right-arrow"
                }.svg`}
                alt="right arrow"
                height={18}
                width={24}
              />
            </Link>
          ) : (
            ""
          )}
          {link !== undefined ? (
            <Link href={link}>
              <Image
                src={`assets/${
                  bgClass === "black-bg" ? "right-arrow-white" : "right-arrow"
                }.svg`}
                alt="right arrow"
                height={18}
                width={24}
              />
            </Link>
          ) : (
            ""
          )}
        </div>
        {descp && (
          <div
            className={`${
              bgClass === "black-bg" ? "text-white" : "text-[#707070]"
            } pr-4 pt-3 pb-4 text-base font-normal`}
          >
            {descp}
          </div>
        )}
        <div className="pt-4">
          <div className="relative w-full h-[200px] sm:h-[277px]">
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

export default HalfProjectShowcase;
