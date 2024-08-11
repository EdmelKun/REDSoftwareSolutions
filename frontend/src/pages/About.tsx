import { forwardRef, useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import ReactStars from "react-stars";
import { divVariants, itemVariants } from "../animationVariants/variants";
import BackgroundDesign2 from "../assets/BackgroundDesign2.png";
import BackgroundDesign3 from "../assets/BackgroundDesign3.png";
import BackgroundDesign4 from "../assets/BackgroundDesign4.png";
import BackgroundDesign5 from "../assets/BackgroundDesign5.png";
import CEO from "../assets/CEO.jpg";
import TechLead from "../assets/TechLead.jpg";
import COO from "../assets/COO.jpg";
import Dom from "../assets/Dominic Bernas.jpg";
import Ed from "../assets/Edmel Linaugo.jpg";
import Renz from "../assets/Renzo Laporno.jpg";
import { motion } from "framer-motion";
import Goal from "../components/Goal";

const About = forwardRef<HTMLDivElement, object>((_props, ref) => {
  const companyTraits = [
    { id: 1, trait: "Career Development", rating: 5 },
    { id: 2, trait: "Work Life Balance", rating: 5 },
    { id: 3, trait: "High Quality Projects", rating: 5 },
    { id: 4, trait: "Continuous Learning", rating: 5 },
    { id: 5, trait: "Customer Centric", rating: 5 },
    { id: 6, trait: "Long Term Thinking", rating: 5 },
  ];

  const images = [
    BackgroundDesign2,
    BackgroundDesign3,
    BackgroundDesign4,
    BackgroundDesign5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [founderImages, setFounderImages] = useState([
    CEO,
    TechLead,
    COO,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const springs = useSprings(
    images.length,
    images.map((_, index) => ({
      opacity: index === currentImageIndex ? 1 : 0,
      config: { duration: 1000 },
    }))
  );

  const handleMouseEnter = (index: number) => {
    const newImages = [...founderImages];
    if (index === 0) newImages[index] = Dom; 
    if (index === 1) newImages[index] = Ed; 
    if (index === 2) newImages[index] = Renz; 
    setFounderImages(newImages);
  };

  const handleMouseLeave = (index: number) => {
    const originalImages = [CEO, TechLead, COO];
    setFounderImages(originalImages);
  };

  return (
    <div className="grid items-center" ref={ref}>
      <div className="grid md:grid-cols-10 h-[100vh]">
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex md:col-span-6 justify-center items-center flex-col gap-5"
        >
          <span className="text-5xl font-roboto font-bold block text-center text-blue-950 my-5">
            About Us
          </span>
          <span className="text-xl text-center mx-16 mb-4 font-roboto">
            We are a team of developers who are passionate about creating high
            quality software solutions. We have experience in a wide range of
            technologies and are always looking to learn more. We are dedicated
            to providing the best possible service to our clients and are always
            looking for new and exciting projects to work on.
          </span>
          <div className="flex justify-center">
            <ul className="grid grid-cols-2 gap-4 list-none p-0 w-full max-w-4xl">
              {companyTraits.map((trait, index) => (
                <motion.li
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={trait.id}
                  custom={index}
                  className="flex h-16 md:h-full justify-between items-center p-4 gap-2 bg-white shadow-md rounded-md"
                >
                  <span className="md:text-lg text-sm font-bold text-gray-700 font-poppins">
                    {trait.trait}
                  </span>
                  <ReactStars
                    className="grid grid-cols-2 text-xs md:block md:grid-cols-none md:text-normal"
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
        </motion.div>
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:flex md:col-span-4 md:justify-center md:items-center md:relative md:h-full hidden"
        >
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
        </motion.div>
      </div>
      <span className="text-5xl font-roboto font-bold block text-center text-blue-950 my-5">
            Meet the Team and the Founders
          </span>
      <div className="flex flex-col items-center mt-10 space-y-2">
  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
    <div
      className="relative flex flex-col items-center transition-transform duration-300 transform hover:scale-105 transform md:translate-x-[-50px] lg:translate-x-[-250px]"
      onMouseEnter={() => handleMouseEnter(0)}
      onMouseLeave={() => handleMouseLeave(0)}
    >
      <img
        src={founderImages[0]}
        alt="Founder 1"
        className="w-64 h-72 rounded-lg border-4 border-gray-300"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
      <p className="mt-2 text-center font-roboto font-bold text-blue-950 text-4xl">Chief Executive Officer</p>
    </div>
    <div className="mt-2 text-xl text-center mx-4 mb-4 font-roboto max-w-xl transform md:translate-x-[-50px] lg:translate-x-[-280px]">
        Dominic Bernas is a visionary leader and business analyst focused on driving the company's strategic direction. 
        With a strong background in frontend development, he fosters creativity and innovation to enhance user experiences 
        and achieve lasting success.
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
    <div
      className="relative flex flex-col items-center transition-transform duration-300 transform hover:scale-105 "
      onMouseEnter={() => handleMouseEnter(1)}
      onMouseLeave={() => handleMouseLeave(1)}
    >
      <img
        src={founderImages[1]}
        alt="Founder 2"
        className="w-64 h-72 rounded-lg border-4 border-gray-300"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
      <p className="mt-2 text-center font-roboto font-bold text-blue-950 text-4xl">Technical Leader</p>
    </div>
    <div className="mt-2 text-xl text-center mx-4 mb-4 font-roboto max-w-xl">
        Edmel Linaugo is a tech lead with expertise in full-stack development. 
        He ensures the team delivers high-quality, innovative solutions by inspiring 
        collaboration and maintaining rigorous standards across all projects.
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 transform md:translate-x-[-50px] lg:translate-x-[250px]">
    <div
      className="relative flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => handleMouseEnter(2)}
      onMouseLeave={() => handleMouseLeave(2)}
    >
      <img
        src={founderImages[2]}
        alt="Founder 3"
        className="w-64 h-72 rounded-lg border-4 border-gray-300"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
      <p className="mt-2 text-center font-roboto font-bold text-blue-950 text-4xl">Chief Operating Officer</p>
    </div>
    <div className="mt-2 text-xl text-center mx-4 mb-4 font-roboto max-w-xl transform md:translate-x-[-50px] lg:translate-x-[-50px]">
        Renzo Laporno is a versatile frontend developer who excels in operations management. 
        His flexibility and focus on process optimization empower the team to work efficiently 
        and achieve outstanding results together.
    </div>
  </div>
</div>
<Goal />
    </div>
  );
});

export default About;
