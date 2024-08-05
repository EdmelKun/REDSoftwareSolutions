import { CardProps } from "../types";
import { motion } from "framer-motion";
import { useState } from "react";

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
      viewport={{
        once: true,
      }}
      onHoverStart={() => setShow(true)}
      onHoverEnd={() => setShow(false)}
      whileHover={{
        scale: 1.1,
      }}
      className="h-60 w-[25%] bg-cover overflow-hidden bg-no-repeat bg-center border-2 border-gray-200 shadow-lg rounded-xl"
      style={{
        backgroundImage: `url(${imageLink})`,
      }}
    >
      <motion.div
        whileHover={{
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        className=" content-center h-[100%]"
      >
        {show && (
          <div className=" flex flex-col">
            <span className="text-3xl font-bold text-gray-200">{name}</span>
            <span className="text-yellow-400 font-medium">{description}</span>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default CardComponent;
