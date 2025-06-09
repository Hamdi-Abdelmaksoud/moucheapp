import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const socialLinks = [
  {
    href: "/",
    icon: <FaInstagramSquare className="w-6 h-6 text-pink-600" />,
    label: "Instagram"
  },
  {
    href: "/",
    icon: <FaFacebook className="w-6 h-6 text-blue-600" />,
    label: "Facebook"
  },
  {
    href: "/",
    icon: <IoIosMail className="w-6 h-6 text-black" />,
    label: "Email"
  }
];

export default socialLinks;
