import HalfProjectShowcase from "@/components/HalfProjectShowcase";
import { ProjectShowcases } from "@/constants/ProjectShowcases";
import React from "react";

const CustomProjects = () => {
  return (
    <main>
      <section className="py-20 pt-36 sm:pt-28">
        <div className="container mx-auto px-3 sm:px-0">
          <div className="w-full text-center max-w-screen-sm mx-auto">
            <h2 className="text-2xl font-semibold text-[#707070] uppercase">
              Projects
            </h2>
            <p className="font-semibold text-4xl pt-6">
              A Collection Shaped by Continuous Coding Endeavors
            </p>
          </div>
          <div className="w-full pt-16 flex flex-col sm:grid sm:grid-cols-2 gap-12">
            {ProjectShowcases.filter(
              (project) => project.techType === "morden"
            ).map((item) => (
              <div key={item.title} className="w-full">
                <HalfProjectShowcase
                  image={item.image}
                  title={item.title}
                  slug={item.slug}
                  bgClass="grey-bg"
                  descp={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomProjects;
