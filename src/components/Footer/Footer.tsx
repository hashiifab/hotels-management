import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-16 bg-background-light dark:bg-background-dark text-text-default dark:text-text-dark">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-primary dark:text-secondary text-3xl hover:text-tertiary-dark transition-colors duration-300"
          >
            LuxStay
          </Link>

          {/* Contact Heading (for larger screens) */}
          <h4 className="mt-6 md:mt-0 font-semibold text-3xl md:text-4xl text-primary dark:text-secondary text-center">
            Contact
          </h4>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              123 Luxury Avenue
            </p>
            <div className="flex items-center py-3 hover:text-primary dark:hover:text-secondary transition-colors">
              <BsFillSendFill className="text-primary dark:text-secondary text-xl" />
              <p className="ml-3">contact@luxstay.com</p>
            </div>
            <div className="flex items-center hover:text-primary dark:hover:text-secondary transition-colors">
              <BsTelephoneOutbound className="text-primary dark:text-secondary text-xl" />
              <p className="ml-3">+1 (800) 123-4567</p>
            </div>
            <div className="flex items-center pt-3 hover:text-primary dark:hover:text-secondary transition-colors">
              <BiMessageDetail className="text-primary dark:text-secondary text-xl" />
              <p className="ml-3">support@luxstay.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 md:text-right">
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Our Story
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Get in Touch
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Our Privacy Commitment
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Terms of Service
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Customer Assistance
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="flex-1 md:text-right">
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Dining Experience
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Wellness
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Fitness
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Sports
              </li>
              <li className="cursor-pointer hover:text-primary dark:hover:text-secondary transition-colors">
                Events
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width Developed By Section */}
      <div className="w-full bg-primary dark:bg-secondary py-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-tertiary-light dark:text-gray-400">
            Developed by{" "}
            <Link
              href="https://www.linkedin.com/in/hashiif-abdillah-665373297/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-tertiary-light hover:text-tertiary-dark dark:hover:text-tertiary-light transition-colors duration-300"
            >
              Hasseeve
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
