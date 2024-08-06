import { motion } from "framer-motion";
import { divVariants } from "../animationVariants/variants";

const Goal = () => {
  const textObject = [
    {
      id: 1,
      title: "Our Goal",
      image:
        "https://res.cloudinary.com/dow2macod/image/upload/v1722869543/portfolio/6ae8e424-1094-4833-b3f1-5af1549dc5cc.png",
      description:
        "Provide exceptional landing pages, websites, software applications and software consultations that drive client success and satisfaction.",
    },
    {
      id: 2,
      title: "Our Future",
      image:
        "https://res.cloudinary.com/dow2macod/image/upload/v1722869629/portfolio/232d1dca-b97b-4e1a-9a5c-7ebea576b6fd.png",
      description:
        "Become the go-to tech partner for businesses seeking high-quality web development, software development and software consultation services.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 mb-16">
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-12 "
      >
        <div className="flex col-span-5 items-center justify-center">
          <img
            src={textObject[0].image}
            alt="goal"
            className="h-full w-[90%] rounded-xl border-gray-200 shadow-xl"
          />
        </div>
        <div className="flex flex-col col-span-7 items-center justify-center gap-6">
          <span className="text-5xl font-roboto font-bold">
            {textObject[0].title}
          </span>
          <span className="text-lg mx-16 ">{textObject[0].description}</span>
        </div>
      </motion.div>
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-12 "
      >
        <div className="flex flex-col col-span-7 items-center justify-center gap-6">
          <span className="text-5xl font-roboto font-bold">
            {textObject[1].title}
          </span>
          <span className="text-lg mx-16 ">{textObject[1].description}</span>
        </div>
        <div className="flex col-span-5 items-center justify-center">
          <img
            src={textObject[1].image}
            alt="goal"
            className="h-full w-[90%] rounded-xl border-2 border-gray-200 shadow-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Goal;
