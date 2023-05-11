import React from "react";

export default function skillsSection() {
  const Skills = [
    {
      skill: "Database",
    },
    {
      skill: "Data Analysis",
    },
    {
      skill: "Ms. Excel, Ms. Word",
    },
  ];

  const computerSkills = [
    {
      skill: "SPSS Statistic",
    },
    {
      skill: "MySQL",
    },
    {
      skill: "Ms. Excel, Ms. Word",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px]">
      <div className="w-full h-full flex p-14 shadow-[0px_0px_10px] shadow-accent-4 bg-violet-100 rounded-md hover:scale-[101%] transition-all duration-100">
        <div className="flex">
          <div className="flex flex-col mr-20">
            <div className="font-bold text-[38px] text-accent-2 mb-4">
              Skills
            </div>
            <div className="flex flex-col">
              {Skills?.map((skill: any, index: any) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col mb-4">
                    <ul>
                      <li className="font-bold text-[18px] text-accent-1 list-disc">
                        {skill.skill}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex p-14 shadow-[0px_0px_10px] shadow-accent-4 bg-violet-100 rounded-md hover:scale-[101%] transition-all duration-100">
        <div className="flex">
          <div className="flex flex-col mr-20">
            <div className="font-bold text-[38px] text-accent-2 mb-4">
            Computer Skills
            </div>
            <div className="flex flex-col">
              {computerSkills?.map((skill: any, index: any) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col mb-4">
                    <ul>
                      <li className="font-bold text-[18px] text-accent-1 list-disc">
                        {skill.skill}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
