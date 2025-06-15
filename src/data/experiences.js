import { RxLaptop } from "react-icons/rx";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Software Engineer & Data Engineer",
    company: "Iconsulting",
    period: "2021 - present",
    description: "AI/ML systems integration including agents with RAG and LLM-based sentiment analysis, Full-stack web development, AWS cloud architecture with Lambda functions and infrastructure as code, advanced ETL pipelines for data integration and quality assurance.",
    technologies: [
      "FastAPI", 
      "Python", 
      "Angular",
      "React",
      "SQL", 
      "AWS", 
      "Terraform", 
      "Talend Data Studio", 
      "Talend Cloud", 
      "PowerBI", 
      "OpenWebUI", 
      "RAG", 
      "LLM", 
      "DAX", 
      "CI/CD"
    ],
    icon: RxLaptop,
    iconBackground: "rgb(153 211 126)"
  },
  {
    id: 2,
    type: "education",
    title: "M.Sc. in Artificial Intelligence",
    company: "Alma Mater Studiorum – Università di Bologna",
    period: "2019 - 2021",
    description: "Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing",
    technologies: ["Python", "Pytorch", "Tensorflow"],
    icon: HiOutlineAcademicCap,
    iconBackground: "rgb(153 211 126)"
  },
  {
    id: 3,
    type: "education",
    title: "B.Sc. in Computer Engineering",
    company: "Università degli Studi di Salerno",
    period: "2016 - 2019",
    description: "Math, Physics, Computer Programming, Electronics, Automation, Signal Theory",
    technologies: ["C", "Java", "Web Development", "SQL"],
    icon: HiOutlineAcademicCap,
    iconBackground: "rgb(153 211 126)"
  }
];