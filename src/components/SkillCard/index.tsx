import Image from "next/image";
import React from "react";

interface SkillCardPropsType {
  logo: string;
  title: string;
}

const SkillCard = ({ logo, title }: SkillCardPropsType) => {
  return (
    <div className="flex items-center shadow-[0px_3px_6px_#00000029] rounded-lg p-2 max-w-64">
      <Image
        className="rounded"
        src={logo}
        alt={`${title} logo`}
        height={40}
        width={40}
      />
      <h3 className="pl-3 text-lg">{title}</h3>
    </div>
  );
};

export default SkillCard;
