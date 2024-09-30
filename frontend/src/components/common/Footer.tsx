import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Edu City
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Empowering learners worldwide with top-notch educational content.
            Your gateway to a brighter future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-900 dark:hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-gray-900 dark:hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/instructors" className="hover:text-gray-900 dark:hover:text-white">
                Instructors
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h4>
          <ul className="space-y-2">
            <li>Email: support@educity.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Edu City Road, Learning Town, USA</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-gray-300 dark:border-gray-700 pt-8">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Edu City. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
