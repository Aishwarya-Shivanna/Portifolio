export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Project Intern",
    company: "Verzeo",
    location: "India",
    startDate: "Aug 2021",
    endDate: "Aug 2022",
    isRemote: true,
    achievements: [
      {
        text:
          "Analyzed financial performance and market trends of leading automotive companies, Tata Motors and Maruti Suzuki. " +
          "Evaluated key financial metrics, including balance sheets, profit & loss statements, and financial ratios." +
          "Assessed market position and operational efficiency of the companies.",
      },
      {
        text:
          "Studied the impact of market trends on stock performance and sector growth. " +
          "Collaborated with the team to compile findings and actionable recommendations in a detailed report.",
      },
    ],
    skills: [
      { name: "Microsoft Excel" },
      { name: "Financial Statement Analysis" },
      { name: "Financial Ratios" },
      { name: "Competitive Analysis" },
      { name: "Profit & Loss" },
      { name: "Stock Market Analysis" },
      { name: "Business Insight Generation" },
      { name: "Data Interpretation" },
      { name: "Microsoft PowerPoint" },
    ],
  },

  
];

export const previousExperiences: Experience[] = [
 ];
