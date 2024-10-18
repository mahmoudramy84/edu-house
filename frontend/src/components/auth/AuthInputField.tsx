import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";

type TInputProps = {
  type: string;
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errors?: string;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
};

const AuthInputField = ({
  type,
  id,
  label,
  register,
  errors,
  showPassword,
  toggleShowPassword,
}: TInputProps) => {
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={inputType}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        {...register}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
      >
        {label}
      </label>
      <p className="text-[10px] text-red-600 dark:text-rose-200">{errors}</p>

      {type === "password" && toggleShowPassword && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-0 top-3 text-gray-600 dark:text-gray-300"
        >
          {showPassword ? <FaEye /> : <FaEyeLowVision />}
        </button>
      )}
    </div>
  );
};

export default AuthInputField;
