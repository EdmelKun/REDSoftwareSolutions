import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#003366] p-5 text-center">
      <div className="flex justify-center items-center mb-2">
        <p className="text-white text-lg font-bold mr-2">Connect with us:</p>
        <a href="https://www.facebook.com/profile.php?id=61563338828520" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaFacebookF size={24} color="#fff" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaTwitter size={24} color="#fff" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedinIn size={24} color="#fff" />
        </a>
      </div>
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} RED Software Solutions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
