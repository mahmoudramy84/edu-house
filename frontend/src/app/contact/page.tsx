import { SectionHeader } from "@/components/common";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          {" "}
          <SectionHeader
            title="Contact Us"
            description="We'd love to hear from you! Reach out to us with any questions or feedback."
            isCenter={true}
          />
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-customPurple dark:text-purple-400 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@yourcompany.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-customPurple dark:text-purple-400 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-customPurple dark:text-purple-400 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Your Street, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-transparent text-customPurple dark:bg-customPurple hover:bg-customPurple hover:text-white dark:text-white py-2 px-4 rounded-md dark:hover:bg-purple-800 focus:outline-none border border-customPurple  "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
