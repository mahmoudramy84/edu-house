import { SocialMediaIcons } from "@/components";
import { ContactForm } from "@/components/contactComponents";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-purple-400 text-2xl" />,
    title: "Email",
    info: "contact@yourcompany.com",
  },
  {
    icon: <FaPhone className="text-purple-400 text-2xl" />,
    title: "Phone",
    info: "+1 (555) 123-4567",
  },
  {
    icon: <FaMapMarkerAlt className="text-purple-400 text-2xl" />,
    title: "Location",
    info: "123 Your Street, City, Country",
  },
];

const Contact = () => {
  return (
    <div className=" py-16 bg-[url('/images/bg_contact.jpg')] bg-center bg-no-repeat ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-sm text-white dark:text-gray-300">
            We&apos;d love to hear from you! Reach out to us with any questions
            or feedback.
          </p>
        </div>

        {/* contact info */}
        <div className="grid grid-cols-12 gap-8 md:grid-cols-none md:flex md:flex-col-reverse lg:grid lg:grid-cols-12">
          <div className="col-span-12 md:col-span-4 space-y-10">
            <div className="flex flex-col space-y-8">
              {contactInfo.map((info, index) => (
                <div className="flex items-center space-x-4" key={index}>
                  {info.icon}

                  <div>
                    <h3 className="text-xl font-semibold text-white dark:text-gray-100">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 ">
              <SocialMediaIcons />
            </div>
          </div>

          {/* form */}
          <div className="col-span-12 md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
