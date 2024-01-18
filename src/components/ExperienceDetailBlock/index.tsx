import Image from "next/image";
import React from "react";

interface ExperienceDetailBlockPropsType {
  companyLogo: string;
  name: string;
  designation: string;
  startDate: string;
  endDate: string;
  location: string;
}

const ExperienceDetailBlock = ({
  companyLogo,
  name,
  designation,
  startDate,
  endDate,
  location,
}: ExperienceDetailBlockPropsType) => {
  return (
    <div className="flex sm:gap-10 w-full">
      <div className="w-9/12 sm:w-2/3 flex">
        <Image src={companyLogo} alt={`${name} logo`} height={52} width={52} />
        <div className="pl-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-base">{designation}</p>
        </div>
      </div>
      <div className="w-3/12 sm:w-1/3">
        <p className="text-sm sm:text-base">
          {startDate} - {endDate}
        </p>
        <p className="text-sm sm:text-base">{location}</p>
      </div>
    </div>
  );
};

export default ExperienceDetailBlock;
