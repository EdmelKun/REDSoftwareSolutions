import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "../components/Card";
import { divVariants, itemVariants } from "../animationVariants/variants";
import { Service } from "../types";

const Services = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [data, setData] = useState<Service[]>([]);
  const backendUrl =
    "https://redsoftwaresolutions-backend.onrender.com" ||
    "http://localhost:3000";

  useEffect(() => {
    fetch(`${backendUrl}/api/services`)
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
      className="h-[100vh] justify-center"
      ref={ref}
    >
      {/* Smaller Container for the Our Services header */}
      <div className="flex justify-center items-center md:h-[25%] h-[10%] mb-5">
  <div className="bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-lg inline-block">
    <span className="text-5xl font-roboto font-bold">Our Services</span>
  </div>
</div>
      
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 md:h-[75%] h-[100%]">
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
      </div>
    </motion.div>
  );
});

export default Services;
