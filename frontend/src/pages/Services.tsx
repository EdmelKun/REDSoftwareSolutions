import { forwardRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "../components/Card";
import { divVariants, itemVariants } from "../animationVariants/variants";
import { Service } from "../types";
import { services } from "../mocks";

const Services = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  //*DO NOT REMOVE*
  // const [data, setData] = useState<Service[]>([]);
  // const backendUrl =
  //   "https://redsoftwaresolutions-backend.onrender.com" ||
  //   "http://localhost:3000";

  // useEffect(() => {
  //   fetch(`${backendUrl}/api/services`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  //*DO NOT REMOVE*

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
      <div className="flex justify-center items-center h-[10%] mb-10">
        <span className="text-5xl font-roboto font-bold text-blue-950">
          Our Services
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 md:h-[75%] h-[100%]">
        {services.map((service: Service, index) => (
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
