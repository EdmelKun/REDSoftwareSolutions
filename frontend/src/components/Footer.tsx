import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003366] p-5 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <p className="text-lg font-roboto font-bold mr-2">Connect with us:</p>
          <a
            href="https://www.facebook.com/profile.php?id=61563338828520"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm font-roboto">
          &copy; {new Date().getFullYear()} RED Software Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
