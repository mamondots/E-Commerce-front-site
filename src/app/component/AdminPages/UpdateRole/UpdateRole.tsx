"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const UpdateRole = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-sm">Update Role</label>
                  <select className="px-2 py-3 border border-[#262626]/20 rounded outline-none">
                    <option className="[#262626]/20" value="user">
                      User
                    </option>
                    <option className="[#262626]/20" value="admin">
                      Admin
                    </option>
                  </select>
                </div>
                <div>
                  <input
                    className="text-sm font-semibold tracking-wider px-6 py-3 bg-[#262626] text-[#fff] rounded cursor-pointer"
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

export default UpdateRole;
