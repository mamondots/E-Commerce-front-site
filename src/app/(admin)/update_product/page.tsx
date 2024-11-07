/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import BodyImg from "@/assets/images/body-bg.jpg";
import { Categories } from "../../../../public/Categories";
import Tiptap from "@/app/component/Utilits/Tiptap";
import { ChangeEvent, useState } from "react";

const page = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  console.log(imageFiles);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <h2 className="font-semibold text-xl">
          Update Your Products Information
        </h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>

      <div className="mt-8 lg:w-2/3 w-full">
        <form onSubmit={handleForm} className="flex flex-col gap-3">
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="lg:w-2/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Title
              </label>
              <input
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Title.."
              />
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Price
              </label>
              <input
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Price.."
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h2 className="font-semibold text-sm text-[#262626]/70">
              Product Image
            </h2>
            <label
              className="px-3 py-2  border border-[#262626]/25 outline-none text-center text-[#262626]/50 cursor-pointer  w-full rounded"
              htmlFor="image"
            >
              upload Image
            </label>
            <input
              onChange={(e) => handleImageChange(e)}
              className="hidden w-full"
              id="image"
              type="file"
            />
          </div>

          <div>
            {imagePreviews.length > 0 && (
              <div className="flex gap-2 my-2 flex-wrap">
                {imagePreviews.map((imageDataUrl) => (
                  <div
                    key={imageDataUrl}
                    className="relative w-[120px] h-[120px] rounded-xl border-2 border-dashed border-default-300 p-2"
                  >
                    <img
                      alt="item"
                      className="h-full w-full object-cover object-center rounded-md"
                      src={imageDataUrl}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="lg:w-2/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Categories
              </label>

              <select className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded">
                {Categories.map((category) => (
                  <option
                    className="text-[#262626]/70"
                    key={category.title}
                    value={category.title}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Rating
              </label>
              <input
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Rating 1/5.."
              />
            </div>
          </div>

          <div className="px-3 pb-8 bg-transparent border border-[#262626]/25 outline-none rounded">
            <Tiptap></Tiptap>
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Availability
              </label>

              <select className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded">
                <option value="stock">In Stock</option>
                <option value="OutStock">Out Stock</option>
              </select>
            </div>

            <div className="lg:w-2/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Quintity
              </label>
              <input
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Quintity.."
              />
            </div>
          </div>

          <div>
            <input
              className="w-full text-center font-medium text-sm py-3 tracking-wider bg-[#262626] text-[#fff] rounded cursor-pointer hover:bg-[#F47D4C] duration-300"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
