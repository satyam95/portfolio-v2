import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PathButtonPropsType {
  iconImage?: string;
  userName?: string;
  projectName?: string;
  title?: string;
  link?: string;
}

const PathButton = ({
  iconImage,
  userName,
  projectName,
  title,
  link,
}: PathButtonPropsType) => {
  return (
    <div>
      <Link href={link!}>
        <h3 className="text-base font-semibold px-4">{title}</h3>
        <div className="inline-flex items-center gap-1 px-4 py-1 sm:py-2 hover:bg-[#f8f8f8] hover:rounded-full">
          <Image src={iconImage!} alt="icon" height={20} width={20} />
          <p className="text-base font-light pl-1.5">{userName}</p>
          <p className="text-base font-light">/</p>
          {projectName && <p className="text-base font-semibold">{projectName}</p>}
        </div>
      </Link>
    </div>
  );
};

export default PathButton;
