/* eslint-disable @typescript-eslint/no-explicit-any */
import HeadImg from "@/assets/images/sectionHead.jpg";
import Link from "next/link";
const SeactionHead = ({ subTitle, headTitle }: any) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${HeadImg.src})`,
      }}
    >
      <div className="flex flex-col items-center justify-center py-12 text-white">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Link
            href="/"
            className="hover:text-[#F57D4C] duration-300 cursor-pointer"
          >
            Home
          </Link>
          <p>-</p>
          <p>{subTitle}</p>
        </div>
        <h2 className="text-4xl font-semibold mt-2">{headTitle}</h2>
      </div>
    </div>
  );
};

export default SeactionHead;
