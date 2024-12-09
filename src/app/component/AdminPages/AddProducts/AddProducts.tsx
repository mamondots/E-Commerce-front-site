/* eslint-disable @next/next/no-img-element */
"use client";
import React, { ChangeEvent, useState } from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import { Categories } from "../../../../../public/Categories";
import { toast } from "sonner";

interface ApiError {
  data: {
    message: string;
  };
}
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateProductMutation } from "@/redux/features/products/productsApi";
import { useRouter } from "next/navigation";
const AddProducts = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // console.log(imageFiles);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createProduct] = useCreateProductMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const toastId = toast.loading("product Creating...");
    const formData = new FormData();
    const postData = {
      ...data,
      images: imageFiles,
    };
    formData.append("data", JSON.stringify(postData));
    imageFiles.forEach((image) => {
      formData.append("image", image);
    });
    try {
      const result = await createProduct(formData).unwrap();
      console.log(result);
      if (result.success) {
        toast.success("products create", { id: toastId, duration: 1000 });
      }
      router.push("/manage_products");
    } catch (error) {
      console.log(error);
      const apiError = error as ApiError;
      toast.error(apiError?.data?.message || "An error occurred", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   const formData = new FormData();
  //   const postData = {
  //     ...data,
  //     images: imageFiles,
  //   };

  //   formData.append("data", JSON.stringify(postData));
  //   imageFiles.forEach((image) => {
  //     formData.append("image", image);
  //   });

  //   try {
  //     const result = await createProduct(formData).unwrap();
  //     console.log("Product created successfully:", result);
  //     // Provide feedback to the user
  //   } catch (error) {
  //     console.error("Error creating product:", error);
  //     // Handle error and provide feedback to the user
  //   }
  // };
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <h2 className="font-semibold text-xl">Add Your Products Information</h2>
        <p className="mt-2 lg:w-2/3 w-full text-[#262626]/80 border-b border-[#262626]/20 pb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          laborum libero ex repudiandae vel ut, hic repellendus. Placeat
          accusamus consequatur iure et sequi ea officiis.
        </p>
      </div>

      <div className="mt-8 lg:w-2/3 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="lg:w-2/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Title
              </label>
              <input
                {...register("title", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Title.."
              />
              {errors.title && (
                <span className="text-[#ce4646]">This field is required</span>
              )}
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Price
              </label>
              <input
                {...register("price", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Price.."
              />
              {errors.price && (
                <span className="text-[#ce4646]">price field is required</span>
              )}
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
            {errors.image && (
              <span className="text-[#ce4646]">image field is required</span>
            )}
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
              {/* <input
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Title.."
              /> */}

              <select
                {...register("category", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
              >
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
              {errors.category && (
                <span className="text-[#ce4646]">
                  Category field is required
                </span>
              )}
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Rating
              </label>
              <input
                {...register("rating", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Rating 1/5.."
              />
              {errors.rating && (
                <span className="text-[#ce4646]">Rating field is required</span>
              )}
            </div>
          </div>

          {/* <div className="px-3 pb-8 bg-transparent border border-[#262626]/25 outline-none rounded">
            <Tiptap></Tiptap>
          </div> */}

          <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-sm text-[#262626]/70">
              Product Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
              cols={30}
              rows={6}
              placeholder="Enter product description.."
            ></textarea>
            {errors.description && (
              <span className="text-[#ce4646]">
                Description field is required
              </span>
            )}
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-3">
            <div className="lg:w-1/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Availability
              </label>

              <select
                {...register("availability", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
              >
                <option value="stock">In Stock</option>
                <option value="OutStock">Out Stock</option>
              </select>
              {errors.description && (
                <span className="text-[#ce4646]">
                  Availability field is required
                </span>
              )}
            </div>

            <div className="lg:w-2/3 w-full flex flex-col gap-1">
              <label className="font-semibold text-sm text-[#262626]/70">
                Product Quintity
              </label>
              <input
                {...register("stock", { required: true })}
                className="px-3 py-2 bg-transparent border border-[#262626]/25 outline-none rounded"
                type="text"
                placeholder="Quintity.."
              />
              {errors.stock && (
                <span className="text-[#ce4646]">
                  Quintity field is required
                </span>
              )}
            </div>
          </div>

          <div>
            <input
              className="w-full text-center font-medium text-sm py-3 tracking-wider bg-[#262626] text-[#fff] rounded cursor-pointer hover:bg-[#F47D4C] duration-300"
              type="submit"
              value={loading ? "Adding Product..." : "Add Product"}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
