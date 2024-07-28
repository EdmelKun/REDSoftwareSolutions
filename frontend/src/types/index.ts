import { Variants } from "framer-motion";

export interface Project {
  id: number;
  name: string;
  company: string;
  startDate: Date;
  endDate: Date;
  techStack: string[];
  description: string;
  role: string;
  responsibility: string;
  imageLink: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CardProps {
  name: string;
  startDate: string;
  endDate: string;
  imageLink: string;
  variants?: Variants;
  custom?: number;
}
