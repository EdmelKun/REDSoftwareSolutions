import { motion } from "framer-motion";
import { divVariants } from "../animationVariants/variants";
import Lottie from "lottie-react";
import goalAnimation from "../assets/TargetAnimation.json";
import futureAnimation from "../assets/ProgressAnimation.json";

const Goal = () => {
  const textObject = [
    {
      id: 1,
      title: "Our Goal",
      description:
        "Provide exceptional landing pages, websites, software applications, and software consultations that drive client success and satisfaction.",
    },
    {
      id: 2,
      title: "Our Future",
      description:
        "Become the go-to tech partner for businesses seeking high-quality web development, software development, and software consultation services.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 mb-16">
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:grid md:grid-cols-12 flex flex-col"
      >
        <div className="flex col-span-5 items-center justify-center md:ml-5">
          <Lottie
            className="md:w-full md:h-full"
            animationData={goalAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="flex flex-col col-span-7 items-center justify-center gap-6">
          <span className="text-5xl font-roboto font-bold text-blue-950 text-center">
            {textObject[0].title}
          </span>
          <span className="md:text-2xl text-xl mx-20 text-center font-roboto">
            {textObject[0].description}
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
            {textObject[1].title}
          </span>
          <span className="md:text-2xl text-xl mx-20 text-center font-roboto">
            {textObject[1].description}
          </span>
        </div>
        <div className="flex col-span-5 items-center justify-center">
          <Lottie
            className="md:w-full md:h-full"
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
