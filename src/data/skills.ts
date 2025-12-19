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
    name: "Microsoft Office",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      " 365 proficiency",
    ],
  },
  {
    name: "Database system",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "ETL Process",
    ],
  },
  {
    name: " Data analytics tools",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "Tableau",
      "PowerBI",
      "Excel",
    ],
  },
  {
    name: "Technical skills:",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Financial analysis,",
      "Budgeting",
      "Forecasting",
      "Investment analysis",
      "Risk management",
    ],
  },
];
