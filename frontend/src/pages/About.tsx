import { forwardRef, useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import ReactStars from "react-stars";
import { divVariants, itemVariants } from "../animationVariants/variants";
import BackgroundDesign2 from "../assets/BackgroundDesign2.png";
import BackgroundDesign3 from "../assets/BackgroundDesign3.png";
import BackgroundDesign4 from "../assets/BackgroundDesign4.png";
import BackgroundDesign5 from "../assets/BackgroundDesign5.png";
import { motion } from "framer-motion";

const About = forwardRef<HTMLDivElement, object>((_props, ref) => {
  const companyTraits = [
    {
      id: 1,
      trait: "Career Development",
      rating: 5,
    },
    {
      id: 2,
      trait: "Work Life Balance",
      rating: 5,
    },
    {
      id: 3,
      trait: "High Quality Projects",
      rating: 5,
    },
    {
      id: 4,
      trait: "Continuous Learning",
      rating: 5,
    },
    {
      id: 5,
      trait: "Customer Centric",
      rating: 5,
    },
    {
      id: 6,
      trait: "Long Term Thinking",
      rating: 5,
    },
  ];

  const images = [
    BackgroundDesign2,
    BackgroundDesign3,
    BackgroundDesign4,
    BackgroundDesign5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const springs = useSprings(
    images.length,
    images.map((_, index) => ({
      opacity: index === currentImageIndex ? 1 : 0,
      config: { duration: 1000 },
    }))
  );

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="grid items-center"
      ref={ref}
    >
      <div className="grid grid-cols-10 h-[100vh]">
        <div className="flex col-span-6 justify-center items-center flex-col gap-5">
          <span className="text-5xl font-roboto font-bold">About Us</span>
          <span className="w-[90%] font-poppins">
            We are a team of developers who are passionate about creating high
            quality software solutions. We have experience in a wide range of
            technologies and are always looking to learn more. We are dedicated
            to providing the best possible service to our clients and are always
            looking for new and exciting projects to work on.
          </span>
          <div className="flex justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 w-full max-w-4xl">
              {companyTraits.map((trait, index) => (
                <motion.li
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  key={trait.id}
                  custom={index}
                  className="flex justify-between items-center p-4 gap-2 bg-white shadow-md rounded-md"
                >
                  <a className="text-lg font-bold text-gray-700 font-poppins">
                    {trait.trait}
                  </a>
                  <ReactStars
                    count={5}
                    value={trait.rating}
                    size={24}
                    color1="gray"
                    color2="#ffd700"
                    edit={false}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex col-span-4 justify-center items-center relative h-full">
          {springs.map((style, index) => (
            <animated.img
              key={index}
              src={images[index]}
              alt="Background Design"
              style={{
                ...style,
                position: "absolute",
                width: "90%",
                height: "50%",
                borderRadius: "10px",
                border: "2px solid gray",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default About;
