import BlogCard from "@/components/BlogCard";
import ExperienceDetailBlock from "@/components/ExperienceDetailBlock";
import FullProjectShowcase from "@/components/FullProjectShowcase";
import HalfProjectShowcase from "@/components/HalfProjectShowcase";
import SkillBlog from "@/components/SkillBlog";
import { ExperienceDetails } from "@/constants/ExperienceDetails";
import { ProjectShowcases } from "@/constants/ProjectShowcases";
import { Design, LibFrame, ProgLang, ToolPlatform } from "@/constants/Skills";
import { WPProjectsPort } from "@/constants/WPProjectsPort";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full h-[80vh] sm:h-[88vh] flex">
        <div className="max-w-[900px] m-auto px-4 md:px-5 xl:px-0">
          <h1 className="text-4xl font-semibold pb-4">Hi! I am Satyam.</h1>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-light">
            Turning Your Ideas into a Pixelated Symphony of Reality.
          </h2>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col gap-16 px-3 md:px-5 xl:px-0">
          {ProjectShowcases.filter(
            (project) => project.type === "full-showcase"
          ).map((project) => (
            <FullProjectShowcase
              key={project.title}
              slug={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              bgClass={project.bgClass}
            />
          ))}
        </div>
      </section>
      <section className="py-16 sm:pt-32">
        <div className="container mx-auto px-3 md:px-5 xl:px-0">
          <div className="w-full flex flex-col sm:flex-row gap-16 sm:gap-12 xl:gap-20">
            {ProjectShowcases.filter(
              (project) => project.type === "half-showcase"
            ).map((item) => (
              <div key={item.title} className="w-full sm:w-1/2">
                <HalfProjectShowcase
                  image={item.image}
                  title={item.title}
                  slug={item.slug}
                  bgClass="grey-bg"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-16">
            <Link
              href="/projects"
              className="text-2xl font-semibold inline-flex border-black border-b-2 "
            >
              View More Projects
              <Image
                src="assets/arrow-next.svg"
                alt="next arrow"
                height={24}
                width={36}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3 md:px-5 xl:px-0">
          <div className="w-full flex flex-col sm:flex-row gap-16 xl:gap-20">
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-semibold text-[#707070] uppercase">
                CAREER
              </h2>
              <p className="font-semibold text-4xl max-w-md pt-2.5 sm:pt-8">
                Sculpting a Path of Professional Triumphs.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-semibold text-[#707070] uppercase">
                EXPERIENCE
              </h2>
              <div className="pt-8 flex flex-col gap-8">
                {ExperienceDetails.map((item) => (
                  <ExperienceDetailBlock
                    key={item.name}
                    companyLogo={item.companyLogo}
                    name={item.name}
                    designation={item.designation}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    location={item.location}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3 md:px-5 xl:px-0">
          <div className="w-full sm:w-6/12">
            <h2 className="text-2xl font-semibold text-[#707070] uppercase">
              Skills
            </h2>
            <p className="font-semibold text-4xl pt-2.5 sm:pt-6">
              Mastering Technology for Unrivaled Digital Excellence
            </p>
          </div>
          <div className="flex pt-16 flex-col gap-10">
            <SkillBlog title="Programming Languages" skills={ProgLang} />
            <SkillBlog title="Libraries & Frameworks" skills={LibFrame} />
            <SkillBlog title="Tools & Platforms" skills={ToolPlatform} />
            <SkillBlog title="Design" skills={Design} />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3 md:px-5 xl:px-0">
          <div className="w-full sm:w-6/12">
            <h2 className="text-2xl font-semibold text-[#707070] uppercase">
              WordPress Marvels
            </h2>
            <p className="font-semibold text-4xl pt-2.5 sm:pt-6">
              Building Exceptional Projects, One Line at a Time.
            </p>
          </div>
          <div className="pt-16 w-full flex flex-col sm:flex-row gap-16 sm:gap-12 xl:gap-20">
            {WPProjectsPort.filter(
              (project) => project.type === "showcase"
            ).map((item) => (
              <div key={item.name} className="w-full sm:w-1/2">
                <HalfProjectShowcase
                  image={item.image}
                  title={item.name}
                  slug={item.slug}
                  bgClass="black-bg"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-12">
            <Link
              href="/wp-projects"
              className="text-2xl font-semibold inline-flex border-black border-b-2 "
            >
              View More Projects
              <Image
                src="assets/arrow-next.svg"
                alt="next arrow"
                height={24}
                width={36}
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-[#707070] uppercase">
            DREAMING + DOING
          </h2>
          <div className="pt-8">
            <BlogCard />
          </div>
        </div>
      </section> */}
    </main>
  );
}
