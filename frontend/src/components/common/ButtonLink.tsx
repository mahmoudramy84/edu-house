import React from "react";
import Link from "next/link";

interface IButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

const ButtonLink = ({ href, children }:IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="px-6 py-3 bg-customPurple text-white rounded-lg hover:bg-purple-800 transition-all mb-12 inline-block"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
