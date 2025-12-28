import { Brain, Cloud, Code, Terminal } from "lucide-react";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
   {
    name: " Data analytics tools",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python(Pandas, NumPy, Scikit-learn)",
      "R(RStudio)",
      "Tableau",
      "PowerBI",
      "Excel(Advanced Analytics)",
    ],
  },
  {
    name: "Database system",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "ETL Process",
     " Data Cleaning & Transformation" ,
      "Relational Data Modeling",
     " Dimensional Modeling (Star Schema)",
     " Data Integration (Multi-source Data)",
    "  Data Quality & Validation" ,
     " SQL for Analytics (Joins, Aggregations, Filters)",
    ],
  },
 {
    name: "Microsoft Office",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      " 365 proficiency",
      "Microsoft Excel",  
       " Power Query",
       " Pivot Tables",
       " Pivot Charts" ,
       " Lookups (VLOOKUP / XLOOKUP)" ,
       " Forecasting ",
       " Trend Analysis" ,
       " Microsoft PowerPoint" ,
       " Executive ",
       " Insight Reporting" ,
       " Data-driven Presentations" ,
       " Microsoft Word" ,
       " Business & Analytical Documentation" ,
    ],
  },
  {
    name: "Technical skills:",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Financial analysis,",
      "Exploratory Data Analysis (EDA)",
       " Business & Financial Analysis" ,
     " Statistical Analysis",
     " Data Mining Techniques",
     " Classification (Logistic Regression)",
     " Regression Analysis",
     " Clustering (K-Means, Hierarchical)",
     " Healthcare Analytics",
     " KPI & Performance Analysis",
     
      " Insight Generation",
      " Marketing & Customer Analytics",
      
     " Hypothesis Testing (t-tests, ANOVA)",
     " Forecasting & Trend Analysis",
     
     " Dashboard Design & Data Visualization",
    
     
     
     " Decision Support" ,
   
    ],
  },
];
