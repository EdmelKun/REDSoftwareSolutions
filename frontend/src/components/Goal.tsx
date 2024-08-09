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
        "Provide exceptional landing pages, websites, software applications, and software consultations that drive client success and satisfaction.",
    },
    {
      id: 2,
      title: "Our Future",
      image:
        "https://res.cloudinary.com/dow2macod/image/upload/v1722869629/portfolio/232d1dca-b97b-4e1a-9a5c-7ebea576b6fd.png",
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
        className="grid md:grid-cols-12 gap-6"
      >
        <div className="flex flex-col col-span-7 items-center justify-center gap-2 p-3 bg-white bg-opacity-95 rounded-lg border-4 border-blue-300 shadow-lg max-w-md mx-auto">
          <span className="text-3xl md:text-4xl font-roboto font-bold text-center">
            {textObject[0].title}
          </span>
          <span className="text-md md:text-lg mx-2 text-center font-roboto">
            {textObject[0].description}
          </span>
          <img
            src={textObject[0].image}
            alt="goal"
            className="h-full w-full object-cover mt-2" // Margin-top for spacing
          />
        </div>
        <div className="h-10" />
        <div className="flex flex-col col-span-7 items-center justify-center gap-2 p-3 bg-white bg-opacity-95 rounded-lg border-4 border-red-300 shadow-lg max-w-md mx-auto mt-auto md:col-start-8 md:mt-10"> {/* Set mt-auto to push it down */}
          <span className="text-3xl md:text-4xl font-roboto font-bold text-center">
            {textObject[1].title}
          </span>
          <span className="text-md md:text-lg mx-2 text-center font-roboto">
            {textObject[1].description}
          </span>
          <img
            src={textObject[1].image}
            alt="future"
            className="h-full w-full object-cover mt-2" // Margin-top for spacing
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Goal;
