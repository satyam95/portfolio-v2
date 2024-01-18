import HalfProjectShowcase from "@/components/HalfProjectShowcase";
import { ProjectShowcases } from "@/constants/ProjectShowcases";
import { WPProjectsPort } from "@/constants/WPProjectsPort";
import React from "react";

const WPProjects = () => {
  return (
    <main>
      <section className="py-20 pt-36 sm:pt-28">
        <div className="container mx-auto px-3 sm:px-0">
          <div className="w-full text-center max-w-screen-sm mx-auto">
            <h2 className="text-2xl font-semibold text-[#707070] uppercase">
              Websites, Themes, and Plugins
            </h2>
            <p className="font-semibold text-4xl pt-6">
              Building Exceptional Projects, One Line at a Time.
            </p>
          </div>
          <div className="w-full pt-16 flex flex-col sm:grid sm:grid-cols-2 gap-12">
            {WPProjectsPort.map((item) => (
              <div key={item.name} className="w-full">
                <HalfProjectShowcase
                  image={item.image}
                  title={item.name}
                  link={item.link}
                  bgClass="black-bg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WPProjects;
