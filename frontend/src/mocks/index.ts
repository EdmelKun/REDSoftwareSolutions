import WebDevelopment from "../assets/images/WebDevelopment.png";
import LandingPage from "../assets/images/LandingPage.png";
import SoftwareSolutions from "../assets/images/SoftwareSolutions.png";
import SoftwareConsultation from "../assets/images/SoftwareConsultation.png";
import Dom from "../assets/images/Dominic Bernas.jpg";
import Ed from "../assets/images/Edmel Linaugo.jpg";
import Renz from "../assets/images/Renzo Laporno.jpg";

export const services = [
  {
    id: 1,
    name: "Website Development",
    description: "We build websites",
    imageLink: WebDevelopment,
  },
  {
    id: 2,
    name: "Landing Pages",
    description: "We build landing pages",
    imageLink: LandingPage,
  },
  {
    id: 3,
    name: "Software Solutions",
    description: "We do software solutions",
    imageLink: SoftwareSolutions,
  },
  {
    id: 4,
    name: "Consultation",
    description: "We do software consultations",
    imageLink: SoftwareConsultation,
  },
];

export const companyTraits = [
  { id: 1, trait: "Career Development", rating: 5 },
  { id: 2, trait: "Work Life Balance", rating: 5 },
  { id: 3, trait: "High Quality Projects", rating: 5 },
  { id: 4, trait: "Continuous Learning", rating: 5 },
  { id: 5, trait: "Customer Centric", rating: 5 },
  { id: 6, trait: "Long Term Thinking", rating: 5 },
];

export const companyOwners = [
  {
    name: "Chief Executive Officer",
    image: Dom,
    index: 0,
    description:
      "Dominic Bernas is a visionary leader and business analyst focused on driving the company's strategic direction. With a strong background in frontend development, he fosters creativity and innovation to enhance user experiences and achieve lasting success.",
  },
  {
    name: "Chief Technical Leader",
    image: Ed,
    index: 1,
    description:
      "Edmel Linaugo is a tech lead with expertise in full-stack development. He ensures the team delivers high-quality, innovative solutions by inspiring collaboration and maintaining rigorous standards across all projects.",
  },
  {
    name: "Chief Operating Officer",
    image: Renz,
    index: 2,
    description:
      "Renzo Laporno is a versatile frontend developer who excels in operations management. His flexibility and focus on process optimization empower the team to work efficiently and achieve outstanding results together.",
  },
];

export const goalsObject = [
  {
    id: 1,
    title: "Our Goal",
    description:
      "Provide exceptional landing pages, websites, software applications, and software consultations that drive client success and satisfaction.",
  },
  {
    id: 2,
    title: "Our Future",
    description:
      "Become the go-to tech partner for businesses seeking high-quality web development, software development, and software consultation services.",
  },
];
