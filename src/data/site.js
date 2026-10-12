// ============================================================
//  EDIT YOUR DETAILS HERE — shared by the portfolio and resume
// ============================================================

export const site = {
  name: "V Kumarthi",
  shortName: "kumarthi",
  initial: "K",
  role: "Java Full Stack Web Developer",
  location: "Kannampalayam, Sulur, Tamil Nadu",

  summary: "Computer Science and Engineering student with hands-on experience in Java, Spring Boot, React and SQL. Focused on full-stack web development, with a grounding in data structures, object-oriented programming and database design.",
  email: "kumarthii078@gmail.com",
  github: "https://github.com/kumarthii078-cloud",
  linkedin: "https://www.linkedin.com/in/kumarthi-V",
}

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  college: "RVS College of Engineering (Autonomous)",
  place: "Kannampalayam, Sulur, Tamil Nadu",
  cgpa: "8.40",
}

export const skillGroups = [
  { title: "Languages", skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"] },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  { title: "Databases", skills: ["MySQL", "Oracle SQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "Maven", "VS Code", "Postman"] },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "MVC Architecture",
      "CRUD Operations",
      "Authentication",
      "DBMS",
    ],
  },
]

// TODO: add your GitHub / live links, and tweak the descriptions to match what you built
export const projects = [
  {
    slug: "codequest",
    title: "CodeQuest",
    description:
      "A coding practice platform where learners solve programming challenges and track their progress.",
    problem:
      "Beginners often struggle to practise coding consistently because problems, feedback and progress tracking live in different places.",
    solution:
      "CodeQuest brings challenges, solutions and progress into one full-stack web application with a clean interface and a REST API behind it.",
    features: [
      "Browse programming challenges by topic and difficulty",
      "User accounts with login and authentication",
      "Progress tracking across solved challenges",
      "REST API connecting the React frontend to the Java backend",
    ],
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    challenges:
      "Designing the database so challenges, users and progress stay consistent as the app grows.",
    learning:
      "Layered Spring Boot architecture, JPA entity relationships, and connecting a React frontend to a REST backend.",
    github: "",
    live: "",
  },
  {
    slug: "aircrew-management-system",
    title: "Aircrew Management System",
    description:
      "A web application to manage aircrew details, assignments and schedules in one place.",
    problem:
      "Managing crew records and flight assignments by hand is slow and easy to get wrong.",
    solution:
      "The Aircrew Management System stores crew data in a database and gives staff simple screens to add, view, update and assign crew members.",
    features: [
      "Add, update, view and delete aircrew records (CRUD)",
      "Assign crew members to flights and schedules",
      "Search and filter crew information",
      "Relational database design with validated inputs",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS"],
    challenges:
      "Modelling crew, flights and assignments as related tables without duplicating data.",
    learning:
      "Entity mapping with Hibernate, validation, and building maintainable CRUD workflows.",
    github: "",
    live: "",
  },
]
