"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../common";

const AuthForm = () => {
  const authFormSchema = z
    .object({
      first_name: z.string().min(1, { message: "First Name is required" }),
      last_name: z.string().min(1, { message: "Last Name is required" }),
      email: z
        .string()
        .min(1, { message: "Email is required " })
        .email({ message: "Not a valid email" }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  type TAuthForm = z.infer<typeof authFormSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAuthForm>({
    resolver: zodResolver(authFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TAuthForm> = ({
    first_name,
    last_name,
    email,
    password,
  }) => {
    const user = {
      first_name,
      last_name,
      email,
      password,
    };
    console.log(user);
    reset();
  };

  return (
    <form
      className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-800 rounded-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-black dark:text-white font-bold text-xl mb-5">
        Signup
      </h1>
      <InputField
        type="email"
        id="email"
        register={register("email")}
        errors={errors.email?.message}
        label="Email"
      />

      <InputField
        type="password"
        id="password"
        register={register("password")}
        errors={errors.password?.message}
        label="Password"
      />

      <InputField
        type="password"
        id="confirm_password"
        register={register("confirm_password")}
        label={"Confirm password"}
        errors={errors.confirm_password?.message}
      />

      <div className="grid md:grid-cols-2 md:gap-6">
        <InputField
          type="text"
          id="first_name"
          register={register("first_name")}
          errors={errors.first_name?.message}
          label={"First Name"}
        />

        <InputField
          type="text"
          id="last_name"
          register={register("last_name")}
          label={" Last name"}
          errors={errors.last_name?.message}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
