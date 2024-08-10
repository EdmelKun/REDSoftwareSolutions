import { CardProps } from "../types";
import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import webDevAnimation from "../assets/WebsiteDevelopmentAnimation.json";
import landingPageAnimation from "../assets/LandingPageAnimation.json";
import softwareSolutionsAnimation from "../assets/SoftwareSolutionsAnimation.json";
import consultationAnimation from "../assets/ConsultationAnimation.json";

const animations = [
  webDevAnimation,
  landingPageAnimation,
  softwareSolutionsAnimation,
  consultationAnimation,
];

const CardComponent = ({
  name,
  description,
  imageLink,
  variants,
  custom,
}: CardProps) => {
  const [show, setShow] = useState(false);

  return (
    <motion.button
      variants={variants}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onHoverStart={() => setShow(true)}
      onHoverEnd={() => setShow(false)}
      whileHover={{
        scale: 1.1,
      }}
      onClick={() => setShow(true)}
      className="h-72 md:h-60 w-[75%] md:w-[25%] bg-cover overflow-hidden bg-no-repeat bg-center border-2 border-gray-200 shadow-lg rounded-xl relative"
      style={{
        backgroundImage: `url(${imageLink})`,
      }}
    >
      <motion.div
        whileHover={{
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        className="content-center h-full relative"
      >
        {show && (
          <div className="absolute top-4 left-0 w-full z-20 flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-gray-200">{name}</span>
            <span className="text-yellow-400 font-medium">{description}</span>
          </div>
        )}
        {show && (
          <div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center">
            <Lottie
              animationData={animations[parseInt(custom)]}
              loop={false}
              autoplay={true}
              style={{ pointerEvents: "none", width: "70%", height: "70%" }}
            />
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default CardComponent;
