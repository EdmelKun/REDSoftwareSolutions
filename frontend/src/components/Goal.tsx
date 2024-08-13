import { motion } from "framer-motion";
import { divVariants } from "../animationVariants/variants";
import Lottie from "lottie-react";
import goalAnimation from "../assets/animations/TargetAnimation.json";
import futureAnimation from "../assets/animations/ProgressAnimation.json";
import { goalsObject } from "../mocks/index";

const Goal = () => {
  return (
    <div className="flex flex-col h-full md:my-10">
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:grid md:grid-cols-12 flex flex-col"
      >
        <div className="flex col-span-5 items-center justify-center md:ml-5">
          <Lottie
            className="md:w-[75%] md:h-[100%]"
            animationData={goalAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="flex flex-col col-span-7 items-center justify-center gap-6">
          <span className="text-5xl font-roboto font-bold text-blue-950 text-center">
            {goalsObject[0].title}
          </span>
          <span className="md:text-2xl text-xl mx-20 text-center font-roboto">
            {goalsObject[0].description}
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:grid md:grid-cols-12 flex flex-col-reverse"
      >
        <div className="flex flex-col col-span-7 items-center justify-center gap-6">
          <span className="text-5xl font-roboto font-bold text-blue-950 text-center">
            {goalsObject[1].title}
          </span>
          <span className="md:text-2xl text-xl mx-20 text-center font-roboto">
            {goalsObject[1].description}
          </span>
        </div>
        <div className="flex col-span-5 items-center justify-center">
          <Lottie
            className="md:w-[75%] md:h-[100%]"
            animationData={futureAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Goal;
