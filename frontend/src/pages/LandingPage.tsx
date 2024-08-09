import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarVariants } from "../animationVariants/variants";
import Home from "../pages/Home";
import Services from "./Services";
import About from "./About";
import MainBackground from "../assets/MainBackground.png";
import logo from "../assets/CompanyLogo.png";
import Contacts from "./Contacts";
import Footer from "../components/Footer";
import { TfiMenuAlt } from "react-icons/tfi";

const LandingPage = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const handleScrollTo = (section: string) => {
    navigate(`/${section}`);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const section = location.pathname.replace("/", "");
    let ref: React.RefObject<HTMLDivElement> | null = null;

    switch (section) {
      case "contacts":
        ref = contactsRef;
        break;
      case "services":
        ref = servicesRef;
        break;
      case "home":
        ref = homeRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      default:
        ref = homeRef;
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div
      className="bg-gray-100 bg-repeat"
      style={{
        backgroundImage: `url(${MainBackground})`,
      }}
    >
      <motion.div
        variants={navBarVariants}
        initial="hidden"
        whileInView="visible"
        className="grid bg-gray-900 text-gray-200 grid-cols-2 h-14 fixed w-full z-10"
      >
        <div className="flex">
          <button onClick={() => handleScrollTo("")} className="mx-5">
            <img className="h-10" src={logo} />
          </button>
        </div>
        <div className="hidden md:flex justify-evenly space-x-4">
  <button
    onClick={() => handleScrollTo("about")}
    className="px-4 py-2 text-lg font-semibold text-whitebg-blue-500 rounded hover:bg-blue-600transition-colors duration-300">About</button>
  <button
    onClick={() => handleScrollTo("services")}
    className="px-4 py-2 text-lg font-semibold text-whitebg-blue-500 roundedhover:bg-blue-600transition-colors duration-300 ">Services</button>
  <button
    onClick={() => handleScrollTo("contacts")}
    className="px-4 py-2 text-lg font-semibold text-whitebg-blue-500 roundedhover:bg-blue-600transition-colors duration-300">Contact</button>
</div>

        <div className="md:hidden flex items-center justify-self-end w-[25%]">
          <TfiMenuAlt onClick={toggleMenu} className="h-10 w-10" />
        </div>
        {openMenu && (
          <div className="md:hidden flex flex-col absolute top-12 gap-6 right-0 bg-gray-900 shadow-md p-8 z-10 rounded-lg">
            <button onClick={() => handleScrollTo("about")}>About</button>
            <button onClick={() => handleScrollTo("services")}>Services</button>
            <button onClick={() => handleScrollTo("contacts")}>Contact</button>
          </div>
        )}
      </motion.div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Contacts ref={contactsRef} />
      <Footer />
    </div>
  );
};

export default LandingPage;
