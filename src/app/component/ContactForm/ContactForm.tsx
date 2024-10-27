import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold">
          Keep in touch with us
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:mt-20 mt-10">
        <div className="flex flex-col gap-8">
          <input
            className="py-3 px-4 border border-[#262626]/40 bg-transparent font-medium outline-none"
            type="text"
            placeholder="Your full name"
          />
          <input
            className="py-3 px-4 border border-[#262626]/40 bg-transparent font-medium outline-none"
            type="text"
            placeholder="Your email address"
          />
          <input
            className="py-3 px-4 border border-[#262626]/40 bg-transparent font-medium outline-none"
            type="text"
            placeholder="Your mobile number"
          />
          <div className="inline-flex items-baseline gap-4">
            <input type="checkbox" name="" id="" />
            <p className="text-[#262626]/60">
              I accept the terms & conditions and I understand that my data will
              be hold securely in accordance with the privacy policy.
            </p>
          </div>
        </div>

        <div>
          <textarea
            className="py-3 px-4 border border-[#262626]/40 bg-transparent w-full font-medium outline-none"
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="You messages here.."
          ></textarea>

          <div className="mt-4">
            <button className="px-6 py-3 border-2 border-[#F57D4C] text-sm font-semibold text-[#F57D4C] hover:bg-[#F57D4C] hover:text-[#fff] duration-300 cursor-pointer">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
