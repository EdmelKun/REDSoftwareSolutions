import companyLogo from "../assets/images/CroppedCompanyLogo.png";
import backgroundImage from "../assets/images/background.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, forwardRef } from "react";
import { divVariants } from "../animationVariants/variants";

const Home = forwardRef<HTMLDivElement, object>((_props, ref) => {
  const [index, setIndex] = useState(0);

  const services = [
    "Website?",
    "Landing Page?",
    "Software Solution?",
    "Software Consultation?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        ref={ref}
      >
        <div className="backdrop-brightness-50 md:p-0 p-5">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="flex flex-col md:grid md:grid-cols-12 md:h-[90vh] items-center md:gap-4 h-[50vh]"
          >
            <div className="flex md:justify-end  col-span-5 md:border-r-2 border-gray-200 md:h-52 h-52 md:w-full w-52 mt-14 md:mt-0">
              <img src={companyLogo} />
            </div>
            <div className="grid grid-rows-2 md:gap-2  col-span-7">
              <span className="md:text-2xl content-center text-gray-200 font-roboto md:text-left text-center">
                Hi there! Do you need a{" "}
              </span>
              <div className="flex justify-center md:justify-normal ">
                <AnimatePresence>
                  <motion.span
                    key={services[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="md:text-7xl text-2xl font-bold content-center text-gray-200 font-roboto "
                  >
                    {services[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
});

export default Home;
