export const profile = {
  name: "Shreya Karka",
  roles: ["Software Engineer", "AI Engineer", "Java Developer", "Full Stack Engineer"],
  location: "Dallas, TX",
  email: "shreyakarka@gmail.com",
  phone: "+1 940-629-9068",
  tagline: "I build backend systems that scale and AI features that ship — from Spring Boot services to production RAG pipelines.",
  links: {
    github: "https://github.com/Shreya-Karka",
    linkedin: "https://www.linkedin.com/in/kshreya7/",
    leetcode: "https://leetcode.com/u/Shreya_Karka/",
  },
  stats: [
    { value: "5+", label: "Years Experience", color: "terracotta" },
    { value: "5", label: "Companies & Roles", color: "olive" },
    { value: "6", label: "Certifications", color: "terracotta" },
  ],
};

export const about = {
  paragraphs: [
    "I like working close to the problem: sitting with the people who feel it, understanding the workflow underneath it, and only then reaching for a framework. That habit has taken me from process engines to chatbots to document platforms, and it's what keeps the work interesting.",
    "I care about code that the next person can read without a walkthrough, and about teams that share what they learn instead of hoarding it. I try to be the kind of engineer who leaves things clearer than they found them.",
  ],
  // Points at /public/resume.pdf — drop your actual resume file into the
  // `public/` folder with this exact filename and the button below will
  // download it as-is. No code changes needed.
  resumeUrl: "/resume.pdf",
};

