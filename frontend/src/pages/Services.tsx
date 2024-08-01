import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "../components/Card";
import { divVariants, itemVariants } from "../animationVariants/variants";
import { Service } from "../types";

const Services = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [data, setData] = useState([]);

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
      </div>
    </motion.div>
  );
});

export default Services;
