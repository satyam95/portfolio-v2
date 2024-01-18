import React from "react";
import SkillCard from "../SkillCard";
import { ProgLang } from "@/constants/Skills";

interface SkillPropsType {
  logo: string;
  title: string;
}

interface SkillBlogPropsType {
  title: string;
  skills: SkillPropsType[];
}

const SkillBlog = ({ title, skills }: SkillBlogPropsType) => {
  return (
    <div>
      <h2 className="text-base font-semibold text-[#707070] uppercase">
        {title}
      </h2>
      <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((item) => (
          <SkillCard key={item.title} logo={item.logo} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SkillBlog;
