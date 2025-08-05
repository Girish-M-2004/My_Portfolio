const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "assets/public/images/ideas.png" },
  { text: "Concepts", imgPath: "assets/public/images/concepts.png" },
  { text: "Designs", imgPath: "assets/public/images/designs.png" },
  { text: "Code", imgPath: "assets/public/images/code.png" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];


const logoIconsList = [
  {
    imgPath: "assets/public/images/logos/company-logo-1.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-2.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-3.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-4.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-5.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-6.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-7.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-8.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-9.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-10.png",
  },
  {
    imgPath: "assets/public/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "assets/public/images/logos/react.png",
    title: "Full-Stack Development",
    desc: "Proficient in both frontend and backend development using React.js, Node.js, Express, and databases like MySQL and MongoDB.",
  },
  {
    imgPath: "assets/public/images/logos/data_analyst.png",
    title: "Data Analysis & Visualization",
    desc: "Skilled in deriving insights from data using Python, Matplotlib, Seaborn, Tableau, and Power BI, along with ML modeling using Logistic Regression.",
  },
  {
    imgPath: "assets/public/images/logos/ml.png",
    title: "Machine Learning & AI",
    desc: "Hands-on experience building ML models for sentiment analysis and face recognition using NLP, TensorFlow Lite, and logistic regression.",
  },
  {
    imgPath: "assets/public/images/logos/cloud.png",
    title: "Cloud Deployment & DevOps",
    desc: "Knowledgeable in cloud migration and CI/CD pipelines using Oracle Cloud, Azure DevOps, Jenkins, and secure key vault management.",
  },
  {
    imgPath: "assets/public/images/team.png",
    title: "Collaboration & Research",
    desc: "Worked in cross-functional teams during internships and research roles, supporting business decisions and trend assessments.",
  },
  {
    imgPath: "assets/public/images/time.png",
    title: "On-Time Delivery",
    desc: "Demonstrated ability to meet project deadlines in academic and internship work with a focus on quality and efficiency.",
  },
];

const techStackImgs = [
  {
    name: "Python Developer",
    imgPath: "assets/public/images/logos/python.svg",
  },
  {
    name: "Java Developer",
    imgPath: "assets/public/images/logos/java.png",
  },
  {
    name: "React Developer",
    imgPath: "assets/public/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "assets/public/images/logos/node.png",
  },
  {
    name: "Machine Learning",
    imgPath: "assets/public/images/logos/ML.png",
  },
  {
    name: "SQL",
    imgPath: "assets/public/images/logos/sql.png",
  },
  {
    name: "Cloud Migration and Deploy",
    imgPath: "assets/public/images/logos/cloud.png",
  },
  {
    name: "Data Analyst",
    imgPath: "assets/public/images/logos/data_analyst.png",
  },
  {
    name: "Project Manager",
    imgPath: "assets/public/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Girish was great to work with. He brought solid research skills and helped us make sense of market trends through clear, data-driven insights. Reliable and sharp — we appreciated having him on board.",
    imgPath: "assets/public/images/exp1.png",
    logoPath: "assets/public/images/logo1.png",
    title: "Research Analyst",
    date: "October 2024 - December 2024",
responsibilities: [
  "Conducted deep market research to uncover trends and opportunities.",
  "Turned complex data into clear, useful insights for business decisions.",
  "Worked closely with different teams to support strategic planning.",
  ]
  },
  {
    review:
      "Girish’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "assets/public/images/exp3.png",
    logoPath: "assets/public/images/logo3.png",
    title: "Docker Migration",
    date: "January 2025 - February 2025",
    responsibilities: [
      "Led the migrating of Docker's web applications, focusing on scalability.",
      "Improved CI/CD pipelines to streamline the migration and reduce deployment time.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "assets/public/images/linkedin.png",
  },

  {
    name: "Github",
    url: "https://github.com/Girish-M-2004",
    imgPath: "assets/public/images/github.jpg",
  },

 /* {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "assets/public/images/insta.png",
  },
  */
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  socialImgs,
  expCards,
  techStackIcons,
  techStackImgs,
  navLinks,
};