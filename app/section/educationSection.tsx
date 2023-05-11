import React from "react";

export default function educationSection() {
  const educations = [
    {
      year: "2018 - 2022",
      education: "S1 SISTEM INFORMASI UNIVERSITAS SRIWIJAYA",
    },
    {
      year: "2015 - 2018",
      education: "SMA NEGERI 13 PALEMBANG",
    },
    {
      year: "2012 - 2015",
      education: "SMP NEGERI 46 PALEMBANG",
    },
  ];
  return (
    <div className="w-full h-full flex p-14 shadow-[0px_0px_10px] shadow-accent-4 bg-violet-100 rounded-md hover:scale-[101%] transition-all duration-100">
      <div className="flex flex-col">
        <div className="font-bold text-[38px] text-accent-2 mb-4">
          Education
        </div>
        <div className="flex">
          <div className="h-full w-6 flex justify-center">
            <div className="h-full w-[3px] bg-accent-1 mt-[28px]"></div>
          </div>
          <div className="flex flex-col w-full">
            {educations?.map((education: any, index: any) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col mb-6">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-violet-100 bg-accent-1 rounded-full absolute lg:-left-[24px] -left-[24px] top-[8px]"></div>
                  </div>
                  <div className="ml-4 font-bold text-[24px] text-accent-1">
                    {education.year}
                  </div>
                  <div className="ml-4 text-[16px] font-semibold">
                    {education.education}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
