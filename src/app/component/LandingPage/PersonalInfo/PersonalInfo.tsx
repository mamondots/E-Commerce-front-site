import React from "react";

const datas = [
  {
    title: "Date of birth",
    text: "01 July 2000",
  },
  {
    title: "Expertise",
    text: "Canvas painting",
  },
  {
    title: "Education",
    text: "Master of design",
  },

  {
    title: "Born in",
    text: "Bangladesh, Dhaka",
  },
];

const PersonalInfo = () => {
  return (
    <div className="mt-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {datas.map((data, index) => (
          <div key={index} className="cursor-pointer">
            <div className="inline-flex lg:gap-3 gap-4 group">
              <div className="bg-[#222222] group-hover:bg-[#F57D4C] duration-300 text-[#fff] px-3">
                <h2 className="mt-8 font-bold">0 {index + 1}</h2>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="font-medium text-black/60">{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
