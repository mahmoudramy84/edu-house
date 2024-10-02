import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const socialIcons = [
  { Icon: FaFacebook, link: "https://facebook.com" },
  { Icon: FaTwitter, link: "https://twitter.com" },
  { Icon: FaLinkedin, link: "https://linkedin.com" },
  { Icon: FaInstagram, link: "https://instagram.com" },
];

const SocialMediaIcons = () => {
  return (
    <>
      {socialIcons.map(({ link, Icon }, index) => (
        <Link
          key={index}
          href={link}
          target="_blank"
          aria-label={`go to ${link}`}
          className="transition duration-500 ease-in-out group
          bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center
          text-black dark:text-customPurple"
        >
          <Icon
            size={20}
            className="group-hover:scale-125 transition-all duration-500"
          />
        </Link>
      ))}
    </>
  );
};

export default SocialMediaIcons;
