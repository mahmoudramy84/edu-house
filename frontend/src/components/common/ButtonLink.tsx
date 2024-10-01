import React from "react";
import Link from "next/link";

interface IButtonLinkProps {
  href: string;
  children: React.ReactNode;
  addMargin?: boolean;
  withoutBg?: boolean;
}

const ButtonLink = ({
  href,
  children,
  addMargin,
  withoutBg,
}: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`px-6 py-3 border border-customPurple bg-customPurple text-white rounded-lg hover:bg-purple-800 transition-all flex items-center w-fit gap-2
      ${addMargin ? "mx-auto" : ""}
      ${
        withoutBg
          ? "bg-transparent !text-customPurple hover:!text-white dark:!text-white"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
