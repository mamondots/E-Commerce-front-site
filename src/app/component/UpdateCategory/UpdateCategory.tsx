"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const UpdateCategory = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Button
        className="p-2 border w-0 bg-transparent rounded border-[#262626]/20  hover:bg-[#262626] hover:text-[#fff] duration-300"
        onPress={onOpen}
      >
        <HiOutlinePencilSquare />
      </Button>
      <Modal
        className="rounded-sm p-4"
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">Update Role</label>
                  <input
                    {...register("category", { required: true })}
                    className="px-2 py-3 border border-[#262626]/20 rounded outline-none"
                    type="text"
                    placeholder="update"
                  />

                  {errors.category && (
                    <span className="text-[#ce4646]">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    className="text-sm font-semibold tracking-wider px-6 py-3 bg-[#262626] text-[#fff] hover:bg-[#EE804C] duration-300 rounded cursor-pointer"
                    type="submit"
                    value="Update Role"
                  />
                </div>
              </form>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateCategory;
