import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TContactInputProps = {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  errors?: string;
};

const ContactInputField = ({
  label,
  id,
  type,
  register,
  errors,
}: TContactInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <>
          <textarea
            id={id}
            {...register}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          <p className="text-[10px] text-red-600 dark:text-[#ff0000]">
            {errors}
          </p>
        </>
      ) : (
        <>
          <input
            id={id}
            type={type}
            {...register}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-[10px] text-red-600 dark:text-[#ff0000]">
            {errors}
          </p>
        </>
      )}
    </div>
  );
};

export default ContactInputField;
