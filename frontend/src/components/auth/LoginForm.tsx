"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { LoginFormSchema, TLoginForm } from "./LoginFormSchema";
import { signIn } from "next-auth/react";
import AuthInputField from "./AuthInputField";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TLoginForm> = async ({ email, password }) => {
    const user = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (user?.error) {
      console.error("Login failed", user.error);
    } else {
      console.log("Login successful", user);
    }
    reset();
  };

  return (
    <form
      className="w-full sm:w-96 h-80 mx-auto bg-lightGray dark:bg-gray-800 shadow-xl dark:shadow-gray-800 rounded-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-black dark:text-white font-bold text-xl mb-5">
        Login
        <p className="text-xs font-normal ">logo will be here</p>
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
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg  w-full sm:w-auto px-4 py-2 text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Login
      </button>
      <p className="text-center text-xs mt-4 text-gray-600 dark:text-gray-300">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
