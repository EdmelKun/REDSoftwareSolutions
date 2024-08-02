import { Variants } from "framer-motion";

export interface Service {
  id: number;
  name: string;
  description: string;
  imageLink: string;
}

export interface CardProps {
  name: string;
  description: string;
  imageLink: string;
  variants?: Variants;
  custom?: number;
}
