import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#003366] p-5 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Connect with Us Section */}
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

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4 md:mb-0">
          <div className="flex flex-col">
            <strong className="font-roboto">Mission:</strong>
            <p className="text-left font-roboto">
              Provide exceptional landing pages, websites,
              <br />
              software applications, and software consultations
              <br />
              that drive client success and satisfaction.
            </p>
          </div>
          <div className="flex flex-col">
            <strong className="font-roboto">Vision:</strong>
            <p className="text-left font-roboto">
              Become the go-to tech partner for businesses
              <br />
              seeking high-quality web development,
              <br />
              software development, and software consultation services.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm font-roboto">
          &copy; {new Date().getFullYear()} RED Software Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
