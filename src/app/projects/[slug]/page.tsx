import PathButton from "@/components/PathButton";
import { ProjectShowcases } from "@/constants/ProjectShowcases";
import Image from "next/image";
import React from "react";

const EcommerceApp = ({ params }: { params: { slug: string } }) => {
  const projectSlug = params.slug;

  const data = ProjectShowcases.find((project) => project.slug === projectSlug);

  return (
    <main>
      <section className="w-full h-[80vh] sm:h-[88vh]">
        <div className="container m-auto h-full flex px-3 sm:px-0">
          <div className="my-auto">
            <div className="max-w-screen-md">
              <h1 className="text-2xl sm:text-4xl font-semibold pb-4">
                {data?.title}
              </h1>
              <h2 className="text-base sm:text-lg font-light">
                {data?.description}
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 pt-8">
                <PathButton
                  title={data?.code.title}
                  iconImage={data?.code.iconImage}
                  userName={data?.code.userName}
                  projectName={data?.code.name}
                  link={data?.code.link}
                />
                <PathButton
                  title={data?.demo.title}
                  iconImage={data?.demo.iconImage}
                  userName={data?.demo.userName}
                  projectName={data?.demo?.name}
                  link={data?.demo?.link}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="bg-[#f9f9f9] mx-4 sm:mx-16 p-6 sm:p-10 border rounded-3xl border-[#e7e7e7]">
            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-6">
              <div className="w-full sm:w-1/5">
                <h2 className="font-semibold text-2xl sm:text-4xl">
                  Project Info
                </h2>
              </div>
              <div className="w-full sm:w-4/5">
                <p className="text-base sm:text-xl font-light">
                  {data?.projectInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 py-20 bg-[#E4DBFF]">
        <div className="container mx-auto">
          <div className="px-4 sm:px-16 flex flex-col gap-16">
            {data?.screenshorts.map((imageUrl) => (
              <div
                key={imageUrl}
                className="relative w-full h-[280px] sm:h-[572px]"
              >
                <Image
                  fill
                  src={imageUrl}
                  sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
                  alt="flipkart screenshot"
                  className="rounded-2xl shadow-[4px_3px_10px_#00000029]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EcommerceApp;
