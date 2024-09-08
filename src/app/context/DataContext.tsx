import React, { createContext, useContext } from "react";

interface Education {
  degree: string;
  institution: string;
  year: string;
  addition_info?: string;
  courses: string[];
  logo: string;
}
interface Project {
  title: string;
  description: string;
  liveDemo?: string;
  github?: string;
  details?: string;
  technologies: string[];
  image: string;
}

interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Data {
  name: string;
  degree: string;
  resume: string;
  github: string;
  linkedin: string;
  education: Education;
  workex: WorkExperience[];
  projects: Project[];
}

const initialData: Data = {
  name: 'Aldus Rielle Mendoza',
  degree: 'Computer Science',
  github: "https://github.com/renderAR",
  linkedin: "https://www.linkedin.com/in/aldus-mendoza-a29094312",
  resume: "https://drive.google.com/file/d/1zAXeUutyQoz6KAE8kDf4UBaSyGYGmWf0/view?usp=drive_link",
  education: {
    degree: "BS Computer Science",
    institution: "University of the Philippines - Los Baños",
    year: "July 2015 - December 2019",
    courses: [
      "Web Programming",
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Artificial Intelligence",
      "Image Processing and Computer Graphics"
    ],
    logo: "/portfolio/images/UP.png",
  },
  workex: [
    {
      company: "Factset",
      title: "Software Developer",
      startDate: "July 2021",
      endDate: "Present",
      description: [
        '•	Developed full stack apps for providing financial data to clients',
        '•	Developed AI solutions for scraping clients’ documents',
        '•	Integrated the CI/CD pipelines and migrations',
        '•	Contributed to the architecture and design for features and optimizations',
        '•	Experienced working with an Agile-driven team and uses Scrum',
      ],
    },
    {
      company: "Ateneo de Naga University",
      title: "Intern",
      startDate: "June 2018",
      endDate: "July 2018",
      description: [
        "•	Developed a full stack app for tracking transactions in the university library and MIS department",
      ],
    },
  ],
  projects: [
    {
      title: "Group Receipt Calculator",
      description:
        "A hackathon web app project that scrapes a group's receipt snapshot for items, then calculates the total bills for each person based on item ownership.",
      image: "/portfolio/images/receipt.jpg",
      technologies: ["Typescript", "Python", "Svelte", "Flask", "Pytesseract", "OpenCV", "Git"],
      details: 'https://drive.google.com/file/d/1dttLZTZ7m0TahDJQHhSxmDP8SwV4Rq5J/view?usp=sharing'
    },
    {
      title: "FinderUP",
      description:
        "An Android mobile app for posting lost-and-found items for the university campus, with UX that is similar to social media apps.",
      image: "/portfolio/images/finderUP.png",
      technologies: ["Java", "Firebase", "Android Studio", "Git"],
      github: 'https://github.com/renderAR/finderup',
    },
    {
      title: "My Portfolio",
      description:
        "This simple web app for showcasing my job experiences and side projects.",
      image: "/portfolio/images/portfolio.png",
      technologies: ["Typescript", "React", "Material UI", "Vite", "Git"],
    },
  ],
};

const DataContext = createContext<Data | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
};