export const experience = [
  {
    role: "Java Backend Engineer",
    company: "SVCL Technologies",
    location: "Dallas, TX",
    period: "Jun 2025 — Present",
    accent: "terracotta",
    icon: "growth",
    stack: ["Spring Boot", "Spring Integration", "ActiveMQ", "AWS S3", "Git"],
    bullets: [
      "Architected a Spring Integration Process Engine coordinating data flow across 12+ microservices with ActiveMQ messaging, decoupling services so failures don't cascade.",
      "Built a Spring Boot middleware layer with custom Servlet Filters, plus a configurable notification engine for team-defined alerts.",
      "Owned AWS S3 asset lifecycle and secrets management, and embedded Claude + GitHub Copilot into daily workflow — a 30–40% cut in delivery time.",
      "Tightened the Git-based CI/CD pipeline, shrinking the gap between commit and live deployment.",
    ],
  },
  {
    role: "Software Engineer — AI/ML Capstone",
    company: "American Express",
    location: "Denton, TX",
    period: "Jan 2025 — May 2025",
    accent: "olive",
    icon: "amex",
    stack: ["Python", "Scikit-learn", "XGBoost", "Tableau", "Pandas"],
    bullets: [
      "Led an Amex-sponsored capstone predicting baggage-handling delays on 50M+ real-world operational records from American Airlines.",
      "Built an end-to-end ML pipeline — data cleaning, feature engineering, and model training with Random Forest and XGBoost.",
      "Built Tableau dashboards surfacing delay patterns, high-risk routes, and KPIs for non-technical stakeholders.",
      "Turned a complex logistics problem into a practical, data-driven decision tool as part of my M.S. capstone.",
    ],
  },
  {
    role: "Applied AI Engineer — Graduate Research Assistant",
    company: "University of North Texas",
    location: "Denton, TX",
    period: "Feb 2024 — May 2025",
    accent: "terracotta",
    icon: "research",
    stack: ["Python", "FastAPI", "Docker", "AWS EC2", "Datadog"],
    bullets: [
      "Built a RAG chatbot on Python 3.11 and FastAPI, pairing GPT models with a vector database for live, searchable answers.",
      "Containerized with Docker and deployed to AWS EC2, exposed via REST API and monitored in real time with Datadog.",
      "Took an open-ended research question to a working, deployable product in two semesters.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "OpenText Technologies",
    location: "Hyderabad, India",
    period: "Sep 2021 — Jul 2023",
    accent: "olive",
    icon: "associate",
    stack: ["Spring Boot", "Hibernate", "PostgreSQL", "RabbitMQ", "Kafka"],
    bullets: [
      "Built RESTful APIs on Spring Boot, Hibernate, and JPA powering content-management workflows at thousands of requests/day.",
      "Rewrote slow PostgreSQL queries and added indexes, cutting API response times in half; fed metadata into Apache Solr for search.",
      "Decoupled services with RabbitMQ and Kafka streaming, and rebuilt sync around differential updates — boosting responsiveness by 75%.",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Clonut Solutions",
    location: "Hyderabad, India",
    period: "Sep 2020 — Sep 2021",
    accent: "terracotta",
    icon: "gradcap",
    stack: ["Java", "Spring Boot", "JPA", "SQL"],
    bullets: [
      "Built REST endpoints in core Java and Spring Boot for the billing and accounting team.",
      "Managed persistence with JPA and automated billing exports to Excel, eliminating a manual, error-prone task.",
    ],
  },
];

// icon key referenced in components/TechIcon.jsx — every key below maps to
// a real brand/product logo (react-icons), not an invented shape.
export const techGroups = [
  {
    title: "Core Languages",
    icon: "java",
    accent: "terracotta",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Backend Frameworks",
    icon: "springboot",
    accent: "olive",
    skills: [
      { name: "Spring Boot", icon: "springboot" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "Node.js", icon: "nodejs" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    title: "Frontend",
    icon: "react",
    accent: "terracotta",
    skills: [
      { name: "React", icon: "react" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "jQuery", icon: "jquery" },
    ],
  },
  {
    title: "APIs & Data Interchange",
    icon: "restapi",
    accent: "olive",
    skills: [
      { name: "REST API", icon: "restapi" },
      { name: "GraphQL", icon: "graphql" },
      { name: "JSON", icon: "json" },
      { name: "XML", icon: "xml" },
    ],
  },
  {
    title: "Databases & Persistence",
    icon: "postgresql",
    accent: "terracotta",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "JPA", icon: "jpa" },
      { name: "JDBC", icon: "jdbc" },
      { name: "Redis", icon: "redis" },
      { name: "Solr", icon: "solr" },
    ],
  },
  {
    title: "Messaging & Streaming",
    icon: "kafka",
    accent: "olive",
    skills: [
      { name: "Kafka", icon: "kafka" },
      { name: "ActiveMQ", icon: "activemq" },
      { name: "RabbitMQ", icon: "rabbitmq" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "awss3",
    accent: "terracotta",
    skills: [
      { name: "AWS S3", icon: "awss3" },
      { name: "AWS ECS", icon: "awsecs" },
      { name: "AWS EC2", icon: "awsec2" },
      { name: "GCP", icon: "gcp" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
    ],
  },
  {
    title: "DevOps & Build Tools",
    icon: "git",
    accent: "olive",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Maven", icon: "maven" },
      { name: "Gradle", icon: "gradle" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "TeamCity", icon: "teamcity" },
      { name: "Ansible", icon: "ansible" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: "vault",
    accent: "terracotta",
    skills: [
      { name: "OAuth", icon: "oauth" },
      { name: "JWT", icon: "jwt" },
      { name: "Vault", icon: "vault" },
      { name: "Blackduck", icon: "blackduck" },
      { name: "Fortify", icon: "fortify" },
    ],
  },
  {
    title: "AI & Automation",
    icon: "llms",
    accent: "olive",
    skills: [
      { name: "LLMs", icon: "llms" },
      { name: "RAG", icon: "rag" },
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "Prompt Engineering", icon: "promptengineering" },
      { name: "GitHub Copilot", icon: "githubcopilot" },
    ],
  },
  {
    title: "Testing & Observability",
    icon: "selenium",
    accent: "terracotta",
    skills: [
      { name: "Selenium", icon: "selenium" },
      { name: "Datadog", icon: "datadog" },
    ],
  },
  {
    title: "Productivity & Collaboration",
    icon: "jira",
    accent: "olive",
    skills: [
      { name: "Jira", icon: "jira" },
      { name: "Confluence", icon: "confluence" },
      { name: "IntelliJ", icon: "intellij" },
      { name: "VS Code", icon: "vscode" },
      { name: "Eclipse", icon: "eclipse" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

export const projects = [
  {
    title: "E-commerce App",
    description: "A full storefront UI built with React and TypeScript — product listings, cart flow, and responsive layout, deployed on Vercel.",
    stack: ["React", "TypeScript", "CSS", "HTML"],
    accent: "terracotta",
    icon: "react",
    codeUrl: "https://github.com/Shreya-Karka/Ecommerce-app",
    demoUrl: "https://ecommerce-app-psi-three.vercel.app/",
  },
  {
    title: "Rule-Based Restaurant Chatbot",
    description: "A teachable rule-based chatbot with keyword triggers, small talk, and a booking state machine — runs as a CLI and as a Streamlit web app from the same core logic.",
    stack: ["Python", "Streamlit", "CLI"],
    accent: "olive",
    icon: "python",
    codeUrl: "https://github.com/Shreya-Karka/rule-based-chatbot",
    demoUrl: "https://rule-based-chatbot-mu.vercel.app/",
  },
  {
    title: "Train Tracker with Apache Kafka",
    description: "Real-time simulation of a train traveling Houston → Denton: positions streamed through Kafka, consumed in Java, and visualized on a live Leaflet map with smooth animation and trail.",
    stack: ["Java", "Apache Kafka", "Leaflet", "Docker"],
    accent: "terracotta",
    icon: "kafka",
    codeUrl: "https://github.com/Shreya-Karka/Train-Tracker-Using-Kafka-Java",
    demoUrl: "",
  },
  {
    title: "Italian Bistro — Restaurant Web App",
    description: "A responsive single-page restaurant site with a tabbed menu, dish filters, booking modal, and carousel-driven offers section — fully mobile-optimized.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "olive",
    icon: "bootstrap",
    codeUrl: "https://github.com/Shreya-Karka/Italian-restaurant-app",
    demoUrl: "https://italian-restaurant-app.vercel.app/",
  },
  {
    title: "TaskMate — React To-Do App",
    description: "A to-do app with light/dark themes and localStorage persistence — add, edit, delete, and color-coded task tracking built with React hooks.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    accent: "terracotta",
    icon: "react",
    codeUrl: "https://github.com/Shreya-Karka/TaskMate-react-project",
    demoUrl: "https://task-mate-react-project-zeta.vercel.app/",
  },
];

export const education = [
  {
    degree: "Master of Science, Advanced Data Analytics",
    school: "University of North Texas · Denton, TX",
    period: "Aug 2023 — May 2025",
    accent: "terracotta",
  },
  {
    degree: "Bachelor of Technology, Electronics and Communication",
    school: "Keshav Memorial Institute of Technology · Hyderabad, India",
    period: "Jun 2018 — May 2022",
    accent: "olive",
  },
];

export const recognitions = [
  {
    title: "Thumbs Up Award — Well Done",
    description:
      "Appreciating the efforts for taking on additional tasks and for providing knowledge transfer sessions to team members and the product management team.",
    accent: "terracotta",
    icon: "thumbsup",
  },
  {
    title: "High Five Award — Appreciate Your Work",
    description: "Recognized for exemplary ownership and commitment in task management.",
    accent: "olive",
    icon: "highfive",
  },
];

export const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise · via Forage",
    description: "Designed a RESTful employee-data service in Java Spring Boot, with JUnit and Mockito unit tests covering the API layer.",
    accent: "terracotta",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_5io3QxmDS7mjpnxwC_1751670573799_completion_certificate.pdf",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. · via Forage",
    description: "Simulated backend engineering work — Kafka integration for message-driven architecture, H2 persistence, and REST API controllers.",
    accent: "olive",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_5io3QxmDS7mjpnxwC_1751050718526_completion_certificate.pdf",
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera",
    description: "Learned responsive layout systems, grid components, and UI patterns using Bootstrap 4.",
    accent: "terracotta",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/NRNU6TPWEZ5M",
  },
  {
    title: "Introduction to Data Analysis Using Excel",
    issuer: "Coursera",
    description: "Covered formulas, pivot tables, and data visualization fundamentals for analysis workflows.",
    accent: "olive",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/55DGF1ZBCSXU",
  },
  {
    title: "Certification in Java",
    issuer: "HackerRank",
    description: "Validated core Java proficiency — OOP concepts, collections, and problem-solving under test conditions.",
    accent: "terracotta",
    credentialUrl: "https://www.hackerrank.com/certificates/04036fc44cb2",
  },
  {
    title: "Certification in Python",
    issuer: "HackerRank",
    description: "Validated Python fundamentals — data structures, scripting, and algorithmic problem-solving.",
    accent: "olive",
    credentialUrl: "https://www.hackerrank.com/certificates/0e2e3cfd5baa",
  },
];
