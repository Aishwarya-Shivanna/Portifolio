export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Master of Business Analytics ",
  school: "Northern Arizona University ",
  location: "Flagstaff,AZ United States",
  startDate: "Aug 2024",
  endDate: "Mar 2026",
  honors: [
   
  ],
  activities: [
    { name: "President of Mathematics Chapter" },
    { name: "President of Association for Computing Machinery Chapter" },
    { name: "Undergraduate Research Opportunity Program (URGO)" },
  ],
};
