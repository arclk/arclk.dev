export const projects = [
  {
    id: 1,
    title: "PracGSMLN",
    description: "PyTorch implementation of a neurosymbolic framework that integrates neural networks with Markov Logic Networks (MLNs). The framework allows for merging symbolic and sub-symbolic reasoning by introducing neural networks to provide grounding-specific weights for different instantiations of the same first-order logic formula in MLNs.",
    githubLink: "https://github.com/arclk/pracgsmln-neurosymbolic-framework",
    demoLink: null,
    image: require("../Assets/Projects/pracgsmln.png"),
    technologies: ["PyTorch", "Python", "Machine Learning", "Neurosymbolic AI"],
    isBlog: false,
    category: "AI/ML",
    year: "2021"
  },
  {
    id: 2,
    title: "Object Recognition on Store Shelves",
    description: "The project focuses on developing object detection systems to identify single and multiple instances of products in given scene images.",
    githubLink: "https://github.com/arclk/object-recognition-on-store-shelves",
    demoLink: null,
    image: require("../Assets/Projects/store_shelves.png"),
    technologies: ["Computer Vision", "Object Detection", "Python", "Deep Learning"],
    isBlog: false,
    category: "Computer Vision",
    year: "2020"
  },
  {
    id: 3,
    title: "COVID-19 SEQIJR Model",
    description: "NetLogo implementation of the SEQIJR epidemiological model for studying the evolution of the COVID-19 epidemic.",
    githubLink: "https://github.com/arclk/covid-19-seqijr-model",
    demoLink: null,
    image: require("../Assets/Projects/seqijr_model_diagram.png"),
    technologies: ["NetLogo", "Epidemiology", "Simulation", "Modeling"],
    isBlog: false,
    category: "Simulation",
    year: "2020"
  },
  {
    id: 4,
    title: "Quadcopter Simulator",
    description: "Simulation tool of 2D quadcopters that navigate using noisy GPS position mitigated by the usage of a Kalman filter for state estimation.",
    githubLink: "https://github.com/arclk/quadcopter-simulator",
    demoLink: null,
    image: require("../Assets/Projects/quadcopters.png"),
    technologies: ["Simulation", "Kalman Filter", "Control Systems", "Python"],
    isBlog: false,
    category: "Simulation",
    year: "2019"
  },
  {
    id: 5,
    title: "Perfect Weighted Packing (PWP) Problem",
    description: "This project focuses on solving the Perfect Weighted Packing (PWP) problem, which involves packing a set of rectangles into a strip without overlapping, using two different approaches: Constraint Programming (CP) and Satisfiability Modulo Theories (SMT).",
    githubLink: "https://github.com/arclk/perfect-weighted-packing-problem",
    demoLink: null,
    image: require("../Assets/Projects/pwp.png"),
    technologies: ["Constraint Programming", "SMT", "Optimization", "Algorithms"],
    isBlog: false,
    category: "Algorithms",
    year: "2021"
  },
  {
    id: 6,
    title: "Clickbait Titles Analysis",
    description: "Text mining analysis on clickbait titles, aiming to identify the causes and patterns that make a title a clickbait.",
    githubLink: "https://github.com/arclk/clickbait-titles-analysis",
    demoLink: null,
    image: require("../Assets/Projects/clickbait_analysis.png"),
    technologies: ["Text Mining", "NLP", "Data Analysis", "Machine Learning"],
    isBlog: false,
    category: "Data Science",
    year: "2020"
  },
  {
    id: 7,
    title: "AI Agent Prototype for PowerBI",
    description: "Development of an agent-based system for natural language interaction with PowerBI dashboards. Built on OpenWebUI, featuring visual components using RAG, query translation for reporting, and a semantic PowerBI model with QnA visuals. Includes advanced query agent using knowledge base semantics for automatic DAX code generation.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/powerbi_agent.png"), // You'll need to add this image
    technologies: ["OpenWebUI", "RAG", "PowerBI", "DAX", "Natural Language Processing", "Semantic Modeling"],
    isBlog: false,
    category: "AI/ML",
    year: "2025"
  },
  {
    id: 8,
    title: "Sentiment Analysis & Text Classification System",
    description: "Web application using LLM models to automatically analyze sentiment and classify thematic content of text comments. Through prompt engineering and LLM inference, the system determines emotional polarity and categorizes textual content.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/sentiment_analysis.png"), // You'll need to add this image
    technologies: ["LLM", "Prompt Engineering", "Sentiment Analysis", "Text Classification", "Web Application"],
    isBlog: false,
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 9,
    title: "R&D Data Analysis Platform",
    description: "Design and implementation of various custom web applications to perform analysis on data from different Research and Development areas.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/rd_analysis.png"), // You'll need to add this image
    technologies: ["Web Development", "Data Analysis", "Custom Applications", "R&D Analytics"],
    isBlog: false,
    category: "Data Science",
    year: "2024"
  },
  {
    id: 10,
    title: "Data Synchronization Middleware",
    description: "Development of a middleware system for seamless communication and data synchronization between two systems, utilizing AWS SQS for message queuing, AWS Lambda functions for event-driven computation, and AWS DynamoDB for storing and enriching data. Used Terraform for provisioning and managing the AWS infrastructure as code, ensuring consistent and reproducible deployments.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/middleware_sync.png"), // You'll need to add this image
    technologies: ["AWS", "Lambda", "Message Queues", "Event-Driven Architecture", "Data Synchronization", "Terraform", "Infrastructure as Code"],
    isBlog: false,
    category: "Backend",
    year: "2023"
  },
  {
    id: 11,
    title: "Product Sales Data Ranking Platform",
    description: "Design and development of full-stack web applications using FastAPI, Python, SQL, and Angular for analyzing and classifying sales of manufacturing products based on historical data, enabling data-driven decision-making. Deployed the web application with CI/CD on AWS Elastic Beanstalk, ensuring secure and scalable hosting.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/data_ranking.png"), // You'll need to add this image
    technologies: ["FastAPI", "Python", "SQL", "Angular", "AWS Elastic Beanstalk", "CI/CD", "Data Analysis", "Full-Stack Development"],
    isBlog: false,
    category: "Data Science",
    year: "2022"
  },
  {
    id: 12,
    title: "Advanced ETL Data Pipeline",
    description: "Implementation of efficient data integration and data engineering solutions with ETL workflows using Talend Data Studio, Talend Cloud, and Talend Data Stewardship, ensuring seamless merging, cleaning, and reconciliation of manufacturing data from various sources to improve data quality and consistency.",
    githubLink: null,
    demoLink: null,
    image: null, //require("../Assets/Projects/etl_pipeline.png"), // You'll need to add this image
    technologies: ["ETL", "Talend Data Studio", "Talend Cloud", "Talend Data Stewardship", "Data Integration", "Data Quality", "Data Engineering"],
    isBlog: false,
    category: "Data Engineering",
    year: "2022"
  }
];