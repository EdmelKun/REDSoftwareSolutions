import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "../components/Card";
import { divVariants, itemVariants } from "../animationVariants/variants";
import { Service } from "../types";

<<<<<<< HEAD
const Services = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [data, setData] = useState([]);
=======
const Services = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [data, setData] = useState<Service[]>([]);
>>>>>>> 4f18623fd182463aee2d57a91fd560eb0d1aea34

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
<<<<<<< HEAD
      className=" h-[100vh] justify-center "
      ref={ref}
    >
      <div className="flex justify-center items-center h-[25%]">
        <span className="text-5xl font-medium">Our Services</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5  h-[75%]  ">
        {data.map((service: Service, index) => {
          return (
            <CardComponent
              key={service.id}
              name={service.name}
              description={service.description}
              imageLink={service.imageLink}
              variants={itemVariants}
              custom={index}
            />
          );
        })}
=======
      className="h-[100vh] justify-center"
      ref={ref}
    >
      <div className="flex justify-center items-center h-[25%]">
        <span className="text-5xl font-medium font-poppins">Our Services</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 h-[75%]">
        {data.map((service: Service, index) => (
          <CardComponent
            key={service.id}
            name={service.name}
            description={service.description}
            imageLink={service.imageLink}
            variants={itemVariants}
            custom={index}
          />
        ))}
>>>>>>> 4f18623fd182463aee2d57a91fd560eb0d1aea34
      </div>
    </motion.div>
  );
});

export default Services;
