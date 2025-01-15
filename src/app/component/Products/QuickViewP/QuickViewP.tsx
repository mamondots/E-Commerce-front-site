"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { FiEye } from "react-icons/fi";
import ProductImg from "@/assets/images/ubone-arts-store-product-01.jpg";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
// import { useGetProduct } from "@/hooks/products.hook";

// interface ProductId {
//   params: {
//     id: string;
//   };
// }

const QuickViewP = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const { data: product } = useGetProduct(params.id);
  // console.log(product);
  return (
    <>
      <Button
        className="p-0 m-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent border-none shadow-none text-xl cursor-pointer duration-300 hover:text-[#F57D4C]"
        onPress={onOpen}
      >
        <FiEye />
      </Button>
      <Modal
        className="rounded-sm p-4"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="border border-[#262626]">
                  <Image width={400} src={ProductImg} alt="ProductImg"></Image>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Street hen cock (30X21)
                  </h2>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex items-center gap-1 font-bold text-yellow-600">
                      <p>
                        <FaRegStar />
                      </p>
                      <p>
                        <FaRegStar />
                      </p>
                      <p>
                        <FaRegStar />
                      </p>
                      <p>
                        <FaRegStar />
                      </p>
                    </div>
                    <p className="text-sm text-[#262626]/70">No reviews</p>
                    <p>/</p>
                    <p className="text-sm font-semibold text-red-600">
                      12 sold in last 2 hours
                    </p>
                  </div>
                  <h2 className="text-3xl font-medium mt-3 text-[#F57D4C]">
                    $21.00
                  </h2>

                  <div className="mt-3 flex items-center  gap-2 border-b border-[#262626]/20 pb-5">
                    <h2>Availability :</h2>
                    <div className="flex items-center  gap-1">
                      <div className="bg-[#3ED660] w-[12px] h-[12px] rounded-full">
                        <div className="bg-[#3ED660] flex items-center justify-center w-[10px] h-[10px] border border-[#fff] rounded-full"></div>
                      </div>
                      <p className="text-sm text-[#262626]/70">20 in stock</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-[#262626]/70">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry dummy text and typesetting industry
                    </p>
                  </div>

                  <div className="mt-7">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-6 border hover:border-[#F57D4C] duration-300 px-2 py-1 border-[#262626]/40 text-[#262626]/70">
                        <p className="text-xl cursor-pointer">+</p>
                        <p>1</p>
                        <p className="text-xl cursor-pointer">-</p>
                      </div>
                      <div className="w-full text-center py-2 text-sm border border-[#262626]/40 hover:text-[#fff] cursor-pointer hover:bg-[#F47D4C] duration-300">
                        <h2>ADD TO CART</h2>
                      </div>
                    </div>

                    <div className="bg-[#262626]  text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer text-center py-4 mt-6">
                      <input
                        className="outline-none uppercase font-semibold text-sm"
                        type="submit"
                        value="Check out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuickViewP;
