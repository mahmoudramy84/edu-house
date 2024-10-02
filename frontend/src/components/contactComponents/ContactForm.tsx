"use client";
import React from "react";
import ContactInputField from "./ContactInputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "./ContactFormSchema";

type TContactFormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactFormProps>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TContactFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ContactInputField
        label=" Full Name"
        id="name"
        type="text"
        register={register("name")}
        errors={errors.name?.message}
      />
      <ContactInputField
        label=" Email Address"
        id="email"
        type="email"
        register={register("email")}
        errors={errors.email?.message}
      />
      <ContactInputField
        label=" Message"
        id="message"
        type="textarea"
        register={register("message")}
        errors={errors.message?.message}
      />

      <button
        type="submit"
        className="w-full bg-transparent text-customPurple dark:bg-customPurple hover:bg-customPurple hover:text-white dark:text-white py-2 px-4 rounded-md dark:hover:bg-purple-800 focus:outline-none border border-customPurple  "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
