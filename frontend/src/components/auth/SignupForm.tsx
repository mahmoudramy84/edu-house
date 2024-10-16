"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { SignupFormSchema, TSignupForm } from "./SignupFormSchema";
import axios from "axios";
import AuthInputField from "./AuthInputField";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignupForm>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TSignupForm> = async ({
    first_name,
    last_name,
    email,
    password,
  }) => {
    try {
      const name = `${first_name.toLowerCase()}.${last_name.toLowerCase()}`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
        {
          name,
          email,
          password,
        }
      );

      console.log("response", response);

      if (response.status === 201) {
        console.log("Account created successfully");
      }
    } catch (error) {
      console.error("Error creating account", error);
    }
    reset();
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form
      className="max-w-md mx-auto bg-lightGray dark:bg-gray-800 shadow-xl dark:shadow-gray-800 rounded-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-black dark:text-white font-bold text-xl mb-5">
        Signup
      </h1>
      <AuthInputField
        type="email"
        id="email"
        register={register("email")}
        errors={errors.email?.message}
        label="Email"
      />

      <AuthInputField
        type="password"
        id="password"
        register={register("password")}
        errors={errors.password?.message}
        label="Password"
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
      />

      <AuthInputField
        type="password"
        id="confirm_password"
        register={register("confirm_password")}
        label={"Confirm password"}
        errors={errors.confirm_password?.message}
      />

      <div className="grid md:grid-cols-2 md:gap-6">
        <AuthInputField
          type="text"
          id="first_name"
          register={register("first_name")}
          errors={errors.first_name?.message}
          label={"First Name"}
        />

        <AuthInputField
          type="text"
          id="last_name"
          register={register("last_name")}
          label={" Last name"}
          errors={errors.last_name?.message}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg  w-full sm:w-auto px-4 py-2 text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Signup
      </button>
      <p className="text-center text-xs mt-4 text-gray-600 dark:text-gray-300">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
