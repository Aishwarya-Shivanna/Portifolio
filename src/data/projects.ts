import type { Project } from "@/types/project";


export const projectsData: Project[] = [
  {
    id: "1",
    title: "Bank Customer Subscription Prediction (Logistic Regression) ",
    description:
      "🌟 Developed a binary classification model to predict whether a bank customer will subscribe to a term deposit product."+ 
      " Performed end-to-end data preprocessing on a messy real-world dataset, including handling missing values, encoding categorical variables using one-hot encoding, scaling numerical features, and transforming the target variable. Built and evaluated a logistic regression model using accuracy, precision, recall, F1 score, and a confusion matrix. "+
      "Interpreted model coefficients to identify key positive and negative drivers influencing customer subscription behavior and translated findings into actionable marketing insights for targeted campaign optimization." 
      ,
    image: "/Portifolio/projects/project1.png",
    technologies: [
      "Python",
       "Pandas",
       "NumPy",
       "Scikit-learn",
        "Logistic Regression",
         "One-Hot Encoding", 
         "StandardScaler",
         "Classification Metrics", 
         "Jupyter Notebook",
    ],
    category: "Predictive Analytics, Customer Insights & Market Intelligence",
    links: {
      
    },
    featured: true,
  },
  {
    id: "2",
    title: "Coffee Shop Sales Analytics & Power BI Dashboard",
    description:
      "Built an end-to-end business intelligence solution to analyze coffee shop sales performance using Power Query and Power BI." +
      "Cleaned and transformed raw transactional data by standardizing data types, splitting and merging columns, handling text inconsistencies, and creating custom keys for orders, customers, and products. " +
      "Designed a relational data model and developed interactive dashboards to analyze top-selling products, customer distribution by city and state, revenue contribution by region, pricing trends by day, and long-term product and price evolution. " +
      "Delivered actionable insights to support inventory planning, regional marketing focus, and pricing strategy decisions. ",
    image: "/Portifolio/projects/project2.png",
    technologies: [
      "Power BI ",
      "Power Query",
      "Data Modeling",
      "DAX",
      "Interactive Dashboards",
      "Business Intelligence",
      "Data Visualization",
    ],
    category: "Business Intelligence, Reporting & Decision Support",
    links: {
     
    },
    featured: true,
  },
  {
    id: "3",
    title: "E-Commerce Web Scraping & Competitive Product Intelligence",
    description:
      "Built a robust, end-to-end Python web scraping pipeline to collect competitive product intelligence from a WooCommerce-based e-commerce platform. Implemented automated pagination handling, polite request headers, and fault-tolerant scraping logic to extract complete product data across multiple listing pages. Scraped product URLs, titles, prices, and full textual descriptions by combining listing-page extraction with deep product-level page crawling. Structured the scraped data into a clean, analysis-ready dataset and exported it to Excel for downstream pricing analysis, text mining, and competitive benchmarking",
    image: "/Portifolio/projects/project3.png",
    technologies: [
      "Python",
      "Requests",
      "BeautifulSoup",
      "lxml",
      "Pandas",
      "Google Colab",
      "Web Scraping",
      "Data Cleaning",
      "Excel",
    ],
    category: "Predictive Analytics, Customer Insights & Market Intelligence",
    links: {
     
    },
    featured: true,
  },
  {
    id: "4",
    title: "Hospital Readmission Analysis for Cognitive Heart Disease",
    description: "Analyzed hospital readmission patterns for patients with cognitive heart disease using a structured healthcare dataset. Built an interactive Excel dashboard to examine how readmission rates vary by age group, length of stay, comorbidities (diabetes, hypertension), and patient compliance levels. ",
    image: "/Portifolio/projects/project4.png",
    technologies: ["Microsoft Excel", "Pivot Tables","Pivot Charts", " Dashboard Design", " Healthcare Analytics", "Data Analysis",],
    category: "Business Intelligence, Reporting & Decision Support",
    links: {
     
    },
    featured: false,
  },
  {
    id: "5",
    title: "Chipotle Customer Segmentation, Targeting & Marketing Analytics",
    description:
      "Conducted an end-to-end customer analytics case study for Chipotle using survey data to support segmentation, targeting, and marketing strategy decisions. Classified demographic, psychographic, behavioral, marketing mix, and outcome variables, and performed data cleaning to handle missing responses.",
    image: "/Portifolio/projects/project5.png",
    technologies: [
      "R", "RStudio", "K-Means Clustering",  "Hierarchical Clustering",  "Linear Discriminant Analysis (LDA)", "ANOVA", "Linear Regression", "Tableau", "Excel", "Marketing Analytics",
      
    ],
    category: "Predictive Analytics, Customer Insights & Market Intelligence",
    links: {
      
    },
    featured: false,
  },
   {
    id: "6",
    title: "Arizona School Performance Trend, Hypothesis Testing & Forecasting",
    description:
      "Analyzed five years of Arizona A–F School Letter Grade data for Traditional 9–12 schools in Pinal County to evaluate performance trends, statistical improvement, and future outcomes. Merged and cleaned multi-year datasets in Excel, conducted exploratory data analysis to assess district-level and county-wide performance patterns, and compared earned versus eligible accountability points over time. ",
    image: "/Portifolio/projects/project6.png",
    technologies: [
      "Excel", "Data Cleaning",  "Exploratory Data Analysis (EDA)",  "Hypothesis Testing (t-test)", "Trend Analysis",  "Forecasting",  "Data Visualization",  "Education Analytics"
      
    ],
    category: "Business Intelligence, Reporting & Decision Support",
    links: {
      
    },
    featured: false,
  },
];
