import React from "react";

const ShippingCalacu = () => {
  return (
    <div className="lg:px-8 px-4 py-8">
      <h2 className="font-semibold text-base text-[#262626]">
        Get shipping estimates
      </h2>

      <div className="mt-4">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]/40">
              City
            </label>
            <select className="outline-none border border-[#262626]/40 py-2 px-4">
              <option value="">---</option>
              <option value="">Dhaka</option>
              <option value="">Comilla</option>
              <option value="">B.Baria</option>
              <option value="">Sylet</option>
              <option value="">Chitogram</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#262626]/40">
              Postal/Zip code
            </label>
            <input
              className="outline-none border border-[#262626]/40 py-2 px-4"
              type="text"
              placeholder="Zip/Postal Code"
            />
          </div>

          <div className="bg-[#262626] text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer text-center py-3">
            <button className="uppercase text-sm font-semibold">
              Calculate shipping
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between font-semibold">
              <h2>Subtotal</h2>
              <p>$81.00 BD</p>
            </div>
            <p className="mt-3 text-[#262626]/60 text-base border-b border-[#262626]/20 pb-4">
              Taxes and shipping calculated at checkout
            </p>
          </div>

          <div className="bg-[#262626] text-[#fff] hover:bg-[#F57D4C] duration-300 cursor-pointer text-center py-4 mt-2">
            <input
              className="outline-none uppercase font-semibold text-sm"
              type="submit"
              value="Check out"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingCalacu;
