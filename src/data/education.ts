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
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Master of Business Analytics ",
  school: "Northern Arizona University ",
  location: "Flagstaff,AZ United States",
  startDate: "Aug 2024",
  endDate: "Dec 2025",
  gpa: "3.3",
  honors: [
   
  ],
  activities: [
    { name: "President of Mathematics Chapter" },
    { name: "President of Association for Computing Machinery Chapter" },
    { name: "Undergraduate Research Opportunity Program (URGO)" },
  ],
};
