import React from "react";
import userImg from "@/assets/images/userImg.jpg";
import Image from "next/image";
import { useUser } from "@/context/user.provider";
import Link from "next/link";

const SwithDashBoard = () => {
  const { user } = useUser();

  const roleLink = user?.role === "user" ? "/user" : "/admin";

  return (
    <div>
      <Link href={roleLink}>
        <Image
          className="rounded-full border-2 border-[#EE804C]/30 hover:border-[#EE804C] cursor-pointer duration-300"
          src={userImg}
          alt="user avatar"
          width={25}
          height={25}
        />
      </Link>
    </div>
  );
};

export default SwithDashBoard;
