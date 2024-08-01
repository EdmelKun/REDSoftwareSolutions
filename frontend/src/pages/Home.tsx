import companyLogo from "../assets/CroppedCompanyLogo.png";
import backgroundImage from "../assets/background.png";
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
        className="bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        ref={ref}
      >
        <div className="backdrop-brightness-50 ">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="grid grid-cols-12 h-[90vh] items-center gap-4"
          >
            <div className="flex justify-end  col-span-5 border-r-2 border-gray-200 h-52">
              <img className='mr-5' src={companyLogo} />
            </div>
            <div className="grid grid-rows-2 gap-2  col-span-7">
              <span className="text-xl content-center text-gray-200">
                Hi there! Do you need a{" "}
              </span>
              <div className="flex ">
                <AnimatePresence>
                  <motion.span
                    key={services[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-6xl font-bold content-center text-gray-200 "
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
