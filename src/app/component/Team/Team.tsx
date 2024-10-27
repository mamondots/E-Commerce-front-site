/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Teams } from "../../../../public/Teams";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-semibold text-[#262626]/60">Highliy skilled</p>
        <h2 className="text-5xl font-bold mt-4">Meet our teams</h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
        {Teams?.map((member) => (
          <div key={member.name}>
            <div className="overflow-hidden">
              <img
                className="hover:scale-105 cursor-pointer duration-300"
                src={member.image}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
              <h2 className="text-lg font-semibold text-[#262626]/90 ">
                {member.name}
              </h2>
              <h2 className="text-[#262626]/60 mt-1">{member.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
