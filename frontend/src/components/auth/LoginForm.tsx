"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { LoginFormSchema, TLoginForm } from "./LoginFormSchema";
import AuthInputField from "./AuthInputField";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import cn from "@/lib/utils";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
=======
import axios from "axios";
import cn from "@/lib/utlis";
import Cookies from "js-cookie";
import { useUserContext } from "@/context/UserContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setIsUserLoggedIn } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
>>>>>>> develop
  } = useForm<TLoginForm>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TLoginForm> = async ({ email, password }) => {
<<<<<<< HEAD
    const user = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (user?.error) {
      console.error("Login failed", user.error);
    } else {
      console.log("Login successful", user);
      // router.push("/");
    }

    reset();
=======
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        {
          redirect: false,
          email,
          password,
        }
      );
      console.log("login response", response);

      if (response.status === 200) {
        const token = response.data.token;
        Cookies.set("token", token, {
          path: "/",
        });
        setIsUserLoggedIn(true);

        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1000);
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
>>>>>>> develop
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
<<<<<<< HEAD
        disabled={isSubmitting}
        className={cn(
          "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg w-full sm:w-auto px-4 py-2 text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700",
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        )}
      >
        {isSubmitting ? "Loading..." : "Login"}
=======
        disabled={loading}
        className={cn(
          "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg  w-full sm:w-auto px-4 py-2 text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700",
          { "bg-blue-900": loading }
        )}
      >
        {loading ? "loading..." : "Login"}
>>>>>>> develop
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
