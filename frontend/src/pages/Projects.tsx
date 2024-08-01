import { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import CardComponent from "../components/Card";
import { Project } from "../types";
import { getMonthAndYear } from "../utils/dateConversion";
import { divVariants, itemVariants } from "../animationVariants/variants";

const Projects = forwardRef<HTMLDivElement, object>((_props, ref) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
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
      className="grid h-[100vh] justify-center"
      ref={ref}
    >
      <div className="flex justify-center items-center my-10">
        <span className="text-5xl font-medium">My Projects</span>
      </div>
      <div className="flex flex-wrap justify-center gap-5 w-[95vw] ">
        {data.map((project: Project, index) => {
          return (
            <CardComponent
              key={project.id}
              name={project.name}
              startDate={getMonthAndYear(project.startDate)}
              endDate={getMonthAndYear(project.endDate)}
              imageLink={project.imageLink}
              variants={itemVariants}
              custom={index}
            />
          );
        })}
      </div>
    </motion.div>
  );
});

export default Projects;
