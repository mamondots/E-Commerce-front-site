/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import BodyImg from "@/assets/images/body-bg.jpg";
import SeactionHead from "@/app/component/Utilits/SeactionHead";

import AllProducts from "@/app/component/Products/AllProducts/AllProducts";
// import { useGetProducts } from "@/hooks/products.hook";

import { useGetProducts } from "@/hooks/products.hook";
import Category from "@/app/component/Products/Category/Category";

const page = () => {
  // const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState("");

  // const fetchProducts = async (category = "") => {
  //   try {
  //     const queryParam = category ? `?category=${category}` : "";
  //     const data = await getProducts(queryParam);
  //     // const products = data?.products || []; // Assuming the API response contains a 'products' key
  //     setProducts(data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts(category);
  // }, [category]);

  // console.log(products); // Ensure the log shows valid data
  const { data: products } = useGetProducts();
  console.log(products);
  return (
    <div
      className="py-20 mt-[-60px]"
      style={{
        backgroundImage: `url(${BodyImg.src})`,
      }}
    >
      <div>
        <SeactionHead subTitle="Ink work" headTitle="Ink work"></SeactionHead>
      </div>

      <div className="mt-20 lg:px-20 md:px-16 sm:px-12 px-10">
        <div className="flex lg:flex-row md:flex-row flex-col  gap-8">
          <div className="lg:w-1/5 w-full">
            <Category></Category>
          </div>
          <div className="lg:w-3/4 w-full">
            <AllProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
