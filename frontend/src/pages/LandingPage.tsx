import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navBarVariants } from "../animationVariants/variants";
import Home from "../pages/Home";
import Services from "./Services";
import About from "./About";
import LandingBG from "../assets/landingBG.jpg";
import logo from "../assets/CompanyLogo.png";
import Contacts from "./Contacts";

const LandingPage = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (section: string) => {
    navigate(`/${section}`);
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
        backgroundImage: `url(${LandingBG})`,
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
        <div className="flex justify-evenly">
          <button onClick={() => handleScrollTo("about")}>About</button>
          <button onClick={() => handleScrollTo("services")}>Services</button>
          <button onClick={() => handleScrollTo("contacts")}>Contact</button>
        </div>
      </motion.div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Contacts ref={contactsRef} />
    </div>
  );
};

export default LandingPage;
