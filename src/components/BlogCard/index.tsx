import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="w-full">
      <div className="w-3/12 rounded-lg border-[#707070] border">
        <div className="relative w-full h-[132px]">
          <Image
            fill
            src="/assets/flipkar-screenshot.png"
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
            alt="flipkart screenshot"
            className="rounded-lg shadow-[4px_3px_10px_#00000029]"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">React Native</h3>
          <p className="text-base pt-2">
            We over me. Problem solving with positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
