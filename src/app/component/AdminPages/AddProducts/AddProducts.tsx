import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
const AddProducts = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <h2>this is add products</h2>
    </div>
  );
};

export default AddProducts;
